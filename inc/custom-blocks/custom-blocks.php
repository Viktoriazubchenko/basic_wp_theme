<?php

function add_custom_blocks(){
    wp_register_script('cta_block', get_template_directory_uri() . '/src/js/custom-blocks/cta-block.js', array());
    register_block_type('victoria-blocks/custom-cta', array(
        'editor_script' =>  'cta_block'
    ));
}

add_action('init' ,'add_custom_blocks');