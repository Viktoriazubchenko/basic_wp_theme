<?php
    get_header();
    $category = get_queried_object();
    $category_slug = $category->slug;
?>

<div id="primary">
    <div id="main" class="site-main" role="main">
        <?php get_template_part('template-parts/content', 'small-hero')?>
        <section class="post-cat-archive">
            <div class="container-default">
            <?php
            if ( have_posts() ) : ?>
                
                            <div class="post-cat-archive__grid post-cat-archive__grid-default" id="post-cat-archive__grid" data-category=<?= $category_slug;?>>
                                <?php
                                while ( have_posts() ) : the_post();  ?>
                                <div class="post-card post-card-vertical post-card-no-cat">
                                <?php get_template_part('template-parts/content', 'post-card'); ?>
                                </div>
                                <?php endwhile;
                                ?>
                            </div>
                            <?php if($wp_query->max_num_pages > 1 ): ?>
                                <div class="post-cat-archive__controller">
                                    <button id="load-more" class="button button-default button-contained-color"><?php echo __('Load more posts', 'viktoria')?></button>
                                </div>
                            <?php endif;
                            ?>
                    
            <?php 
            else: get_template_part('template-parts/content', 'none');
            endif; ?>
            </div>
        </section>
    </div>
</div>



<?php
    get_footer();
?>