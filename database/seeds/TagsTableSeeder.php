<?php

use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::create(['tag' => 'cat']);
        Tag::create(['tag' => 'dank']);
        Tag::create(['tag' => 'nostalgic']);
        Tag::create(['tag' => 'gaming']);
        Tag::create(['tag' => 'tech']);

        factory(App\Models\Tag::class, 1000)->create();
    }
}
