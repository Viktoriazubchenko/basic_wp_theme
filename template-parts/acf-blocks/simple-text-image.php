<?php
    $meta = get_field('block_meta');
    $title = get_field('block_title');
    $subtitle = get_field('block_subtitle');
    $description = get_field('block_description');
    $image_id = get_field('block_image');
    $style = get_field('block_style');
    $align = get_field('block_align');
    $image = wp_get_attachment_image($image_id, 'square-medium');
    $image_url = wp_get_attachment_image_url($image_id, 'large');
    $buttons = get_field('block_buttons');
?>

<section class="information-block information-block-<?= $style; ?> information-block-<?= $align; ?>">
    <div class="container-default">
        <div class="information-block__wrapper">
            <div class="information-block__info">
                    <div class="heading <?php echo $style == "light" ? "heading-colored" : "" ?>">
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
                    <?php if(!empty($description)){ ?>
                        <div class="information-block__description">
                            <?= $description; ?>
                        </div>
                    <?php } ?>
                    <?php if(!empty($buttons)){ ?>
                        <div class="information-block__buttons">
                            <?php foreach($buttons as $button): 
                                $index = array_search($button, $buttons);
                                $button_style = $index == 0 ? 'contained' : 'outlined';
                                $button_color = $style == 'light' ? 'color' : 'white';
                                ?>
                                <a href="<?= $button['button_link']['url']?>" class="button button-default button-<?=$button_style;?>-<?=$button_color;?>"><?= $button['button_link']['title']?></a>
                            <?php endforeach;
                            ?>
                        </div>
                    <?php } ?>
            </div>
            <div class="information-block__image">
                <?php if(!empty($image)){ ?>
                    <?= $image; ?>
                <?php } ?>  
            </div> 
        </div>
    </div>
</section>

                
            