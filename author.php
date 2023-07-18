<?php
    get_header();
    $curauth = (get_query_var('author_name')) ? get_user_by('slug', get_query_var('author_name')) : get_userdata(get_query_var('author'));
    $author_id = get_the_author_meta('ID');
    $authors_mail = get_field('authors_email', 'user_'. $author_id);
    $authors_fb = get_field('authors_fb', 'user_'. $author_id);
    $authors_in = get_field('authors_in', 'user_'. $author_id);
    $authors_avatar_id = get_field('authors_avatar', 'user_'. $author_id);
    $authors_avatar = wp_get_attachment_image($authors_avatar_id, 'avatar-large');
?>

<div id="primary">
    <div id="main" class="site-main" role="main">
        <section class="blog-author">
            <div class="container-default">
                <div class="row">
                    <div class="blog-author__heading">
                        <div class="blog-author__image">
                            <?php 
                            if(!empty($authors_avatar)){
                                echo $authors_avatar;
                            } else {
                                echo get_avatar( get_the_author_meta('user_email'), $size = '200');
                            }     
                            ?>
                        </div>
                        <div class="blog-author__info">
                            <h1 class="blog-author__name">
                                <?php echo $curauth->first_name; ?>
                                <span><?php echo $curauth->last_name; ?></span>
                            </h1>
                            <a class="blog-author__mail b1 b-bolder" href="mailto:<?=$authors_mail?>"><?=$authors_mail?></a>
                            <div class="blog-author__bio">
                                <?php
                                    echo $curauth->description;
                                ?>
                            </div>
                            <div class="blog-author__social">
                                <?php
                                    if(!empty($authors_fb)) { ?>
                                        
                                        <a class="social-icon" href="<?=$authors_fb['url']?>"><span class="dashicons dashicons-facebook-alt"></span></a>
                                    <? }
                                ?>
                                <?php
                                    if(!empty($authors_in)) { ?>
                                        <a class="social-icon" href="<?=$authors_in['url']?>"><span class="dashicons dashicons-linkedin"></span></a>
                                    <? }
                                ?>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section class="blog-author-feed">
            <div class="container-default">
                <?php
                if ( have_posts() ) : ?> 
                <div class="blog-author-feed__grid">
                <?php
                    while ( have_posts() ) : the_post(); ?>
                    <div class="post-card post-card-archive post-card-no-author">
                        <?php get_template_part('template-parts/content', 'post-card'); ?>
                    </div>
                <?php endwhile;?>
                </div> 
                <?php get_template_part('template-parts/pagination')?>
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