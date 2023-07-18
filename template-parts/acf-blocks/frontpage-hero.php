<?php
    $style = get_field('block_style');
    $meta = get_field('block_meta');
    $title = get_field('block_title');
    $title_small = get_field('block_title_small');
    $subtitle = get_field('block_subtitle');
    $description = get_field('block_description');
    $image_id = get_field('block_image');
    $image_url = wp_get_attachment_image_url($image_id, 'full');
    $image = wp_get_attachment_image($image_id, 'large');
    $_buttons = get_field('block_buttons');
    $buttons = array();
    if(!empty($_buttons)):
        foreach($_buttons as $_button):
            $button = array();
            $button['button_link'] = $_button['button_link'];
            $button['button_color'] = $_button['button_color'];
            $button['button_style'] = $_button['button_style'];
            $buttons[] = $button;
        endforeach;
    endif;
    $include_social_icons = get_field('include_social_icons');
    $include_background_decoration = get_field('include_background_decoration');
?>


<section class="frontpage-hero <?php echo $include_background_decoration ? "decorative-bg" : "simple-bg"?>" >
    <div class="container-default">
        <div class="frontpage-hero__block">
            <div class="frontpage-hero__info <?php echo empty($image_id) ? 'frontpage-hero__info-full' : ''?>">
            <?php if(!empty($meta)){ ?>
                <div class="meta">
                    <p class="b1"><?= $meta; ?></p>
                </div>
            <?php } ?>
            <?php if(!empty($title)){ ?>
                <div class="title">
                    <h1 class="display"><?= $title; ?></h1>
                </div>
            <?php } ?>
            <?php if(!empty($title_small)){ ?>
                <div class="title-small">
                    <h2><?= $title_small; ?></h2>
                </div>
            <?php } ?>
            <?php if(!empty($subtitle)){ ?>
                <div class="subtitle">
                    <p class="sub"><?= $subtitle; ?></p>
                </div>
            <?php } ?>
            <?php if(!empty($description)){ ?>
                <div class="description">
                    <?= $description; ?>
                </div>
            <?php } ?>
            <?php if(!empty($buttons)){ ?>
                <div class="frontpage-hero__buttons">
                    <?php foreach($buttons as $button): ?>
                        <a href="<?= $button['button_link']['url']?> " class="button button-default button-<?=$button['button_style']?>-<?=$button['button_color']?>"><?= $button['button_link']['title']?></a>
                    <?php endforeach;
                    ?>
                </div>
            <?php } ?>
            </div>
            
            <?php if(!empty($image)){ ?>
                <div class="frontpage-hero__image">
                    <?= $image; ?>
                </div>
            <?php } ?>
            <?php if($include_social_icons && !empty(get_field('social_links', 'options'))):
                get_template_part('template-parts/content', 'social-icons');
            endif;?>
        </div>
    </div>
</section>
        