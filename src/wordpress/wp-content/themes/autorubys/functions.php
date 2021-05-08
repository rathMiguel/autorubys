<?php
// アイキャッチ画像のサポート
add_theme_support( 'post-thumbnails' );

// 管理画面用のスタイルの挿入
function my_admin_enqueue($hook) {
  wp_enqueue_style( 'my_admin_css', get_template_directory_uri() . '/admin.css' );
  wp_enqueue_script( 'my_admin_script', get_template_directory_uri() . '/admin.js' );
}
add_action( 'admin_enqueue_scripts', 'my_admin_enqueue' );

// 独自エンドポイントの追加
function add_my_endpoints() {
  register_rest_route('custom/v0', '/posts', [
    'callback' => 'fetch_posts_data',
    'permission_callback' => '__return_true',
    'methods'  =>  WP_REST_Server::READABLE
  ]);

  register_rest_route('custom/v0', '/post/(?P<id>\d+)', [
    'callback' => 'fetch_post_data',
    'permission_callback' => '__return_true',
    'methods'  =>  WP_REST_Server::READABLE
  ]);

}
add_action('rest_api_init', 'add_my_endpoints');

// apiデータの取得
function fetch_posts_data($param) {
  return rest_response('posts', $param);
}

function fetch_post_data($param) {
  return rest_response('post', $param);
}

function fetch_post_preview_data($param) {
  return rest_response('post-preview', $param);
}

function rest_response($file_name, $param = null) {
  $api_file = locate_template("api/${file_name}.php");
  $res      = !empty($api_file) ? include_once $api_file : [];
  $response = new WP_REST_Response($res);
  $response->set_status(200);
  return $response;
}

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
      'menu_position' => 5
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