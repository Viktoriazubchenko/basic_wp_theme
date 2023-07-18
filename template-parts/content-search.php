<article class="search-item">
    <?php
    $thumbnail_id = get_post_thumbnail_id();
    if(!empty($thumbnail_id )): ?>
    <div class="search-item__left">
    <a href="<?php echo esc_url(get_permalink())?>" class="search-item__image">
    <?php	echo wp_get_attachment_image($thumbnail_id, 'event-thumbnail', false ); ?>
    </a>
    </div>
    <?php endif; ?>
    <div class="search-item__right <?php echo get_post_type() === 'page' ? "no-bottom-padding" : "";?>">
    <?php
        $title = get_the_title();
        if(!empty($title )): ?>
        <a href="<?php echo esc_url(get_permalink())?>" class="search-item">
            <h3><?=$title ?></h3>
        </a>
        <? endif;
    ?>
    <?php
        $excerpt = get_the_excerpt();
        if(!empty($excerpt )): ?>
            <p><?=$excerpt;?></p>
        <? endif;
    ?>
    </div>
</article>