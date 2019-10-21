<?php
/**
 * Registers customizer functions
 *
 * @author Mitch Hijlkema <mail@mitchhijlkema.nl>
 * @version 1.0.0
 * @package App\Providers
 * @since 1.0.0
 */

namespace App\Providers;

use Kirki;

/**
 * Class CustomizerServiceProvider
 *
 * @package App\Providers
 */
class CustomizerServiceProvider
{

    public const CONFIG_ID = 'djc';

    /**
     * CustomizerServiceProvider constructor.
     */
    public function __construct()
    {
        $this->boot();
    }

    /**
     * The boot function.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->register_namespace();

        $this->register();
    }

    /**
     * Registers the customizer controllers
     */
    public function register(): void
    {
        $fields = include get_stylesheet_directory() . '/src/config/kirki.php';
    
        foreach ($fields as $field) {
            new $field();
        }
    }

    /**
     * Registers \Kirki::class.
     *
     * @return void
     */
    private function register_namespace(): void
    {
        Kirki::add_config(
            self::CONFIG_ID,
            [
                'capability'  => 'edit_theme_options',
                'option_type' => 'theme_mod',
            ]
        );
    }
}
