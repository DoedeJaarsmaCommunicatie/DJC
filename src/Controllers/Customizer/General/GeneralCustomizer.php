<?php
namespace App\Controllers\Customizer\General;

use App\Controllers\Customizer\Customizer;

abstract class GeneralCustomizer extends Customizer {
    protected $panel = [
        'title'       => 'General',
        'description' => 'General settings'
    ];
    
    protected $panel_name = 'general';
    
    protected $panel_priority = 10;
}
