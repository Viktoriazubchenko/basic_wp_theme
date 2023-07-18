<?php
    get_header();
?>

<div id="primary">
    <main id="main" class="site-main" role="main">
        <?php
            if(have_posts()):
            while(have_posts()) : the_post();
            get_template_part( 'template-parts/content', 'post' );
            endwhile;
            else:
            get_template_part( 'template-parts/content-none' );
            endif;
        ?>    
    </main>
</div>

<?php
    get_footer();
?>