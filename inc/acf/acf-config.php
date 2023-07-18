<?php

add_action('acf/init', 'my_register_blocks');
function my_register_blocks() {

    // check function exists.
    if( function_exists('acf_register_block_type') ) {

        acf_register_block_type(array(
            'name'              => 'frontpage_hero_block',
            'title'             => __('Frontpage hero block'),
            'description'       => __('Frontpage hero block'),
            'render_template'   => 'template-parts/acf-blocks/frontpage-hero.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));

        acf_register_block_type(array(
            'name'              => 'simple_text_image_block',
            'title'             => __('Simple text and image block'),
            'description'       => __('Simple text and image block'),
            'render_template'   => 'template-parts/acf-blocks/simple-text-image.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));

        acf_register_block_type(array(
            'name'              => 'events-reviews',
            'title'             => __('Events reviews block'),
            'description'       => __('Events reviews block'),
            'render_template'   => 'template-parts/acf-blocks/events-reviews.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));

        acf_register_block_type(array(
            'name'              => 'post-banner',
            'title'             => __('Featured post block'),
            'description'       => __('Featured post block'),
            'render_template'   => 'template-parts/acf-blocks/post-banner.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));

        acf_register_block_type(array(
            'name'              => 'text_block',
            'title'             => __('Text block'),
            'description'       => __('Text block'),
            'render_template'   => 'template-parts/acf-blocks/text-block.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));


        acf_register_block_type(array(
            'name'              => 'text_image_grid',
            'title'             => __('Posts Slider'),
            'description'       => __('Posts Slider'),
            'render_template'   => 'template-parts/acf-blocks/posts-slider.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));

        

        acf_register_block_type(array(
            'name'              => 'latest_posts_grid',
            'title'             => __('Main category posts'),
            'description'       => __('Main category posts'),
            'render_template'   => 'template-parts/acf-blocks/latest-posts-grid.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));
       
        acf_register_block_type(array(
            'name'              => 'blog-category-grid',
            'title'             => __('Blog categories posts'),
            'description'       => __('Blog categories posts'),
            'render_template'   => 'template-parts/acf-blocks/blog-category-grid.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));

        acf_register_block_type(array(
            'name'              => 'faq-block',
            'title'             => __('FAQ block'),
            'description'       => __('FAQ block'),
            'render_template'   => 'template-parts/acf-blocks/faq.php',
            'category'          => 'special',
            'icon'              => 'heart'
        ));


    }
}

if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
    
    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Header Settings',
        'menu_title'    => 'Header',
        'parent_slug'   => 'theme-general-settings',
    ));
    
    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Footer Settings',
        'menu_title'    => 'Footer',
        'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Color Settings',
        'menu_title'    => 'Color Theme',
        'parent_slug'   => 'theme-general-settings',
    ));
    
}