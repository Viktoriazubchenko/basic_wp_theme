<?php
$image_id = get_field('banner_image');
$image_url = wp_get_attachment_image_url($image_id, 'full');
$featured_post_id = get_field('featured_post');
$trimmed_excerpt = wp_html_excerpt( get_the_excerpt($featured_post_id), 200, ' ...' );
?>

<section class="post-banner" style="background-image: url(<?php echo($image_url)?>)">
    <div class="post-banner__overlay"></div>
    <div class="container-default post-banner__container">
        <div class="post-banner__info">
            <?php if( $featured_post_id ): ?>
            <div class="meta">
                <p class="b1"><?php echo __('post of the week', 'viktoria')?></p>
            </div>
            <div class="title">
                <h2><?php echo esc_html( get_the_title($featured_post_id) ); ?></h2>
            </div>
            
            <div class="subtitle">
                <p class="sub"><?php echo $trimmed_excerpt ?></p>
            </div>
            <a href="<?php echo esc_url( get_the_permalink($featured_post_id) ); ?>" class="button button-default button-outlined-white"><?php echo __( 'read the post', 'viktoria' ); ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>

