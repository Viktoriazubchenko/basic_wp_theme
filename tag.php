<?php
    get_header();
    $the_query = new WP_Query( 'posts_per_page=1' );
?>

<div id="primary">
    <div id="main" class="site-main" role="main">
        <?php
        if ( have_posts() ) : ?>
            <div class="container">
                <div class="row">
                    <header class="page__header">
                        <h1 class="page__title">
                            <?php single_tag_title(); ?>
                        </h1>
                        <p><?php echo tag_description(); ?></p>
					</header>
                </div>
                <div class="row">
                        <?php
                        while ($the_query -> have_posts()) : $the_query -> the_post();
                            get_template_part('template-parts/content', 'post-hero');
                        endwhile;
                        wp_reset_postdata();
                        ?>
                </div>
                <div class="row">
                <?php
                    while ( have_posts() ) : the_post(); 
                    get_template_part('template-parts/content', 'post-card');
                    endwhile;
                ?>
                </div>  
            </div>
        <?php 
        else: get_template_part('template-parts/content', 'none');
        endif; ?>
    </div>
</div>



<?php
    get_footer();
?>