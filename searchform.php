<?php
/* Custom search form */

?>

<form role="search" method="get" id="searchform"
	class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div>
		<label class="screen-reader-text" for="s"><?php _x( 'Search for:', 'label' ); ?></label>
		<input placeholder="<?php echo __('Search...', 'viktoria')?>" class="border-gray" type="text" value="<?php echo get_search_query(); ?>" name="s" id="s" />
		<button type="submit" id="searchsubmit" class="button button-icon button-contained-color"><span class="dashicons dashicons-search"></span></button>
	</div>
</form>