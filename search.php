<?php
    get_header();
?>
<div id="primary">
	<main id="main" class="site-main" role="main">
		<?php
			if ( have_posts() ) :
			get_template_part('template-parts/content', 'small-hero');
			$grouped_results = array(
				'post' => array(),
				'page' => array(),
				'events' => array()
			);
			while ( have_posts() ) : the_post();
				$post_type = get_post_type();
				$grouped_results[ $post_type ][] = $post;
			endwhile;	
			else :
			get_template_part( 'template-parts/content', 'search-none' );
			endif;	
		?>
		<div class="container-default">
			<div class="search-result__list">
				<!-- Pages -->
				<?php if ( ! empty( $grouped_results['page'] ) ) : ?>
					<div class="search-result__category">
						<h2><?php echo __("Pages:", "viktoria")?></h2>
						<?php foreach ( $grouped_results['page'] as $post ) : setup_postdata( $post ); ?>
							<?php get_template_part('template-parts/content', 'search'); ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<!-- Posts -->
				<?php if ( ! empty( $grouped_results['post'] ) ) : ?>
					<div class="search-result__category">
						<h2><?php echo __("Posts:", "viktoria")?></h2>
						<?php foreach ( $grouped_results['post'] as $post ) : setup_postdata( $post ); ?>
							<?php get_template_part('template-parts/content', 'search'); ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<!-- Events -->
				<?php if ( ! empty( $grouped_results['events'] ) ) : ?>
					<div class="search-result__category">
						<h2><?php echo __("Events:", "viktoria")?></h2>
						<?php foreach ( $grouped_results['events'] as $post ) : setup_postdata( $post ); ?>
							<?php get_template_part('template-parts/content', 'search'); ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>		
		</div>	
	</main>
</div>
<?php
get_footer();



