<?php
    $post_id = get_the_ID();
    $title = get_the_title();
    $post_date = get_the_date('j F, Y');
    $archive_year  = get_the_time( 'Y' ); 
    $archive_month = get_the_time( 'm' ); 
    $archive_day   = get_the_time( 'd' );
    $author_id  = get_post_field( 'post_author', get_the_ID() );
    $author_posts_link = get_author_posts_url( $author_id );
    $content = get_the_content();
    $post_terms = wp_get_post_terms( $post_id, ['category' ] );
    
    print_r(single_post_title('Current post: ') );
?>

<article class="post post-<?= $post_id; ?>">
    <div class="post__header">
        <h1 class="post__title">
            <?php echo $title; ?>
        </h1>
        <div class="post__info">
            <div class="post__autor">
                <?php _e('Written by ', 'viktoria');?>
                <a href="<?php echo esc_url( $author_posts_link ); ?>"><?php the_author(); ?></a>
            </div>
            <div class="post__date">
                <a href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day ) ); ?>">
                    <?php _e('Published: ', 'viktoria');?>
                    <time class="post__time"> <?php echo $post_date; ?></time>
                </a>
            </div>
        </div>
    </div>
    <div class="post__body">
        <?php echo $content; ?>
    </div>
    <div class="post__footer">
    <?php   if ( !empty( $post_terms ) ||  is_array( $post_terms ) ) { ?>
        <div class="post__terms">
        <?php
        foreach($post_terms as $post_term ) {
            ?>
            <a class="entry-footer-link text-black-50 btn border border-secondary mb-2 mr-2" href="<?php echo esc_url( get_term_link( $post_term ) ); ?>">
                <?php echo esc_html( $post_term->name ); ?>
            </a>
            <?php
        }
        ?>
        </div>	
    <?php } ?>
    </div>
</article>