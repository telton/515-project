<?php

namespace Tests\Traits;

trait MocksCloudinary
{
    public function mockCloudinaryUpload(array $returnValue)
    {
        $mocked = $this->createMock(\App\Services\Cloudinary::class);
        $mocked->method('upload')
               ->will($this->returnValue($returnValue));

        return $mocked;
    }
}
