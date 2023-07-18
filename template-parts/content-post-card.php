<?php
$post_ID = get_the_ID();
$trimmed_excerpt = wp_html_excerpt( get_the_excerpt($post_ID), 100, ' ...' );
$post_date = get_the_date('j.m.Y');
$archive_year  = get_the_time( 'Y' ); 
$archive_month = get_the_time( 'm' ); 
$archive_day   = get_the_time( 'd' );
$author_id  = get_post_field( 'post_author', get_the_ID() );
$author_posts_link = get_author_posts_url( $author_id );
$post_terms = wp_get_post_terms( $post_ID, ['category' ] );

?>
<div class="post-card__content">
    <header class="post-card__heading">
        <figure class="post-card__image">
            <a href="<?php echo esc_url(get_permalink())?>">
                <?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'featured-thumbnail', false )?>
            </a>
        </figure>
    </header>
    <div class="post-card__body">
        <a class="post-card__title" href="<?php echo esc_url(get_permalink())?>">
            <h4>
                <?php echo get_the_title();?>
            </h4>
        </a>
        <div class="post-card__descr">
            <p class=""><?php echo $trimmed_excerpt; ?></p>
        </div>
        <div class="post-card__footer">
        <?php   if ( !empty( $post_terms ) ||  is_array( $post_terms ) ) { ?>
            <div class="post-card__terms">
            <?php
            if(!empty($post_terms)):
            foreach($post_terms as $post_term ) {
                ?>
                <a class="b1" href="<?php echo esc_url( get_term_link( $post_term ) ); ?>">
                    <?php echo esc_html( $post_term->name ); ?>
                </a>
                <?php
            }
            endif;
            ?>
            </div>	
            <?php } ?>
            <div class="post-card__author">
                <a class="b1" href="<?php echo esc_url( $author_posts_link ); ?>"><?php the_author(); ?></a>
            </div>
            <div class="post-card__date">
                <a class="b1" href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day ) ); ?>">
                    <time class="post__time"> <?php echo $post_date; ?></time>
                </a>
            </div>
        </div>
    </div>
</div>

