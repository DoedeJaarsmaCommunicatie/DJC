<?php
use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo');
add_theme_support( 'post-thumbnails' );

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];

$checker = Puc_v4_Factory::buildUpdateChecker(
    'https://github.com/DoedeJaarsmaCommunicatie/DJC',
    __FILE__
);

function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {
    
    $elementor_theme_manager->register_location(
        'footer-sidebar',
        [
            'label' => __( 'Footer Sidebar', 'djc' ),
            'multiple' => false,
            'edit_in_content' => false,
        ]
    );
    
}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );
