<?php

function generate_fieldset_content($field_name, $filter_by) {
    $events_query = new WP_Query([
        'post_type' => 'events',
        'posts_per_page' => -1
    ]);
    $items_array = array();
    while ($events_query->have_posts()) : $events_query->the_post();
        $items_array[] = get_field($field_name, get_the_ID());
    endwhile;
    wp_reset_postdata(); 
    $unique_items_array = array_unique($items_array, SORT_REGULAR);
    usort($unique_items_array, function($a, $b){
        return $a['value'] - $b['value'];
    });
    foreach($unique_items_array as $item): ?>
        <input class="event-filter-check event-<?=$filter_by; ?>-check" type="checkbox" id="<?php echo str_replace(' ', '', strtolower($item['label'])); ?>" name="<?php echo str_replace(' ', '', strtolower($item['label'])); ?>" value="<?php echo str_replace(' ', '', strtolower($item['value'])); ?>"> 
        <label for="<?php echo str_replace(' ', '', strtolower($item['label'])); ?>"><?php echo $item['label']; ?></label></br>
    <?php endforeach; 
}
?>
<div class="hide-sidebar">
    <button class="button button-icon button-contained-color">
        <span class="dashicons dashicons-arrow-left-alt2"></span>
    </button>
</div>
<div class="events-filter-form__wrapper">
    <form id="" class='events-filter-form' action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="POST">
        <fieldset class="upcoming-events">  
            <input class="only-upcoming-check" type="checkbox" id="only-upcoming-check" name="only-upcoming-check" value="only-upcoming-check"> 
            <label for="only-upcoming-check"><p class="r1"><?php echo esc_html('Only upcoming events', 'viktoria')?></p></label>
        </fieldset> 
        <fieldset>  
            <legend class="r1"><?php echo esc_html('Event type', 'viktoria')?></legend>  
            <?php generate_fieldset_content('event_type', 'type');?>
        </fieldset> 
        <fieldset>
            <legend class="r1"><?php echo esc_html('Level of complexity', 'viktoria')?></legend>
            <?php generate_fieldset_content('required_level', 'level');?>
        </fieldset> 
        <fieldset>
            <legend class="r1"><?php echo esc_html('Attendance format', 'viktoria')?></legend>
            <?php generate_fieldset_content('event_format', 'format');?>
        </fieldset> 
    </form> 
</div>
