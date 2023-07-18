<?php
    $meta = get_field('block_meta');
    $title = get_field('block_title');
    $subtitle = get_field('block_subtitle');
    $description = get_field('block_description');
    $background_color = get_field('background_color');
    $background_is_dark = $background_color == "dark" ? true : false;
    $buttons = get_field('block_buttons'); 
?>

<section class="text-block text-block-<?= $background_color;?>">
    <div class="container-post">
        <div class="text-block__heading heading heading-centered <?php echo $background_is_dark ? '' : 'heading-colored'?>">
            <?php if(!empty($meta)){ ?>
                    <div class="meta">
                        <p class="b1"><?= $meta; ?></p>
                    </div>
                <?php } ?>
                <?php if(!empty($title)){ ?>
                    <div class="title">
                        <h2><?= $title; ?></h2>
                    </div>
                <?php } ?>
                <?php if(!empty($subtitle)){ ?>
                    <div class="subtitle">
                        <p class="sub"><?= $subtitle; ?></p>
                    </div>
                <?php } ?>
                
        </div>
        <div class="text-block__body">
            <?php if(!empty($description)){ ?>
                <div class="description">
                    <?= $description; ?>
                </div>
            <?php } ?>
        </div>
        <div class="text-block__footer">
            <div class="text-block__buttons">
                <?php
                if(!empty($buttons)):
                    foreach($buttons as $btn): 
                    $index = array_search($btn, $buttons);
                    $button_style = $index == 0 ? 'contained' : 'outlined';
                    $button_color = $background_is_dark ? 'white' : 'color';
                    ?>
                    <a href="<?= $btn['button']['url']?>" class="button button-default button-<?=$button_style;?>-<?=$button_color;?>"><?= $btn['button']['title']?></a>
                <?php endforeach;
                endif;
                ?>
            </div>
        </div>
    </div>
</section>