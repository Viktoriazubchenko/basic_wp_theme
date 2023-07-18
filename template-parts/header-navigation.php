<div class="site-header__logo">
	<?php 
		if ( $custom_logo = get_custom_logo() ) {
			echo $custom_logo;
		} else {
			?><p class="site-header__site-name"><?php bloginfo( 'name' );?></p><?php
		}
	?>
</div>

<div class="site-header__trigger">
	<button class='button button-icon button-contained-color button-burger'><span class="dashicons dashicons-menu"></span></button>
</div>



<div class="site-header__wrapper">
	<div class="site-header__navigation ">
		<?php
			wp_nav_menu(array(
				'theme_location' => 'main_menu',
				'container' => false,
				'menu_class' => 'menu',
				'fallback_cb' => '__return_false',
				'depth' => 2
			));
		?>
	</div>

	<div class="site-header__search">
		<?php get_search_form(); ?>
	</div>
</div>