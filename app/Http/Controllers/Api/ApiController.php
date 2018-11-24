<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Traits\RespondsAsJson;

abstract class ApiController extends Controller
{
    use RespondsAsJson;
}
