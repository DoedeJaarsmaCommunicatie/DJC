<?php

$context = \Timber\Timber::get_context();
$context['post'] = new \Timber\Post();
$context['opdrachtgevers'] = [];
$context['services'] = [];
foreach (get_field('opdrachtgevers', $context['post']->ID)?? [] as $opdrachtgever) {
    $context['opdrachtgevers'] []= $opdrachtgever['opdrachtgever'];
}

foreach (get_field( 'dienst', $context['post']->id)?? [] as $service) {
    $context['services'] []= new \Timber\Post($service);
}

return \Timber\Timber::render(
    [
        'views/single/project.html.twig',
        'views/page.html.twig',
    ],
    $context
);
