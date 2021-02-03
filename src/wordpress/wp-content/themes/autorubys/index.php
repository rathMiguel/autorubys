<?php
  if (is_home()) {
    wp_redirect( 'https://autorubys.com/' );
  }
  if (is_single()) {
    if (is_preview()) {
      wp_redirect( 'https://autorubys.com/news/post/preview?id='.get_the_ID() );
    } else {
      wp_redirect( 'https://autorubys.com/news/post/'.get_the_ID() );
    }
  }
  exit;
?>