<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Meme extends Model
{
    use Searchable;

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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany(\App\Models\Tag::class, 'memes_tags', 'meme_id', 'tag_id');
    }

    /**
     * Get the index name for the model.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @return string
     */
    public function searchableAs()
    {
        return 'memes_index';
    }

    /**
     * Get the indexable data array for the model.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @return array
     */
    public function toSearchableArray()
    {
        // Eager load the tags before transforming to an array.
        $this->tags;

        return $this->toArray();
    }
}
