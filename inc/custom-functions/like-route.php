<?php
    
    add_action('rest_api_init', 'like_routes');

    function like_routes(){
        register_rest_route('viktoria/v1', 'manage_likes', array(
            'methods' => 'POST',
            'callback' => 'add_like',

        ));

        register_rest_route('viktoria/v1', 'manage_likes', array(
            'methods' => 'DELETE',
            'callback' => 'remove_like',
        ));
    }

    function add_like($data){
        // checking if user is logged in
        if(is_user_logged_in()){
            $liked_post_id = sanitize_text_field($data['post_id']);

            $exist_query = new WP_Query(array(
                'author' => get_current_user_id(),
                'post_type' => 'like',
                'meta_query' => array(
                    array(
                    'key' => 'liked_id',
                    'compare' => '=',
                    'value' => $liked_post_id
                    )
                )
            ));
            if($exist_query->found_posts == 0 AND get_post_type($liked_post_id) == "post"){
                return wp_insert_post(array(
                    'post_type' => 'like',
                    'post_status' => 'publish',
                    'post_title' => 'Test',
                    'meta_input' => array(
                        'liked_id' => $liked_post_id
                    )
                ));
            } else {
                die('You have already liked this post'." ".$exist_query->found_posts." ".$liked_post_id);
            }
        } else {
            die('For logged in users only');
        } 
    }

    function remove_like($data){
        $like_id = sanitize_text_field($data['like']);
        if(get_current_user_id() == get_post_field('post_author', $like_id) AND get_post_type($like_id) == "like" ){
            wp_delete_post($like_id, true);
            return "Like deleted";
        } else {
            die('You do not have permission to delete this like');
        }
    }
    
?>


