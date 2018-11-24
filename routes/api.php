<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')->group(function () {
    // Tags.
    Route::get('tags', 'TagsController@index');

    // Memes.
    Route::resource('memes', 'MemesController')->names([
        'index'   => 'api.memes.index',
        'store'   => 'api.memes.store',
        'show'    => 'api.memes.show',
        'update'  => 'api.memes.update',
        'destroy' => 'api.memes.destroy',
    ]);
});
