<?php
$event_id = get_the_id();
$featured_img_url = get_the_post_thumbnail_url($event_id,'large');
?>

<section class="event-hero">
    <div class="container-fluid">
        <div class="event-hero__banner" style="background: url('<?php echo $featured_img_url ?>')"></div>
    </div>
</section>