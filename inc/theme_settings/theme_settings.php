<?php
function setup_theme(){
    add_theme_support( 'title-tag' );
    add_theme_support(
        'custom-logo',
        [
            'header-text' => [
                'site-title',
                'site-description',
            ],
            'height'      => 100,
            'width'       => 400,
            'flex-height' => true,
            'flex-width'  => true,
        ]
    );
    
    add_theme_support( 'post-thumbnails' );
    /**
		 * Register image sizes.
		 */
	

}

add_action( 'after_setup_theme','setup_theme');