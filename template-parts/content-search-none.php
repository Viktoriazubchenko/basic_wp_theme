<div class="search-result__none">
    <div class="container-default">
        <?php if(is_search()): ?>
            <p class="meta b1">
            <?php echo __("that's odd...", "viktoria")?>
            </p>
            <h1>
            <?php echo __("Couldn't find quite the right match for: ", "viktoria").'<span class="color-font">'.esc_html(get_search_query()).'</span>'; ?>
            </h1>
            <p class="sub">
                <?php echo __("Don't worry, try searching something else.", "viktoria")?>
            </p>
        <?php endif;?>
    </div>
</div>
			