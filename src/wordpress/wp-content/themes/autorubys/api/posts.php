<?php
$post_data = [];
$post_args = [
  'post_type'      => 'post',
  'posts_per_page' => 30,
  'post_status'    => 'publish',
  'orderby'        => 'date',
  'order'          => 'DESC'
];
$post_query = new WP_Query( $post_args );
if ( $post_query->have_posts() ) :
  while ( $post_query->have_posts() ) :
    $post_query->the_post();
    global $post;
    //著者情報
    $author          = get_userdata($post->post_author);
    $author_id       = $author->ID;
    $author_nicename = get_the_author_meta('user_nicename');

    $post_data[] = [
      'id'          => $post->ID,
      'title'       => get_the_title(),
      'content'     => get_the_content(),
      'excerpt'     => get_the_excerpt(),
      'time'        => get_the_time('Y.m.d'),
      'image_src'   => get_the_post_thumbnail_url( get_the_ID(), 'medium' ),
      'author_name' => $author_nicename,
      'link'        => get_the_permalink(),
      'categories'  => get_the_category()
    ];
  endwhile;
  wp_reset_postdata();
endif;

return $post_data;
?>
