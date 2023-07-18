<?php
    get_header();
?>



<div id="primary">
    <div id="main" class="site-main" role="main">
        <?php
        if ( have_posts() ) : ?>
                <?php
                    while ( have_posts() ) : the_post(); 
                    the_content();
                    endwhile;
                ?>
        <?php 
        else: get_template_part('template-parts/content', 'none');
        endif; ?>
    </div>
</div>



<?php
    get_footer();
?>