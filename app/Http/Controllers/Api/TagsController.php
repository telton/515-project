<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\TagResource;
use App\Models\Tag;

class TagsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::all();

        return TagResource::make($tags);
    }
}
