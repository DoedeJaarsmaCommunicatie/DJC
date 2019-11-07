<?php
namespace App\Providers;

class AppServiceProvider
{
	protected $providers;
	public function __construct()
	{
		$providers = include get_stylesheet_directory() . '/src/config/app.php';
		$this->providers = $providers['providers'];
		$this->boot();
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
}
