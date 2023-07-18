<?php

function registering_custom_sidebars(){
    register_sidebar(
        [
            'name'          => esc_html__( 'Events sidebar', 'viktoria' ),
            'id'            => 'sidebar-1',
            'description'   => __( 'Widgets in this area will be shown on all events pages', 'viktoria' ),
            'before_widget' => '<div id="%1$s" class="widget widget-sidebar %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h3 class="widget-title">',
            'after_title'   => '</h3>',
        ]
	);
    register_sidebar(
        [
            'name'          => esc_html__( 'Events archive sidebar', 'viktoria' ),
            'id'            => 'sidebar-2',
            'description'   => __( 'Widgets in this area will be shown on events archive page', 'viktoria' ),
            'before_widget' => '<div id="%1$s" class="widget widget-sidebar %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h3 class="widget-title">',
            'after_title'   => '</h3>',
        ]
	);

}

add_action( 'widgets_init', 'registering_custom_sidebars');