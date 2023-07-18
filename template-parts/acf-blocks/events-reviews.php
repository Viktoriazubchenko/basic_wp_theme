<?php
    $meta = get_field('block_meta');
    $title = get_field('block_title');
    $description = get_field('block_description');
    $review_items = get_field('review_item');
?>

<section class="events-reviews">
    <div class="container-default">
        <div class="events-reviews__heading heading heading-centered heading-colored">
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
                <?php if(!empty($description)){ ?>
                <div class="description sub">
                    <?= $description; ?>
                </div>
                <?php } ?>
        </div>
        <div class="events-reviews__body">
            <?php
                if(!empty($review_items)): ?>
                    <div class="events-reviews__grid">
                        <?php foreach($review_items as $item): 
                        $item['search_url'] = get_post_type_archive_link('events').'?event_type='.$item['event_type']['value'].'&event_format='.$item['event_format']['value'];
                        ?>
                        <div class="events-reviews__item reviewer">
                            <?php if(!empty($item['reviewer_image'])){ ?>
                            <div class="reviewer__image">
                                <?php echo wp_get_attachment_image($item['reviewer_image'], 'reviewer-small', false, array('alt' => $item['reviewer_name'] ) )?>
                                <?php if(!empty($item['reviewer_name'])){ ?>
                                <div class="reviewer__name">
                                    <h3><?= $item['reviewer_name']; ?></h3>
                                </div>
                                <?php } ?>
                            </div>
                            <?php } ?>
                            <?php if(!empty($item['review_text'])){ ?>
                            <div class="reviewer__quote">
                                <blockquote><?= $item['review_text']; ?></blockquote>
                            </div> 
                            <?php } ?>
                            <div class="reviewer__choice">
                                <p><?php echo $item['reviewer_name'] .  __(' prefers ', 'viktoria') . '<span class="b1">' . strtolower($item['event_type']['label']) . '</span>' .  __(' events, that can be attended ', 'viktoria') . '<span class="b1">' .strtolower($item['event_format']['label']). '</span>'.__('. Press the button too see the events of this type!', 'viktoria'); ?></p>
                            </div>
                            <div class="reviewer__button">
                                <a href="<?=$item['search_url']?>" class="button button-default button-contained-color">Press here</a>  
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif;
            ?>
        </div>
    </div>
</section>