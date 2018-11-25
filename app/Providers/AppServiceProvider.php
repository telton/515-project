<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(\App\Services\Cloudinary::class, function () {
            return new \App\Services\Cloudinary(
                config('services.cloudinary.cloud_name'),
                config('services.cloudinary.api_key'),
                config('services.cloudinary.secret')
            );
        });
    }
}
