<?php

use App\Helpers\Template;
use Timber\Post;
use Timber\Timber;

$context                   = Timber::get_context();
$context['post']           = new Post();
$context['opdrachtgevers'] = [];
$context['services']       = [];

if (function_exists('get_field')) {
    foreach (get_field('opdrachtgevers', $context['post']->ID)?? [] as $opdrachtgever) {
        $context['opdrachtgevers'] []= $opdrachtgever['opdrachtgever'];
    }
    
    foreach (get_field( 'dienst', $context['post']->id)?? [] as $service) {
        $context['services'] []= new Post($service);
    }
}

$context = apply_filters('djc/project/single/context/filter', $context);

$templates = [
    Template::viewHtmlTwigFile('project'),
    Template::viewHtmlTwigFile('page'),
];

$templates = apply_filters('djc/project/single/templates/filter', $templates);

return Timber::render($templates, $context);
