<div class="post-cat-archive__pagination">
    <?php the_posts_pagination(array(
        'prev_text' => '<span class="dashicons dashicons-arrow-left-alt2"></span>'." ".__( 'Back', 'viktoria' ),
        'next_text' => __( 'Onward', 'viktoria' )." ".'<span class="dashicons dashicons-arrow-right-alt2"></span>',
        'class' => 'pagination-numeric',
        'mid_size' => 5
    ));?>
</div> 