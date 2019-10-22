<?php

$context = \Timber\Timber::get_context();
$context['post'] = new \Timber\Post();

return \Timber\Timber::render(
    [
        'views/single/project.html.twig',
        'views/page.html.twig',
    ],
    $context
);
