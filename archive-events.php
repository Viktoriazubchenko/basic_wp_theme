<?php
    get_header();
?>

<div id="primary" class="events-archive d-flex">
		<aside class="events-archive__sidebar">
			<?php get_sidebar('events-archive')?>
		</aside>
		<main id="main" class="site-main flex-grow-1 events-archive__main" role="main">
				<div class="container-default">
					<div class="events-archive__control-panel">
						<div class="form-wrapper">
							<form class="form form-search form-search-events" action="#">
								<label for="search-events"></label>
								<div class="form-input-wrapper form-input-wrapper-left">
									<input id="keyword" class="form-input" placeholder="<?php echo esc_html('Search...')?>" name="search-events" type="search" aria-label="Search...">
									<span class="form-input-decoration form-input-decoration">
										<span class="dashicons dashicons-search"></span>
									</span>
								</div>
							</form>
						</div>
						<div class="form-wrapper">
							<form class="form form-sort form-sort-events" action="#">
								<label for="sort-events"></label>
								<div class="form-input-wrapper form-input-wrapper-right">
									<select class="form-input" name="sort-events" id="sort-events">
										<option value="meta_value"><?php echo __('Sort by date'); ?></option>
										<option value="title"><?php echo __('Sort in alphabetical order'); ?></option>
									</select>
									<span class="form-input-decoration form-input-decoration">
										<span class="dashicons dashicons-arrow-down-alt2"></span>
									</span>
								</div>
							</form>
						</div>
						<div class="form-wrapper">
							<form class="form form-filter form-filter-events" action="#">
								<label for="filter-events"></label>
								<div class="form-input-wrapper form-input-wrapper-right">
									<select class="form-input" name="filter-events" id="filter-events">
										<option value=""><?php echo __('All'); ?></option>
										<?php
											$events_query = new WP_Query([
												'post_type' => 'events',
												'posts_per_page' => -1
											]);
											while ( $events_query->have_posts() ) : $events_query->the_post();
											$eventscats = get_categories();
											if ($eventscats) {
												foreach( $eventscats as $cat ) {
													$all_cats[] = $cat->name;
												}
											}
											endwhile;
											$cat_arr = array_unique( $all_cats );
											foreach($cat_arr as $cat){ ?>
												<option value="<?php echo $cat ?>"><?php echo $cat ?></option>
											<?}
										?>
									</select>
									<span class="form-input-decoration">
										<span class="dashicons dashicons-arrow-down-alt2"></span>
									</span>
								</div>
								
							</form>
						</div>
					</div>
					
					<div class="row events-archive__chosen-filters">
						<div class="sidebar-trigger">
							<button class="button button-icon button-contained-color">
								<span class="dashicons dashicons-filter"></span>
							</button>
							<p><?php echo __('Show advanced filters', 'viktoria')?></p>
						</div>
						<div class="chosen-filters"></div>
					</div>
					
					<div class="events__grid" id="events-grid">
						<span class="loader" id="loader"></span>
						<!-- ajax loading -->
					</div>
				</div>
		</main>
</div>


<?php
get_footer();