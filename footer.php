<?php
$contacts_content = get_field('contacts', 'options');
$footer_logo_id = get_field('footer_logo', 'options');
$footer_logo = wp_get_attachment_image($footer_logo_id, 'large');
$social_links = get_field('social_links', 'options');
$copyright = get_field('copyright', 'options');
$primary_menu_title = get_field('primary_menu_title', 'options');
$secondary_menu_title = get_field('secondary_menu_title', 'options');
?>
</div>
<footer class="site-footer footer">
    <div class="container-default">
        <div class="row footer__body">
            <div class="col-12 col-lg-4">
                <?php if(!empty($footer_logo)): ?> 
                    <div class="footer__logo">
                        <a href="<?php echo esc_url( home_url( '/' ) );?>">
                            <p class="footer__site-name"><?php echo bloginfo( 'name' );?></p>
                        </a>
                    </div>
                    <?php else: ?>
                        <div class="footer__logo">
                            <a href="<?php echo esc_url( home_url( '/' ) );?>">
                                <p class="footer__site-name"><?php echo bloginfo( 'name' );?></p>
                            </a>
                        </div>
                <?php endif; ?>
                <?php if(!empty($contacts_content)): ?> 
                    <div class="footer__contacts"><?= $contacts_content; ?></div>
                <?php endif; ?>
            </div>
            <div class="col-12 col-md-4">
                <div class="footer__menu">
                    <p class="menu-title"><?php echo $primary_menu_title ?></p>
                    <?php echo wp_nav_menu(['theme_location' => 'footer_primary_menu']); ?>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="footer__menu">
                    <p class="menu-title"><?php echo $secondary_menu_title ?></p>
                    <?php echo wp_nav_menu(['theme_location' => 'footer_secondary_menu']); ?>
                </div>
            </div>
        </div>
        <div class="row footer__footer">
            <div class="col-12 col-md-4">
                <div class="footer__copyright">
                    <p><?= $copyright;?></p>
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
                <div class="footer__social-links">
                    <?php if(!empty($social_links)):
                        foreach($social_links as $sl): ?>
                            <a href="<?= $sl['link']['url'] ?>" class="social-icon social-icon-border-white">
                                <?php if(!empty($sl['link_dashicon'])): ?>
                                    <span class="dashicons <?= $sl['link_dashicon'] ?>"></span>
                                <?php
                                endif;?>
                            </a>
                        <?php endforeach;
                    endif; ?>
                </div>
            </div>
        </div>
    </div>
</footer>  
  
<?php wp_footer(); ?>
</body>
</html>