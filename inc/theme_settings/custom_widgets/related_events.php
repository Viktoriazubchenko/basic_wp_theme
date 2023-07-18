<?php

class RelatedEvents extends WP_Widget {
	public function __construct() {
        parent::__construct(
			'related_events_widget', 
			'Related Events', 
			array( 'description' => esc_html( 'A Related Events Widget', 'viktoria' ) )
		);
	}

	public function widget( $args, $instance ) {
        extract( $args );
        $title = apply_filters('widget_title', $instance['title'] );
        echo $before_widget;
		$post_id = get_the_ID();
		$categories = get_the_category($post_id);

		if ( ! empty( $categories ) ) {
			$category = $categories[0];
			$category_name = $category->name;
		}
        if ( ! empty( $title ) ) {
			echo $before_title . $title . esc_html(' in category ', 'viktoria') . $category_name .  $after_title;
		}
		
		$args = array(
			'post_type' => 'events',
			'posts_per_page' => '-1',
			'category_name' => $category_name,
			'post__not_in' => array($post_id)
		);

		$related_events = new WP_Query($args);

		if($related_events->have_posts()):
			echo '<div class="related-events__list">';
			while($related_events->have_posts()):$related_events->the_post(); 
			?>
			<div class="event-card event-card-minimum">
				<?php get_template_part( 'template-parts/content', 'event-card' );?>
			</div>
			<?php endwhile;
			echo "</div>";
			else: echo esc_html('There are no related events yet', 'viktoria');
		endif;
		wp_reset_postdata();
		

        echo $after_widget;
	} 

	public function form( $instance ) {
        if ( isset( $instance['title'] ) ) {
			$title = $instance['title'];
		} else {
			$title = esc_html( 'New title', 'viktoria' );
		}
		?>
		<p>
			<label for="<?php echo $this->get_field_name( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		 </p>
		<?php
	}

	public function update( $new_instance, $old_instance ) {
        $instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		return $instance;
	}
}

add_action('widgets_init', 'register_related_events_widget');

function register_related_events_widget(){
    register_widget('RelatedEvents');
}

?>