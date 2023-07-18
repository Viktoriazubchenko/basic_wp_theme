<?php
$social_links = get_field('social_links', 'options');
?>

<div class="social-links">
    <?php if(!empty($social_links)):
        foreach($social_links as $sl): ?>
            <a href="<?= $sl['link']['url'] ?>" class="social-icon social-icon-border-white">
                <?php if(!empty($sl['link_dashicon'])): ?>
                    <span class="dashicons <?= $sl['link_dashicon'] ?>"></span>
                <?php
                else: $link_custom_svg = wp_get_attachment_image($sl['link_custom_svg'], 'small', true, array('alt' => 'icon-social'));
                echo $link_custom_svg;
                endif;?>
            </a>
        <?php endforeach;
    endif; ?>
</div>