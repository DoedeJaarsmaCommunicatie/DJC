<?php

use App\Helpers\Template;
use Timber\Post;
use Timber\Timber;

$context         = Timber::get_context();
$context['post'] = new Post();

$context = apply_filters('djc/index/context/filter', $context);

$templates = [
    Template::viewHtmlTwigFile('page'),
];

$templates = apply_filters('djc/index/templates/filter', $templates);

return Timber::render($templates, $context);
