<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait RespondsAsJson
{
    /**
     * Create a JSON response.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param int   $statusCode
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondAsJson($message = [], int $statusCode = 200, array $headers = []): JsonResponse
    {
        return response()->json($message, $statusCode, $headers);
    }

    /**
     * Create a JSON response for a success event that also has data to return.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param       $data
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondSuccessWithDataJson($data = null, array $headers = []): JsonResponse
    {
        return $this->respondAsJson([
            'data' => $data,
        ], 200, $headers);
    }

    /**
     * Create a JSON response for an unprocessable event that has a message.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param string $message
     * @param array  $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondUnprocessableWithMessageJson($message = '', array $headers = []): JsonResponse
    {
        return $this->respondErrorWithMessageJson($message, 422, $headers);
    }

    /**
     * Create a JSON response for any kind of error event that has a message.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param string $message
     * @param int    $status
     * @param array  $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondErrorWithMessageJson($message = '', int $status = 500, array $headers = []): JsonResponse
    {
        return $this->respondAsJson([
            'error' => $message,
        ], $status, $headers);
    }

    /**
     * Create a JSON response for a created event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondCreatedJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 201, $headers);
    }

    public function respondCreatedWithDataJsoon($data = null, array $headers = []): JsonResponse
    {
        return $this->respondAsJson([
            'data' => $data,
        ], 201, $headers);
    }

    /**
     * Create a JSON response for a not found event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondNotFoundJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 404, $headers);
    }

    /**
     * Create a JSON response for a success event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondSuccessJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 200, $headers);
    }

    /**
     * Create a JSON response for a deleted event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondDeletedJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 204, $headers);
    }

    /**
     * Create a JSON response for an unauthorized event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondUnauthorizedJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 401, $headers);
    }

    /**
     * Create a JSON response for an unprocessable event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondUnprocessableJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 422, $headers);
    }

    /**
     * Create a JSON response for an server-side error event.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param array $message
     * @param array $headers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondErrorJson($message = [], array $headers = []): JsonResponse
    {
        return $this->respondAsJson($message, 500, $headers);
    }
}
