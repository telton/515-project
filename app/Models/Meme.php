<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meme extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'memes';

    /**
     * Validation rules.
     *
     * @var array
     */
    protected $rules = [
        'title'     => 'required',
        'user_id'   => 'required|integer',
        'photo_url' => 'required',
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
     * A meme can have many tags.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tags()
    {
        return $this->hasMany(\App\Models\Tag::class, 'meme_id', 'id');
    }
}
