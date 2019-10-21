<?php
namespace App\Controllers\Customizer\General;

use App\Providers\CustomizerServiceProvider;

class GeneralInfoController extends GeneralCustomizer
{
    /**
     * This holds the section data.
     *
     * @var array Holds the section data.
     */
    protected $section = [
        'title'       => 'General Settings',
        'description' => 'These values are used all over the site.',
        'panel'       => 'general',
    ];
    
    /**
     * The section name.
     *
     * @var string $section_name
     */
    protected $section_name = 'general_settings';
    
    /**
     * The basic fields.
     *
     * @var array
     */
    protected $fields = [
        [
            'id'       => CustomizerServiceProvider::CONFIG_ID,
            'type'     => 'text',
            'settings' => 'address',
            'label'    => 'Adres',
            'section'  => 'general_settings',
            'default'  => 'Lauriergracht 54BG',
            'priority' => 10,
        ],
        [
            'id'       => CustomizerServiceProvider::CONFIG_ID,
            'type'     => 'text',
            'settings' => 'phone',
            'label'    => 'Telefoonnummer',
            'section'  => 'general_settings',
            'default'  => '020 7852695',
            'priority' => 20,
        ],
        [
            'id'       => CustomizerServiceProvider::CONFIG_ID,
            'type'     => 'email',
            'settings' => 'email',
            'label'    => 'E-mailadres',
            'section'  => 'general_settings',
            'default'  => 'info@doedejaarsma.nl',
            'priority' => 20,
        ],
    ];
}
