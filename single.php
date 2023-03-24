<?php
    get_header();
?>

<div id="primary">
    <main id="main" class="site-main" role="main">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10">
                    <?php
                        if(have_posts()):
                        while(have_posts()) : the_post();
                        get_template_part( 'template-parts/content', 'post' );
                        ?>
                        <div class="navigation">
                            <div class="alignleft"><?php previous_post_link( '&laquo; Previous Entries' ); ?></div>
                            <div class="alignright"><?php next_post_link( 'Next Entries &raquo;', '' ); ?></div>
                        </div>
                        <?php
                        endwhile;
                        else:
                        get_template_part( 'template-parts/content-none' );
                        endif;
                    ?>
                </div>
            </div>
        </div>
    </main>
</div>


<?php
    get_footer();
?>