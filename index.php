<?php
    get_header();
?>

<div id="primary">
		<main id="main" class="site-main mt-5" role="main">
			<?php
			if ( have_posts() ) :
				?>
				<div class="container">
					<div class="row">
						<?php
						while ( have_posts() ) : the_post();
							the_content();
							get_template_part( 'template-parts/content' );
						endwhile;
						?>
					</div>
				</div>
			<?php

			else :

				get_template_part( 'template-parts/content-none' );

			endif;
			?>
		</main>
</div>


<?php
get_footer();



