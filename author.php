<?php
    get_header();
    $curauth = (get_query_var('author_name')) ? get_user_by('slug', get_query_var('author_name')) : get_userdata(get_query_var('author'));
?>

<div id="primary">
    <div id="main" class="site-main" role="main">
        <?php
        if ( have_posts() ) : ?>
            <div class="container">
                <div class="row">
                    <header class="page__header">
                        <?php echo get_avatar( get_the_author_meta('user_email'), $size = '100'); ?>
                        <h1 class="page__title">
                            <?php echo $curauth->display_name; ?>
                        </h1>
                        <a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a>
					</header>
                </div>
                <div class="row">
                <?php
                echo $curauth->description;
                ?>
                </div>
                <div class="row">
                <h2><?php echo  __('Posts by ', 'viktoria') . $curauth->display_name ?></h2>
                <?php
                    while ( have_posts() ) : the_post(); 
                    get_template_part('template-parts/content', 'post-card');
                    endwhile;
                ?>
                </div>  
            </div>
        <?php 
        else: ?>
            <h2><?php echo $curauth->display_name . __(' has no published posts yet', 'viktoria') ?></h2>
        <?php endif; ?>
    </div>
</div>



<?php
    get_footer();
?>