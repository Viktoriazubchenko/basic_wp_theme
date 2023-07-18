<?php
$title = get_field('title');
$cat = get_field('posts_category');


$latest_post = new WP_Query(
    array(
        'post_type' => 'post',
        'posts_per_page' => 1,
        'cat' => $cat->term_id
        
    )
);

$latest_posts_column = new WP_Query( 
    array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'offset' => 1,
        'cat' => $cat->term_id
    )
);

$latest_posts_row = new WP_Query( 
    array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'offset' => 5,
        'cat' => $cat->term_id
    )
);


?>

<section class="section main-cat-grid">
    <div class="container-default">
        <div class="main-cat-grid__heading">
            <h2 class="main-cat-grid__title"><?php echo $title . '<span>'. $cat->name  .'</span>' ?></h2>
        </div>
        <div class="main-cat-grid__subheading">
            <h3 class="main-cat-grid__subtitle"><?php echo $cat->name ?></h3>
            <span></span>
            <a class='r2' href="<?php echo get_term_link($cat)?>"><?php echo __('Read all ' . $cat->name . ' articles')?></a>
        </div>
        <div class="main-cat-grid__body">
            <div class="main-cat-grid__main">
                <?php 
                    if ( $latest_post->have_posts() ) {
                        while ( $latest_post->have_posts() ) {
                            $latest_post->the_post(); ?>
                            <div class="post-card post-card-vertical post-card-no-cat post-card-color">
                                <?php get_template_part('template-parts/content', 'post-card'); ?>
                             </div>
                        <?php }
                    } 
                    wp_reset_postdata();
                ?>
            </div>
            <?php 
                if ( $latest_posts_column->have_posts() ) { ?>  
                <?php 
                while ( $latest_posts_column->have_posts() ) {
                    $latest_posts_column->the_post(); ?> 
                    <div class="post-card post-card-horizontal post-card-bottom-border post-card-no-cat post-card-no-descr post-card-no-image">
                        <?php get_template_part('template-parts/content', 'post-card'); ?>
                    </div>
                <?php }
                ?> 
                <?php }
                wp_reset_postdata();
            ?>
        </div>
        <?php 
            if ( $latest_posts_row->have_posts() ) { ?>
                <div class="main-cat-grid__row">
                <?php
                while ( $latest_posts_row->have_posts() ) {
                    $latest_posts_row->the_post(); ?>
                        <div class="post-card post-card-vertical post-card-no-descr post-card-no-cat post-card-color-light">
                            <?php get_template_part('template-parts/content', 'post-card'); ?>
                        </div>
                <?php }
                ?> 
                </div>
            <?php } 
            wp_reset_postdata();
        ?>
        <div class="main-cat-grid__footer">
            <a class='b1' href="<?php echo get_term_link($cat)?>"><?php echo __('Read all ' . $cat->name . ' articles')?></a>
        </div>
        
    </div>
</section>
