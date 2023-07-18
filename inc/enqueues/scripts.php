<?php

add_action('wp_enqueue_scripts', function () {
    
    
    wp_register_script('scripts', get_template_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true);
   // wp_register_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', ['jquery'], null, true);
    wp_register_script('slick-js', get_template_directory_uri() . '/dist/library/js/slick.min.js', ['jquery'], null, true);
    
    wp_enqueue_script('slick-js');
    wp_enqueue_script('scripts');

    //wp_localize_script( 'scripts', 'AjaxMethodsUrl',  [admin_url( 'admin-ajax.php' ), ] );

    wp_localize_script( 'scripts', 'localizedData',  array(
        'root_url' => get_site_url(),
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'nonce' => wp_create_nonce('wp_rest')
    ) );

    
});