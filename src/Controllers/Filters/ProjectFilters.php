<?php
namespace App\Controllers\Filters;

class ProjectFilters {
    public static function register()
    {
        $self = new static();
    
        \add_filter('djc/image/lazy/alt/filter', [$self, 'thumbnailAlt'], 10, 3);
    }
    
    /**
     * @param string $alt
     * @param \WP_Post $post
     * @param \Timber\Image $thumbnail
     *
     * @return mixed
     */
    public function thumbnailAlt($alt, $post, $thumbnail)
    {
        if (strlen($alt) > 0) {
            return $alt;
        }
        
        return $post->post_title;
    }
}
