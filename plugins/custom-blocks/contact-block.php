<?php
/**
 *  Contact information block
 */

function contact_block_script_register(){

    wp_enqueue_script('contact-block');
}

add_action('enqueue_block_editor_assets', 'contact_block_script_register');