<?php

class Countdown extends WP_Widget {
	public function __construct() {
        parent::__construct(
			'countdown_widget', 
			'Countdown', 
			array( 'description' => __( 'A Countdown Widget', 'viktoria' ) )
		);
	}

	public function widget( $args, $instance ) {
        extract( $args );
        $title = apply_filters('widget_title', $instance['title'] );
        echo $before_widget;
        $event_id = get_the_id();
        $event_date_time = get_field('date_and_time', $event_id);
        $is_outdated = strtotime($event_date_time) < strtotime(date("Y-m-d")) ? true : false;
        if(!$is_outdated){
            $diff = abs(strtotime($event_date_time) - strtotime(date("Y-m-d")));
			$years   = floor($diff / (365*60*60*24)); 
			$months  = floor(($diff - $years * 365*60*60*24) / (30*60*60*24)); 
			$days    = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));
	
			$hours   = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24 - $days*60*60*24)/ (60*60)); 
	
			$minuts  = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24 - $days*60*60*24 - $hours*60*60)/ 60); 
	
			$seconds = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24 - $days*60*60*24 - $hours*60*60 - $minuts*60));
        }
		
        if ( ! empty( $title ) && !$is_outdated ) {
			echo $before_title . $title .  $after_title;
		} else {
            echo $before_title . esc_html('Sorry, even has past, see you next time') .  $after_title;
        }
        
        

       // printf("%d years, %d months, %d days, %d hours, %d minuts\n, %d seconds\n", $years, $months, $days, $hours, $minuts, $seconds); 
        echo $after_widget;
	} 

	public function form( $instance ) {
        if ( isset( $instance['title'] ) ) {
			$title = $instance['title'];
		} else {
			$title = __( 'New title', 'text_domain' );
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

add_action('widgets_init', 'register_countdown_widget');

function register_countdown_widget(){
    register_widget('Countdown');
}

?>