<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
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
  <script src="<?php echo get_template_directory_uri() ?>/js/script.js"></script>
</body>
</html>