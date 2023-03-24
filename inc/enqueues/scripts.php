<?php

add_action('wp_enqueue_scripts', function () {
    
    wp_register_script('scripts', get_template_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true);
    wp_register_script( 'bootstrap-5-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js', ['jquery'], null, true );


    wp_enqueue_script('scripts');
    wp_enqueue_script('bootstrap-5-js');
});