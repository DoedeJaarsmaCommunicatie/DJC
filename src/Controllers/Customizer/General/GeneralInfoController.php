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
            'priority' => 30,
        ],
        [
            'id'       => CustomizerServiceProvider::CONFIG_ID,
            'type'     => 'link',
            'settings' => 'facebook-url',
            'label'    => 'Facebook URL',
            'section'  => 'general_settings',
            'default'  => 'https://facebook.com/',
            'priority' => 40,
        ],
        [
            'id'       => CustomizerServiceProvider::CONFIG_ID,
            'type'     => 'link',
            'settings' => 'linkedin-url',
            'label'    => 'LinkedIn URL',
            'section'  => 'general_settings',
            'default'  => 'https://linkedin.com/',
            'priority' => 50,
        ],
        [
            'id'       => CustomizerServiceProvider::CONFIG_ID,
            'type'     => 'link',
            'settings' => 'instagram-url',
            'label'    => 'Instagram URL',
            'section'  => 'general_settings',
            'default'  => 'https://instagram.com/',
            'priority' => 50,
        ],
    ];
}
