<?php
    get_header();
?>

<div id="primary" class="event-page">
    <?php get_template_part( 'template-parts/content', 'small-hero' );?>
    <div class="container-default">
        <div class="event-page__grid">
            <?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
            <?php get_sidebar('events')?>
            <?php endif; ?>
            <main class="site-main" role="main">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
                get_template_part( 'template-parts/content', 'event' );
                ?>
                <?php
                endwhile;
                else : 
                    get_template_part( 'template-parts/content-none' );
                endif; ?>
            </main>
        </div>
    </div>
</div>

<?php
    get_footer();
?>







