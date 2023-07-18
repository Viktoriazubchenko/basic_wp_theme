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
                    <div class="post-cat-archive__grid">
                        <?php
                        while ( have_posts() ) : the_post();  ?>
                        <div class="post-card post-card-vertical post-card-no-cat">
                            <?php get_template_part('template-parts/content', 'post-card'); ?>
                        </div>
                        <?php endwhile;
                        ?>
                    </div>  
                    <?php get_template_part('template-parts/pagination')?>
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