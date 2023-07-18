<?php
    get_header();
?>

<div id="primary">
    <div id="main" class="site-main" role="main">
        <section class="not-found">
            <div class="container-default">
                <div class="not-found__info">
                    <div class="meta">
                        <p class="b1"><?php echo __("Ooups... 404", "viktoria")?></p>
                    </div>
                    <div class="title">
                        <h1><?php echo __("Page is not found", "viktoria")?></h1>
                    </div>
                    <p class="sub">
                    <?php echo __("Looks like you were looking for something that doesn't exist.", "viktoria")?>
                    </p>
                    <a href="<?php echo esc_url( home_url( '/' ) );?>" class="button button-contained-color button-default"><?php echo __("Go home", "viktoria")?></a>
                </div>
            </div>
        </section>
    </div>
</div>


<?php
    get_footer();
?>