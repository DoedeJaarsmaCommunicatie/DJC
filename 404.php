<?php

use App\Helpers\Template;
use Timber\Post;
use Timber\Timber;

$context         = Timber::get_context();
$context['post'] = new Post();

$context = apply_filters('djc/404/context/filter', $context);

$templates = [
    Template::viewHtmlTwigFile('404'),
    Template::viewHtmlTwigFile('page'),
];

$templates = apply_filters('djc/404/templates/filter', $templates);

return Timber::render($templates, $context);
