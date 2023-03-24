<?php

function register_custom_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'footer-menu' => __( 'Footer Menu' )
     )
   );
}


add_action( 'init', 'register_custom_menus' );