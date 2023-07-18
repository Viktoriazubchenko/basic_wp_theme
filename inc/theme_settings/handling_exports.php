<?php
add_filter( 'ai1wm_exclude_themes_from_export',
function ( $exclude_filters ) {
  $exclude_filters[] = 'viktoria/node_modules';
  return $exclude_filters;
} );