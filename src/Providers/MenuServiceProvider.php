<?php
namespace App\Providers;

use Timber\Menu;
use function register_nav_menus;

/**
 * Class MenuServiceProvider
 *
 * @package App\Providers
 */
class MenuServiceProvider
{
    /**
     * The registered menus
     *
     * @var array
     */
    protected $menus = [
        'primary-menu'  => 'Primary',
        'footer-menu'   => 'Footer Menu',
        'service-menu'  => 'Diensten Menu',
    ];
    
    /**
     * MenuServiceProvider constructor.
     */
    public function __construct()
    {
        $this->boot();
    }
    
    /**
     * Register nav menus in timber
     *
     * @return void
     */
    public function boot(): void
    {
        register_nav_menus(
            apply_filters('djc/register/menus/filter', $this->menus)
        );
        
        add_filter('timber/context', [ $this, 'registerContent' ]);
    }
    
    /**
     * Register nav menu's in twig.
     *
     * @param array $content
     *
     * @return mixed
     */
    public function registerContent($content)
    {
        foreach ($this->menus as $key => $name) {
            $content[\App\Helpers\Str::camel($key)] = new Menu($key);
        }
        return $content;
    }
}
