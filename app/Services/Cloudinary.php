<?php

namespace App\Services;

class Cloudinary
{
    /**
     * @var string
     */
    private $cloudName;

    /**
     * @var string
     */
    private $apiKey;

    /**
     * @var string
     */
    private $secret;

    /**
     * @var string
     */
    private $baseUrl;

    /**
     * Cloudinary constructor.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param string $cloudName
     * @param string $apiKey
     * @param string $secret
     */
    public function __construct(string $cloudName, string $apiKey, string $secret)
    {
        $this->cloudName = $cloudName;
        $this->apiKey = $apiKey;
        $this->secret = $secret;
        $this->baseUrl = $this->configureBaseUrl();

        \Cloudinary::config([
          'cloud_name' => $this->cloudName,
          'api_key'    => $this->apiKey,
          'api_secret' => $this->secret,
        ]);
    }

    /**
     * Configure the base url for Cloudinary.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @return string
     */
    private function configureBaseUrl(): string
    {
        return "cloudinary://{$this->apiKey}:{$this->secret}@{$this->cloudName}";
    }

    /**
     * Take the uploaded file and upload it to Cloudinary.
     *
     * @author Tyler Elton <telton007@gmail.com>
     *
     * @param  $file
     *
     * @throws \Cloudinary\Error
     *
     * @return array
     */
    public function upload($file): array
    {
        try {
            return \Cloudinary\Uploader::upload($file);
        } catch (\Cloudinary\Error $e) {
            throw $e;
        }
    }
}
