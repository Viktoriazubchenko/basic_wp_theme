<?php
// Register Custom Post Type Color theme
function create_colortheme_cpt() {

	$labels = array(
		'name' => _x( 'Color themes', 'Post Type General Name', 'viktoria' ),
		'singular_name' => _x( 'Color theme', 'Post Type Singular Name', 'viktoria' ),
		'menu_name' => _x( 'Color themes', 'Admin Menu text', 'viktoria' ),
		'name_admin_bar' => _x( 'Color theme', 'Add New on Toolbar', 'viktoria' ),
		'archives' => __( 'Color theme Archives', 'viktoria' ),
		'attributes' => __( 'Color theme Attributes', 'viktoria' ),
		'parent_item_colon' => __( 'Parent Color theme:', 'viktoria' ),
		'all_items' => __( 'All Color themes', 'viktoria' ),
		'add_new_item' => __( 'Add New Color theme', 'viktoria' ),
		'add_new' => __( 'Add New', 'viktoria' ),
		'new_item' => __( 'New Color theme', 'viktoria' ),
		'edit_item' => __( 'Edit Color theme', 'viktoria' ),
		'update_item' => __( 'Update Color theme', 'viktoria' ),
		'view_item' => __( 'View Color theme', 'viktoria' ),
		'view_items' => __( 'View Color themes', 'viktoria' ),
		'search_items' => __( 'Search Color theme', 'viktoria' ),
		'not_found' => __( 'Not found', 'viktoria' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'viktoria' ),
		'featured_image' => __( 'Featured Image', 'viktoria' ),
		'set_featured_image' => __( 'Set featured image', 'viktoria' ),
		'remove_featured_image' => __( 'Remove featured image', 'viktoria' ),
		'use_featured_image' => __( 'Use as featured image', 'viktoria' ),
		'insert_into_item' => __( 'Insert into Color theme', 'viktoria' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Color theme', 'viktoria' ),
		'items_list' => __( 'Color themes list', 'viktoria' ),
		'items_list_navigation' => __( 'Color themes list navigation', 'viktoria' ),
		'filter_items_list' => __( 'Filter Color themes list', 'viktoria' ),
	);
	$args = array(
		'label' => __( 'Color theme', 'viktoria' ),
		'description' => __( '', 'viktoria' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-art',
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => false,
		'publicly_queryable' => false,
		'public' => false,
		
	);
	register_post_type( 'color_theme', $args );

}
add_action( 'init', 'create_colortheme_cpt', 0 );