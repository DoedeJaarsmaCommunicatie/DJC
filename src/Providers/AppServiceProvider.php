<?php
namespace App\Providers;

use App\Controllers\Filters\ProjectFilters;

class AppServiceProvider
{
	protected $providers;
	public function __construct()
	{
		$providers = include get_stylesheet_directory() . '/src/config/app.php';
		$this->providers = $providers['providers'];
		$this->boot();
		$this->register();
	}
	
	public function boot(): void
	{
		foreach ($this->providers as $provider) {
			new $provider();
		}
	}
	
	public function register(): void
    {
        $this->addImageSize();
        ProjectFilters::register();
//        $this->replacejQuery();
    }
    
    private function addImageSize(): void
    {
        \add_image_size('lazy-thumbnail', 20, 20, false);
        
        \add_filter( 'image_size_names_choose', static function ( $sizes ) {
            return array_merge( $sizes, [
                'lazy-thumbnail' => __( 'Lazy thumbnail' ),
            ] );
        } );
    }
    
    private function replaceJQuery() {
        add_action('wp_enqueue_scripts', static function () {
            wp_deregister_script('jquery');
            wp_register_script('jquery', 'https://code.jquery.com/jquery-3.4.1.slim.min.js');
            wp_enqueue_script('jquery');
        }, 11);
    }
}
