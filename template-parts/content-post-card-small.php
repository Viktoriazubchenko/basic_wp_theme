<?php
$post_id = get_the_ID();

$attributes = array(
    'sizes' => '(max-width: 350px) 350px, 233px',
    'class' => 'attachment-featured-large size-featured-image',
    'loading' => 'lazy'
);

$author_id  = get_post_field( 'post_author', get_the_ID() );
$author_posts_link = get_author_posts_url( $author_id );
$post_terms = wp_get_post_terms( $post_id, ['post_tag' ] );


?>

<div class="col-12 col-md-6 col-lg-4">
    <div class="post-card-small d-flex">
        <header class="post-card-small__header">
            <figure class="post-card-small__image">
                <a href="<?php echo esc_url(get_permalink())?>">
                    <?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'featured-thumbnail', false, $attributes )?>
                </a>
            </figure>
        </header>
        <div class="post-card-small__info">
            <h3><?php echo get_the_title();?></h3>
            <div class="post-card-small__autor">
                <a href="<?php echo esc_url( $author_posts_link ); ?>"><?php the_author(); ?></a>
            </div>
            <?php   if ( !empty( $post_terms ) ||  is_array( $post_terms ) ) { ?>
        <div class="post-card-small__terms">
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
    </div>
</div>