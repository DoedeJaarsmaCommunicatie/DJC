<?php
namespace App\Providers;

use App\Helpers\WP;
use function add_action;
use function do_action;

class EnqueueServiceProvider {
    public function __construct() {
        $this->boot();
    }
    
    public function boot()
    {
        add_action('wp_enqueue_scripts', [__CLASS__, 'styles']);
        add_action('wp_enqueue_scripts', [__CLASS__, 'scripts']);
    }
    
    public static function styles()
    {
        do_action('pre_enqueue_styles');
        WP::addStyle(
            'style',
            WP::get_stylesheet_directory_uri() . '/dist/styles/main.css'
        );
        WP::enqueueStyles();
        do_action('post_enqueue_styles');
    }
    
    public static function scripts()
    {
        do_action('pre_enqueue_scripts');
        WP::addScript(
            'main-script',
            WP::get_stylesheet_directory_uri() . '/dist/scripts/main.js'
        );
        WP::enqueueScripts();
        do_action('post_enqueue_scripts');
    }
}
