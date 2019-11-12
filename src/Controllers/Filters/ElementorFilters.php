<?php
namespace App\Controllers\Filters;

class ElementorFilters
{
    public static function register()
    {
        $self = new static();
        
        \add_filter('elementor/frontend/print_google_fonts', static function ($bool) { return false; });
    }
}
