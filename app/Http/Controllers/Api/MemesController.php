<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\MemeResource;
use App\Models\Meme;
use App\Services\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MemesController extends ApiController
{
    /**
     * @var \App\Services\Cloudinary
     */
    protected $cloudinary;

    /**
     * MemesController constructor.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param Cloudinary $cloudinary
     */
    public function __construct(Cloudinary $cloudinary)
    {
        $this->cloudinary = $cloudinary;
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Meme         $meme
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Meme $meme)
    {
        $search = $request->query('search');

        // If there's a value to search by, hit search (Algolia/Laravel Scout).
        if ($search) {
            $memes = Meme::search($search)->orderBy('created_at', 'desc')->paginate();
        } else {
            $memes = $meme->orderBy('created_at', 'desc')->paginate();
        }

        // Eager load the tags.
        $memes->load('tags');

        return MemeResource::collection($memes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request.
        $validator = Validator::make($request->all(), [
            'title'   => 'required',
            'user_id' => 'required',
            'meme'    => 'required|file',
        ], [
            'required' => 'The :attribute field is required.',
            'file'     => 'The :attribute field must be a proper file.',
        ]);

        if ($validator->fails()) {
            return $this->respondUnprocessableWithMessageJson($validator->errors()->first());
        }

        try {
            // Upload the image to Cloudinary and create the Meme model.
            $response = $this->cloudinary->upload($request->file('meme'));
        } catch (\Cloudinary\Error $e) {
            return $this->respondErrorWithMessageJson('There was an error uploading your meme.');
        }

        // Create the meme in our DB.
        $meme = \App\Models\Meme::create([
            'title'     => $request->input('title'),
            'user_id'   => $request->input('user_id'),
            'photo_url' => $response['secure_url'],
        ]);

        // Attach any tags that were added to it.
        foreach ($request->input('tags', []) as $tag) {
            $meme->tags()->attach($tag);
        }

        return (new MemeResource($meme))
                ->response()
                ->setStatusCode(201);
    }
}
