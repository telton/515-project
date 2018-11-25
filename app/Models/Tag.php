<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags';

    /**
     * Validation rules.
     *
     * @var array
     */
    protected $rules = [
        'tag' => 'required',
    ];

    /**
     * Define the fillable fields.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'user_id',
        'photo_url',
    ];

    /**
     * A tag can belong to many memes.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function memes()
    {
        return $this->belongsToMany(\App\Models\Meme::class, 'memes_tags', 'tag_id', 'meme_id');
    }
}
