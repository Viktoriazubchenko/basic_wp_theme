<?php
function postsByCat($count, $cat, $actual_post_id){ 
    $posts_in_cat = new WP_Query( 
        array(
            'post_type' => 'post',
            'posts_per_page' => $count,
            'category_name' => $cat->name,
            'post__not_in' => array($actual_post_id)
        )
    );

    if($posts_in_cat->have_posts()): ?>
        <?php while($posts_in_cat->have_posts()): $posts_in_cat->the_post();?>
            <div class="post-card post-card-minimum">
                <?php get_template_part('template-parts/content', 'post-card'); ?>
            </div>
        <?php endwhile;
        wp_reset_postdata();?>
    <?php endif;
}?>