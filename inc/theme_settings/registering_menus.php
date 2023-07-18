<?php

function register_custom_menus() {
    register_nav_menu('main_menu', 'Main Menu');
    register_nav_menu('footer_primary_menu','Footer Primary Menu');
    register_nav_menu('footer_secondary_menu','Footer Secondary Menu');
}


add_action( 'init', 'register_custom_menus' );