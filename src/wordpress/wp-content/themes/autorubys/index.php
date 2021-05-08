<?php
  if (is_home()) {
    wp_redirect( 'https://autorubys.com/' );
  }

  if (is_singular('catalog')) {
    wp_redirect( 'https://autorubys.com/products/item/'.get_the_ID() );
    exit;
  }

  if (is_single()) {
    wp_redirect( 'https://autorubys.com/news/post/'.get_the_ID() );
  }
  exit;
?>