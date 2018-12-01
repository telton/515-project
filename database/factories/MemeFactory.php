<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Meme::class, function (Faker $faker) {
    return [
        'title'     => $faker->word,
        'user_id'   => $faker->uuid,
        'photo_url' => $faker->url,
    ];
});
