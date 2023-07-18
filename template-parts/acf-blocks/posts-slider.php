<?php
    $meta = get_field('block_meta');
    $title = get_field('block_title');
    $subtitle = get_field('block_subtitle');
    $description = get_field('block_description');
    $post_type = get_field('posts_to_share'); 
    $post_type_plural = $post_type == 'event' ? 'events' : 'post';
    $args = array(
        'post_type' => $post_type_plural,
		'posts_per_page' => 6,
    );
    $posts_query = new WP_Query($args);
?>

<section class="posts-slider">
    <div class="container-default">
        <div class="posts-slider__heading heading heading-centered heading-colored">
                <?php if(!empty($meta)){ ?>
                    <div class="meta">
                        <p class="b1"><?= $meta; ?></p>
                    </div>
                <?php } ?>
                <?php if(!empty($title)){ ?>
                    <div class="title">
                        <h2><?= $title; ?></h2>
                    </div>
                <?php } ?>
                <?php if(!empty($subtitle)){ ?>
                    <div class="subtitle">
                        <p class="sub"><?= $subtitle; ?></p>
                    </div>
                <?php } ?>
                
        </div>
        <div class="posts-slider__slider-wrapper">
            <?php if($posts_query->have_posts() ): ?>
                <div class="posts-slider__slider-<?=$post_type?>">
                    <?php while($posts_query->have_posts()): $posts_query->the_post(); ?>
                        <div class="<?=$post_type?>-card <?=$post_type?>-card-slide">
                            <?php get_template_part( 'template-parts/content', $post_type . '-card' );?>
                        </div>
                    <?php endwhile;?>
                </div>
            <?php endif; ?>
            <div class="posts-slider__controllers posts-slider__controllers-<?= $post_type ?>">
            </div>
            <div class="posts-slider__dots posts-slider__dots-<?= $post_type ?>">
            </div>
        </div>  
    </div>
</section>

                
            