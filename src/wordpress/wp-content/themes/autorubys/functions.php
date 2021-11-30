<?php
// アイキャッチ画像のサポート
add_theme_support( 'post-thumbnails' );

// 管理画面用のスタイルの挿入
function my_admin_enqueue($hook) {
  wp_enqueue_style( 'my_admin_css', get_template_directory_uri() . '/admin.css' );
  wp_enqueue_script( 'my_admin_script', get_template_directory_uri() . '/admin.js' );
}
add_action( 'admin_enqueue_scripts', 'my_admin_enqueue' );

// カスタム投稿タイプの追加
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

  register_post_type( 'completecar',
    array(
      'supports' => array('title'),
      'labels' => array(
        'name' => __( 'コンプリートカー' ),
        'singular_name' => __( 'コンプリートカー' ),
      ),
      'has_archive' => false,
      'public' => true,
      'show_in_rest' => true,
      'rest_base' => 'completecar',
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

// 不要なメニューの削除

function remove_menus () {
  global $menu;
 
  remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'remove_menus', 99);
 
   function remove_wp_nodes()
{
  global $wp_admin_bar;
 
  $wp_admin_bar->remove_node( 'comments' );
}
add_action('admin_bar_menu', 'remove_wp_nodes', 99);