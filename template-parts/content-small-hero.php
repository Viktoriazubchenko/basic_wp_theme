<?php
    $post_id = get_the_ID();
    $title = get_the_title();
    // posts
    $post_date = get_the_date('j F, Y');
    $archive_year  = get_the_time( 'Y' ); 
    $archive_month = get_the_time( 'm' ); 
    $archive_day   = get_the_time( 'd' );
    $post_terms = wp_get_post_terms( $post_id, ['category' ] );   
    $post_type = get_post_type();
    // events
    $event_format = get_field('event_format', $post_id);
    $event_type = get_field('event_type', $post_id);
    $required_level = get_field('required_level', $post_id);
    $event_date_time = strtotime(get_field('date_and_time', $post_id));
    $is_outdated = $event_date_time < strtotime(date("Y-m-d")) ? true : false;
    $event_day = date("d", $event_date_time);
    $event_month = date("F", $event_date_time);
    $event_year = date("Y", $event_date_time);

    
?>

<section class="small-hero">
    <div class="container-default">
        <div class="small-hero__heading">
            <h1 class="small-hero__title">
                <?php if(is_search()):
                   echo __("Search result for: ", "viktoria").'<span class="color-font">'.esc_html(get_search_query()).'</span>';
                endif;?>
                <?php if(is_category() || is_home() || is_archive()):
                   echo the_archive_title();
                endif;?>
                <?php if(is_single()):
                   echo $post_type == 'events' && !empty($event_format) ?  $event_type['label'] . ": " : '';
                   echo $title;
                endif;?>
            </h1>
            <?php if(is_category()): ?>
                <div class="sub"><?php echo category_description(); ?></div>
                <div class="small-hero__cat-btn">
                    <a href="<?php echo get_post_type_archive_link('post')?>" class="button button-default button-contained-color">
                        <?php echo __('Main posts archive', 'viktoria');?>
                    </a>
                </div>
            <?php endif;?>
            <?php if(is_single()):
                if($post_type == 'events'): ?>
                    <p class="b1 small-hero__date-info">
                        <?php 
                            if($is_outdated){
                                echo __('Took place on ', 'viktoria');
                            } else {
                                echo __('Coming up on ', 'viktoria');
                            }
                        ?>
                        <time class="b1 event__time"><?=$event_day.' '.$event_month.', '.$event_year; ?></time>
                    </p>
                    <div class="small-hero__badges">
                        <div class="badge"><?= esc_html( $post_terms[0]->name ); ?></div>
                        <div class="badge"><?= $required_level['label'] ?></div>
                        <div class="badge"><?= $event_format['label'] ?></div>
                        <div class="badge"><?php echo $is_outdated ? __('prior event', 'viktoria') : __('upcoming event', 'viktoria');?></div>
                    </div>
                    <?php elseif ($post_type == 'post'): ?>
                        <div class="small-hero__cat-btn">
                            <a href="<?php echo esc_url( get_term_link( $post_terms[0] ) ); ?>" class="button button-default button-contained-color">
                                <?php echo __('All articles about ').esc_html( $post_terms[0]->name );?>
                            </a>
                        </div>
                <?php endif;   
            endif;?>
        </div>
    </div>
</section>