<?php

function register_styles(){
    // Slick Slider
   // wp_register_style( 'slick-css', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    wp_register_style('styles', get_template_directory_uri() . '/dist/css/bundle.css', array(), filemtime(get_template_directory() . '/dist/css/bundle.css'), false);
    wp_register_style( 'bootstrap-5-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css', [], false, 'all' );
    wp_register_style( 'poppins-font', '"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"', [], false, 'all' );
    wp_register_style( 'source-code-font', "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap", [], false, 'all' );
    wp_register_style( 'slick-css', get_template_directory_uri() . '/dist/library/css/slick.css', [], false, 'all');
    wp_register_style( 'slick-theme-css', get_template_directory_uri() . '/dist/library/css/slick-theme.css', ['slick-css'], false, 'all');

    wp_enqueue_style( 'slick-css');
    wp_enqueue_style( 'slick-theme-css');
    wp_enqueue_style('bootstrap-5-css');
	wp_enqueue_style( 'styles' );
    wp_enqueue_style( 'poppins-font');
    wp_enqueue_style( 'source-code-font');
    wp_enqueue_style( 'dashicons' );
    
    
}

add_action('wp_enqueue_scripts', 'register_styles');
   
function enqueue_acf_block_styles() {
    
    wp_enqueue_style( 'acf-block-styles', get_template_directory_uri() . '/dist/css/editor.css', [], false, 'all');
}
add_action( 'enqueue_block_editor_assets', 'enqueue_acf_block_styles' );
