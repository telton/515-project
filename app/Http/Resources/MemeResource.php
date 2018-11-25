<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MemeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title'      => $this->title,
            'photo_url'  => $this->photo_url,
            'user_id'    => $this->user_id,
            'created_at' => $this->created_at->toDateTimeString(),
            'tags'       => TagResource::collection($this->whenLoaded('tags')),
        ];
    }
}
