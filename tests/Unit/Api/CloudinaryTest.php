<?php

namespace Tests\Unit;

use Tests\TestCase;
use Tests\Traits\MocksCloudinary;

class CloudinaryTest extends TestCase
{
    use MocksCloudinary;

    /** @test */
    public function it_returns_array_of_data_after_upload()
    {
        $returnValue = [
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
        ];
        $cloudinary = $this->mockCloudinaryUpload($returnValue);

        $this->assertEquals($returnValue, $cloudinary->upload(\Illuminate\Http\UploadedFile::fake()->image('meme.jpg')));
    }
}
