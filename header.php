<?php
/**
 * Header template.
 *
 * @package Aquila
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php
if ( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
} 
$color_theme_id = get_field('color_theme', 'options')->ID;
$dark_color = get_field('dark_color', $color_theme_id);
$medium_color = get_field('medium_color', $color_theme_id);
$light_color = get_field('light_color', $color_theme_id);
?>
<style>
    :root {
        --dark-color: <?php echo $dark_color ?>;
        --light-color: <?php echo $light_color?>;
        --medium-color: <?php echo $medium_color ?>;
    }
</style>
<div id="page" class="site">
	<header id="masthead" class="site-header" role="banner">
		<div class="container-default">
			<?php get_template_part( 'template-parts/header', 'navigation' ); ?>
		</div>
	</header>
<div id="content" class="site-content">
