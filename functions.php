<?php
use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo');


Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];

$checker = Puc_v4_Factory::buildUpdateChecker(
    'https://github.com/DoedeJaarsmaCommunicatie/DJC',
    __FILE__
);
