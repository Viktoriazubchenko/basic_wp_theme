<?php
function create_like_cpt() {

	$labels = array(
		'name' => _x( 'Likes', 'Post Type General Name', 'viktoria' ),
		'singular_name' => _x( 'Like', 'Post Type Singular Name', 'viktoria' ),
		'menu_name' => _x( 'Likes', 'Admin Menu text', 'viktoria' ),
		'name_admin_bar' => _x( 'Likes', 'Add New on Toolbar', 'viktoria' )
	);
	$args = array(
		'label' => __( 'Like', 'viktoria' ),
		'description' => __( '', 'viktoria' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-star-empty',
		'supports' => array('title'),
		'public' => false,
		'publicly_queryable' => false,
		'show_ui' => true,
		'show_in_nav_menus' => false,
		'show_in_menu' => false
	);
	register_post_type( 'like', $args );

}
add_action( 'init', 'create_like_cpt', 0 );