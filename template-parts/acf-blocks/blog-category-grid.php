<?php
function createCatGrid($cat){ 
    $date_now = date('Y-m-d H:i:s');
    $posts_in_cat = new WP_Query( 
        array(
            'post_type' => 'post',
            'posts_per_page' => 4,
            'category_name' => $cat->name
        )
    );
    $events_in_cat = new WP_Query( 
        array(
            'post_type' => 'events',
            'posts_per_page' => 1,
            'category_name' => $cat->name,
            'meta_key' => 'date_and_time', 
            'meta_type' => 'DATETIME',
            'orderby' => 'meta_value',
            'order' => 'ASC',
            'meta_query' => array(
                'key'         => 'date_and_time',
                'compare'	  =>  '>',
                'value'       =>  $date_now,
                'type'        => 'DATETIME', 
            )
        )
    );

    $no_upcoming_events = $events_in_cat->have_posts() ? false : true;

    if($posts_in_cat->have_posts()): ?>
      
        <div class="blog-cats-grid__heading">
            <h3 class="blog-cats-grid__subtitle"><?php echo $cat->name ?></h3>
            <span></span>
            <a class='r2' href="<?php echo get_term_link($cat)?>"><?php echo __('Read all ' . $cat->name . ' articles')?></a>
        </div>
     
        <!--  -->

        <div class="blog-cats-grid__body">
                
                    <?php while($posts_in_cat->have_posts()): $posts_in_cat->the_post();?>
                        <div class="post-card post-card-horizontal post-card-no-cat <?php if(!$no_upcoming_events){echo 'post-card-no-image';}?>">
                            <?php get_template_part('template-parts/content', 'post-card'); ?>
                        </div>
                    <?php endwhile;
                    wp_reset_postdata();?>
                
                
                <?php if(!$no_upcoming_events): ?>
                        
                            <?php while($events_in_cat->have_posts()): $events_in_cat->the_post();?>
                                <div class="event-card event-card-responsive">
                                    <?php get_template_part( 'template-parts/content', 'event-card' ); ?>
                                </div>
                            <?php endwhile;
                            wp_reset_postdata();?>
                        
                    <?php endif;
                ?>      
        </div>
        <div class="blog-cats-grid__footer">
            <a class='b1' href="<?php echo get_term_link($cat)?>"><?php echo __('Read all ' . $cat->name . ' articles')?></a>
        </div>
       
    <?php endif;
}?>
    
     
<section class="blog-cats-grid">
    <?php
    $title = get_field('title');
    ?>
    <div class="container-default">
    <?php if(!empty($title)): ?>
        <h2 class="blog-cats-grid__title"><?php echo $title; ?></h2>
    <?php endif;
    ?>
    <?php 
    $chosen_cats = get_field('categories');
    $categories = get_categories();
    foreach($chosen_cats as $category): ?>
        <div class="blog-cats-grid__item">
            <?php createCatGrid($category);?>
        </div>
    <?php endforeach;
    ?>
    </div>
</section>
