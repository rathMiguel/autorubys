<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta property="og:title" content="<?php the_title() ?>" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="<?php the_permalink() ?>" />
  <?php if (has_post_thumbnail()): ?>
    <meta property="og:image" content="<?php echo get_the_post_thumbnail_url( get_the_ID(), 'large' );

 ?>" />
  <?php endif ?>
  <meta property="og:site_name" content="株式会社オートルビーズ" />
  <meta property="og:description" content="<?php echo get_the_excerpt(); ?>" />
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() ?>/css/style.css">
  <title><?php the_title() ?> - 株式会社オートルビーズ</title>
</head>
<body>
  <?php get_header() ?>
    <main role="main">
      <div class="breadcrumb">
        <div class="container">
          <ul class="breadcrumb_list">
            <li><a href="/" class="nuxt-link-active">ホーム</a></li>
            <li><span>ニュース・お知らせ</span>
            </li>
            <li><span><?php echo the_title() ?></span></li>
          </ul>
        </div>
      </div>
      <div class="pagetitle">
        <div class="pagetitle_wrap">
          <h1 class="title">ニュース・お知らせ</h1>
          <span class="title-en">News</span>
        </div>
      </div>
      <div class="page-main access-main">
        <div class="area-accessmap">
          <?php while( have_posts()) : the_post(); ?>
          <div class="container container-single">
            <div class="single-header">
              <h2 class="c-title title-single"><?php the_title() ?></h2><span class="meta-date"><?php the_time('Y.m.d') ?></span></div>
            <div class="single-content">
                <?php if (has_post_thumbnail()): ?>
                  <div class="eyecatch">
                    <?php the_post_thumbnail('large', array( 'alt' => get_the_title())); ?>
                  </div>
                <?php endif ?>
                <?php the_content() ?>
            </div>
          </div>
          <?php endwhile; ?>
        </div>
      </div>
    </main>
  <?php get_footer() ?>
  <script src="<?php echo get_template_directory_uri() ?>/js/vendor.js"></script>
  <script src="<?php echo get_template_directory_uri() ?>/js/script.js"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154422922-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-154422922-1');
  </script>
</body>
</html>