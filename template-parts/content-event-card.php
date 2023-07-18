<?php
$event_ID = get_the_ID();
$event_title = get_the_title();
$post_terms = wp_get_post_terms( $event_ID, ['category' ] );
$thumbnail_ID = get_post_thumbnail_id();
$thumbnail_caption = get_the_post_thumbnail_caption();
$event_date_time = strtotime(get_field('date_and_time', $event_ID));
$is_outdated = $event_date_time < strtotime(date("Y-m-d")) ? 'outdated' : 'upcoming';
$event_day = date("d", $event_date_time);
$event_month = date("F", $event_date_time);
$event_year = date("Y", $event_date_time);
$event_type = get_field('event_type', $event_ID);
$required_level = get_field('required_level', $event_ID);
$event_format = get_field('event_format', $event_ID);
$event_cats = get_the_category($event_ID);
if ( ! empty( $event_cats ) ) {
    $category = $event_cats[0];
    $category_name = $category->name;
}
?>


    <div class="event-card__content">
        <div class="event-card__heading">
                <div class="event-card__level badge">
                    <?php
                        if($required_level['value'] == 0) { ?>
                            <span class="dashicons dashicons-smiley"></span>
                        <?php } else {
                            $filled_stars = intval($required_level['value']);
                            $max_level = 3;
                            $empty_stars = $max_level - $filled_stars;
                            for ($x = 0; $x < $filled_stars; $x++) { ?>
                                <span class="dashicons dashicons-star-filled"></span>
                            <?php }
                            if($empty_stars > 0){
                                for ($x = 0; $x < $empty_stars; $x++) { ?>
                                    <span class="dashicons dashicons-star-empty"></span>
                                <?php }
                            }
                        }     
                    ?>
                </div>
            <?php
                if(!empty($thumbnail_ID)): ?>
                    <figure class="event-card__image">
                        <a href="<?php echo esc_url(get_permalink())?>">
                            <?php echo wp_get_attachment_image($thumbnail_ID, 'event-thumbnail', false )?>
                        </a>
                        <figcaption><?= $thumbnail_caption; ?></figcaption>
                    </figure>
                <?php endif;
            ?>
        </div>
        <div class="event-card__body">
            <div class="event-card__date badge">
                <span class="event-card__day"><?=$event_day ?></span>
                <span class="event-card__month"><?=$event_month ?></span>
                <span class="event-card__year"><?=$event_year ?></span>
            </div>
            <?php if(!empty($event_type)){ ?>
                <div class="event-card__meta b1">
                    <?= $event_type['label'] ?>
                </div>
            <?php }?>
                <a class="event-card__title" href="<?php echo esc_url(get_permalink())?>">
                    <h4 >
                        <?php echo get_the_title();?>
                    </h4>
                </a>
            <div class="event-card__badges">
                <?php if(!empty($event_format)){ ?>
                    <span class="badge"><?= $event_format['label'] ?></span>
                <?php }?>
                <?php if(!empty($category_name)){ ?>
                    <span class="badge event-card__category"><?= $category_name ?></span>
                <?php }?>
            </div>
        </div>
    </div>
