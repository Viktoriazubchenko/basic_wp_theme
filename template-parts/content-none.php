<?php 
// author
$current_author = get_queried_object();
$current_author_id = $current_author->ID;
$authors = get_users( array( 'exclude' => $current_author_id ) );
?>

<div class="content-none">
    <?php if(is_author()): ?>
        <p class="sub">
            <?php echo __("There are no posts available from  ", "viktoria").$current_author->first_name." ".$current_author->last_name.__(" at the moment. ", "viktoria");
            if(!empty($authors)):
                echo __("Please explore our other authors for more content:", "viktoria");
            endif;
            ?>
        </p>
        <?php
            if(!empty($authors)): ?>
                <ul class="authors-list">
                <?php
                    foreach($authors as $author):
                    $author_archive_url = get_author_posts_url( $author->ID );
                    ?>
                        <li>
                            <a class="badge" href="<?php echo esc_url( $author_archive_url )?>">
                                <?php echo esc_html( $author->display_name )?>
                            </a>
                        </li>
                    <?php endforeach;
                ?>
                </ul>
            <?php endif;
        ?>
    <?php 
    else: ?> 
    <p class="sub">
    <?php echo __("There are no posts available at the moment.", "viktoria");
    ?>
    </p>
    <?php endif;?>

</div>