<?php
    $meta = get_field('block_meta');
    $title = get_field('block_title');
    $subtitle = get_field('block_subtitle');
    $faq_items = get_field('faq_items');


?>

<section class="faq-block">
    <div class="container-post">
        <div class="faq-block__heading heading heading-centered heading-colored">
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
        <div class="faq-block__body">
            <?php if(!empty($faq_items)): ?>
                <div class="faq-block__items">
                    <?php foreach($faq_items as $item): ?>
                        <div class="faq-block__item">
                            <div class="faq-block__question">
                                <div class="b1"><?=$item['question']?></div>
                                <span class="dashicons dashicons-arrow-down-alt2"></span>
                            </div>
                            <div class="faq-block__answer">
                                <div><?=$item['answer']?></div>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            <?php endif;?>
        </div>
        <div class="faq-block__footer">
            
        </div>
    </div>
</section>