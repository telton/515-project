<?php

namespace Tests\Unit\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TagsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function index_route_returns_200_status_code()
    {
        $this->get('/api/tags')
             ->assertStatus(200);
    }

    /** @test */
    public function index_route_returns_a_listing_of_all_tags()
    {
        // Create some tags.
        $tags = factory(\App\Models\Tag::class, 5)->create();

        $response = $this->get('/api/tags');
        foreach ($tags as $tag) {
            $response->assertJsonFragment([
            'id' => $tag->id,
            'tag' => $tag->tag,
          ]);
        }
    }
}
