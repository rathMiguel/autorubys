<?php

add_theme_support( 'post-thumbnails' );

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'catalog',
    array(
      'supports' => array('title', 'editor', 'tag', 'excerpt'),
      'labels' => array(
        'name' => __( '製品カタログ' ),
        'singular_name' => __( '製品カタログ' ),
      ),
      'has_archive' => false,
      'public' => true,
      'show_in_rest' => true,
      'rest_base' => 'products',
      'menu_position' => 5,
      'publicly_queryable' => false
    )
  );
}

register_taxonomy(
  'catalog_category',
  'catalog', 
  array(
    'label' => 'カテゴリ',
    'hierarchical' => true,
    'public' => true,
    'query_var' => true,
    'show_ui' => true,
    'show_in_rest' => true
  )
);