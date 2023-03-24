<?php

function register_styles(){
    wp_register_style('styles', get_template_directory_uri() . '/dist/css/bundle.css', array(), filemtime(get_template_directory() . '/dist/css/bundle.css'), false);
    wp_register_style( 'bootstrap-5-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css', [], false, 'all' );

    wp_enqueue_style('bootstrap-5-css');
	wp_enqueue_style( 'styles' );
    
}

add_action('wp_enqueue_scripts', 'register_styles');
   
