<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tests\Traits\MocksCloudinary;

class MemesTest extends TestCase
{
    use RefreshDatabase, MocksCloudinary;

    /** @test */
    public function index_route_returns_200_status_code()
    {
        $this->get('api/memes')
             ->assertStatus(200);
    }

    /** @test */
    public function index_route_returns_a_listing_of_all_memes()
    {
        // Create some memes.
        $memes = factory(\App\Models\Meme::class, 5)->create();

        $response = $this->get('api/memes');
        foreach ($memes as $meme) {
            $response->assertJsonFragment([
              'title'     => $meme->title,
              'user_id'   => $meme->user_id,
              'photo_url' => $meme->photo_url,
            ]);
        }
    }

    /** @test */
    public function the_title_field_is_required()
    {
        $this->post('api/memes', [
            'user_ud' => '123456',
            'meme'    => \Illuminate\Http\UploadedFile::fake()->image('meme.jpg'),
        ])
        ->assertJson([
            'error' => 'The title field is required.',
        ]);
    }

    /** @test */
    public function the_user_id_field_is_required()
    {
        $this->post('api/memes', [
            'title' => 'This is a very boring title',
            'meme'  => \Illuminate\Http\UploadedFile::fake()->image('meme.jpg'),
        ])
        ->assertJson([
            'error' => 'The user id field is required.',
        ]);
    }

    /** @test */
    public function the_meme_field_is_required()
    {
        $this->post('api/memes', [
            'title'   => 'This is a very boring title',
            'user_id' => '123456',
        ])
        ->assertJson([
            'error' => 'The meme field is required.',
        ]);
    }

    /** @test */
    public function store_method_returns_meme_data_if_successful()
    {
        // Swap out the instance of Cloudinary with our mocked one.
        $this->app->instance(\App\Services\Cloudinary::class, $this->mockCloudinaryUpload([
            'public_id'         => '1234567890',
            'version'           => 987654321,
            'signature'         => 'signed',
            'width'             => 5555,
            'height'            => 9999,
            'format'            => 'jpg',
            'resource_type'     => 'image',
            'created_at'        => '2018-11-10T00:11:54Z',
            'tags'              => [],
            'bytes'             => 123456,
            'type'              => 'upload',
            'etag'              => 'etag',
            'placeholder'       => false,
            'url'               => 'http://res.cloudinary.com/domain/image/upload/v987654321/1234567890.jpg',
            'secure_url'        => 'https://res.cloudinary.com/domain/image/upload/v987654321/1234567890.jpg',
            'original_filename' => 'memey',
        ]));

        // Request to create the meme.
        $response = $this->post('api/memes', [
            'title'     => 'This is a title, yes',
            'user_id'   => '123456',
            'meme'      => \Illuminate\Http\UploadedFile::fake()->image('meme.jpg'),
        ]);

        // Get the newly created meme.
        $meme = \App\Models\Meme::find(1);

        // We should have our newly created meme in our response.
        $response->assertJson([
            'data' => $meme->toArray(),
        ]);
    }

    /** @test */
    public function store_method_returns_201_status_code_if_successful()
    {
        // Swap out the instance of Cloudinary with our mocked one.
        $this->app->instance(\App\Services\Cloudinary::class, $this->mockCloudinaryUpload([
            'public_id'         => '1234567890',
            'version'           => 987654321,
            'signature'         => 'signed',
            'width'             => 5555,
            'height'            => 9999,
            'format'            => 'jpg',
            'resource_type'     => 'image',
            'created_at'        => '2018-11-10T00:11:54Z',
            'tags'              => [],
            'bytes'             => 123456,
            'type'              => 'upload',
            'etag'              => 'etag',
            'placeholder'       => false,
            'url'               => 'http://res.cloudinary.com/domain/image/upload/v987654321/1234567890.jpg',
            'secure_url'        => 'https://res.cloudinary.com/domain/image/upload/v987654321/1234567890.jpg',
            'original_filename' => 'memey',
        ]));

        // Request to create the meme.
        $response = $this->post('api/memes', [
            'title'     => 'This is a title, yes',
            'user_id'   => '123456',
            'meme'      => \Illuminate\Http\UploadedFile::fake()->image('meme.jpg'),
        ])
        ->assertStatus(201);
    }
}
