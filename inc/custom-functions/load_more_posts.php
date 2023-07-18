<?php

    function load_more_posts(){
        
        $posts = new WP_Query([
            'post_type' => 'post',
            'posts_per_page' => $_POST['posts_per_page'],
            'orderby' => 'date',
            'category_name' => $_POST['category'],
            'order' => 'DESC',
            'paged' => $_POST['paged'],
        ]);

        $response = '';
        $max_pages = $posts->max_num_pages;

        if($posts->have_posts()) {
            
            while($posts->have_posts()) : $posts->the_post();
                $response .= '<div class="post-card post-card-vertical post-card-no-cat">';
                ob_start();
                get_template_part('template-parts/content', 'post-card');
                $response .= ob_get_clean();
                $response .= '</div>';
            endwhile;
          } else {
            $response = '';
        }

        $result = [
            'max' => $max_pages,
            'html' => $response,
        ];
        
        echo json_encode($result);
        exit;
    }

    add_action('wp_ajax_load_more_posts', 'load_more_posts');
    add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');
?>