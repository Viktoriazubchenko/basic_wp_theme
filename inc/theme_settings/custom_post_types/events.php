<?php
function create_events_cpt() {

	$labels = array(
		'name' => _x( 'Event', 'Post Type General Name', 'viktoria' ),
		'singular_name' => _x( 'Event', 'Post Type Singular Name', 'viktoria' ),
		'menu_name' => _x( 'Event', 'Admin Menu text', 'viktoria' ),
		'name_admin_bar' => _x( 'Events', 'Add New on Toolbar', 'viktoria' ),
		'archives' => __( 'Events Archives', 'viktoria' ),
		'attributes' => __( 'Events Attributes', 'viktoria' ),
		'parent_item_colon' => __( 'Parent Events:', 'viktoria' ),
		'all_items' => __( 'All Events', 'viktoria' ),
		'add_new_item' => __( 'Add New Events', 'viktoria' ),
		'add_new' => __( 'Add New', 'viktoria' ),
		'new_item' => __( 'New Event', 'viktoria' ),
		'edit_item' => __( 'Edit Event', 'viktoria' ),
		'update_item' => __( 'Update Events', 'viktoria' ),
		'view_item' => __( 'View Event', 'viktoria' ),
		'view_items' => __( 'View Events', 'viktoria' ),
		'search_items' => __( 'Search Events', 'viktoria' ),
		'not_found' => __( 'Not found', 'viktoria' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'viktoria' ),
		'featured_image' => __( 'Featured Image', 'viktoria' ),
		'set_featured_image' => __( 'Set featured image', 'viktoria' ),
		'remove_featured_image' => __( 'Remove featured image', 'viktoria' ),
		'use_featured_image' => __( 'Use as featured image', 'viktoria' ),
		'insert_into_item' => __( 'Insert into Events', 'viktoria' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Events', 'viktoria' ),
		'items_list' => __( 'Event list', 'viktoria' ),
		'items_list_navigation' => __( 'Event list navigation', 'viktoria' ),
		'filter_items_list' => __( 'Filter Event list', 'viktoria' ),
	);
	$args = array(
		'label' => __( 'Events', 'viktoria' ),
		'description' => __( '', 'viktoria' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-star-filled',
		'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'author', 'custom-fields'),
		'taxonomies' => array('category'),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => true,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
	);
	register_post_type( 'events', $args );

}

add_action( 'init', 'create_events_cpt', 0 );










