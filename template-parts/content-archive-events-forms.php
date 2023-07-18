<div class="row events__control-panel mb-5">
						<div class="col-4">
							<form class="events-search form" action="">
								<div class="events-search__field form__field">
									<div class="events-search__decoration form__decoration">
										<span class="dashicons dashicons-search"></span>
									</div>
									<label for="events-search" class="events-search__label form__label">
										<div class="events-search__input-wrapper form__input-wrapper">
											<input id="keyword" class="events-search__input form__input" placeholder="<?php echo esc_html('Search...')?>" name="events-search" type="search" aria-label="Search...">
										</div>
									</label>
								</div>
							</form>
						</div>
						<div class="col-4">
							<form class="events-sort" action="#">
								<label for="sort-events"></label>
								<select name="sort-events" id="sort-events">
									<option value="meta_value"><?php echo __('Sort by date'); ?></option>
									<option value="title"><?php echo __('Sort in alphabetical order'); ?></option>
								</select>
							</form>
						</div>
						<div class="col-4">
							<form class="events-filter" action="#">
								<label for="filter-events"></label>
								<select name="filter-events" id="filter-events">
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
							</form>
						</div>
					</div>