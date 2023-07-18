<?php
    $post_id = get_the_ID();
    $title = get_the_title();
    $post_date = get_the_date('j F, Y');
    $archive_year  = get_the_time( 'Y' ); 
    $archive_month = get_the_time( 'm' ); 
    $archive_day   = get_the_time( 'd' );
    $author_id  = get_post_field( 'post_author', get_the_ID() );
    $author_posts_link = get_author_posts_url( $author_id );
    $content = get_the_content();
    $post_terms = wp_get_post_terms( $post_id, ['category' ] );
    $authors_avatar_id = get_field('authors_avatar', 'user_'. $author_id);
    $authors_avatar = wp_get_attachment_image($authors_avatar_id, 'avatar-small');
    
?>

<article class="post post-<?= $post_id; ?>">
    <?php get_template_part( 'template-parts/content', 'small-hero' );?>
    <section class="post-info">
        <div class="container-default">
            <div class="post-info__content">
                <div class="post-info__author">
                    <div class="post-info__avatar">
                    <?php 
                        if(!empty($authors_avatar)){
                            echo $authors_avatar;
                        } else {
                            echo get_avatar( get_the_author_meta('user_email'), $size = '150');
                        }     
                    ?>
                    </div>
                    <p class="r2"><?php echo __('By ', 'viktoria') ?><a class="r2" href="<?php echo esc_url( $author_posts_link ); ?>"><?php the_author(); ?></a></p> 
                </div>
                <div class="post-info__date">
                    <p class="r2">
                        <?php _e('Published: ', 'viktoria');?>
                        <a class="r2" href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day ) ); ?>">
                            <time class="small-hero__time"> <?php echo $post_date; ?></time>
                        </a>
                    </p>
                    <?php 
                        $likes_count = new WP_Query(array(
                            'post_type' => 'like',
                            'meta_query' => array(
                                array(
                                'key' => 'liked_id',
                                'compare' => '=',
                                'value' => $post_id 
                                )
                            )
                        ));

                        $exist_status = 'no';
                        
                        if(is_user_logged_in()):
                            $exist_query = new WP_Query(array(
                                'author' => get_current_user_id(),
                                'post_type' => 'like',
                                'meta_query' => array(
                                    array(
                                    'key' => 'liked_id',
                                    'compare' => '=',
                                    'value' => $post_id 
                                    )
                                )
                            ));

                            if($exist_query->found_posts){
                                $exist_status = "yes";
                            };
                        endif;       
                    ?>
                    <div class="post-info__likes">
                        <span data-postid="<?= $post_id; ?>" data-like="<?php if (isset($existQuery->posts[0]->ID)) echo $existQuery->posts[0]->ID;?>" data-exist="<?=$exist_status?>" class="dashicons dashicons-star-<?php echo $exist_status === 'yes' ? 'filled' : 'empty' ?>"></span>
                        <p class="r2 likes-count"><?php echo $likes_count->found_posts;?></p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section class="post__body">
        <div class="container-post">
            <main class="post__content">
                <?php echo the_content(); ?>
            </main>
        </div>
    </section>
    <section class="post__footer">
        <div class="container-default">
            <div class="post__related-posts">
                <?php 
                    $categories = get_categories($post_id);
                    postsByCat(3, $post_terms[0], $post_id);
                ?>
            </div>
            <?php get_template_part( 'template-parts/navigation', 'posts' );?>
        </div>
    </section>
</article>