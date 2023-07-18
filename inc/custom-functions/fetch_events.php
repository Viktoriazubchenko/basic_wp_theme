<?php

function fetch_events(){
	$date_now = date('Y-m-d H:i:s');
	$upcoming_posts_args = $_POST['only_upcoming_posts'] === 'true' ? array(
		'key'         => 'date_and_time',
		'compare'	  =>  '>',
		'value'       =>  $date_now,
		'type'        => 'DATETIME', 
	) : array();
	$the_query = new WP_Query([
		'post_type' => 'events',
		'posts_per_page' => -1,
		'meta_key' => 'date_and_time', 
		'meta_type' => 'DATETIME',
		'orderby' => $_POST['order_by'],
        'order' => $_POST['order'],
		'category_name' => $_POST['category_name'],
		's' => esc_attr( $_POST['keyword'] ),
		'meta_query' => array(
			array(
				'key' => 'event_type',
				'value' => $_POST['event_type_key']
			),
			array(
				'key' => 'required_level',
				'value' => $_POST['event_level_key']
			),
			array(
				'key' => 'event_format',
				'value' => $_POST['event_format_key']
			),
			$upcoming_posts_args
		)
	]);

	if( $the_query->have_posts() ) :
        while( $the_query->have_posts() ): $the_query->the_post();  ?>
			<div class="event-card">
				<?php get_template_part( 'template-parts/content', 'event-card' );?>
			</div>
       	<?php endwhile;
        wp_reset_postdata();  
		// else: get_template_part( 'template-parts/content', 'events-none' );
        endif;
    die();
}
add_action('wp_ajax_fetch_events', 'fetch_events');
add_action('wp_ajax_nopriv_fetch_events', 'fetch_events');