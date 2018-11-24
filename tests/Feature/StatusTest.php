<?php

namespace Tests\Feature;

use Tests\TestCase;

class StatusTest extends TestCase
{
    /** @test */
    public function it_returns_a_200_status_code_if_successful()
    {
        $response = $this->get('/status');

        $response->assertStatus(200);
    }
}
