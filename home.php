<?php
    get_header();
?>

<div id="primary">
    <div id="main" class="site-main" role="main">
        <?php get_template_part('template-parts/content', 'small-hero')?>
        <?php
        if ( have_posts() ) : ?>
            <section class="post-cat-archive">
                <div class="container-default">
                    <div class="post-cat-archive__grid post-cat-archive__grid-default">
                        <?php
                        while ( have_posts() ) : the_post();  ?>
                        <div class="post-card post-card-vertical post-card-no-cat">
                            <?php get_template_part('template-parts/content', 'post-card'); ?>
                        </div>
                        <?php endwhile;
                        ?>
                    </div>  
                    <div class="post-cat-archive__pagination">
                        <?php the_posts_pagination(array(
                            'prev_text' => __( 'Back', 'viktoria' ),
                            'next_text' => __( 'Onward', 'viktoria' ),
                            'class' => 'pagination-numeric',
                            'mid_size' => 5
                        ));?>
                    </div> 
                </div>
            </section>
        <?php 
        else: get_template_part('template-parts/content', 'none');
        endif; ?>
    </div>
</div>



<?php
    get_footer();
?>