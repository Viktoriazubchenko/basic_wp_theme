<?php 

function show_all_posts_in_search( $query ) {
    if ( $query->is_search() && $query->is_main_query() ) {
        $query->set( 'posts_per_page', -1 );
    }
}
add_action( 'pre_get_posts', 'show_all_posts_in_search' );