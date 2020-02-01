<header id="header">
  <div class="header-top">
    <div class="container">
      <div class="header-top_wrap">
        <div class="header-top_catch">
          <p>車のことならオートルビーズにお任せください</p>
        </div>
        <div class="header-top_tel"><span>TEL：</span><a class="tel" href="tel:0857720727">0857-72-0727</a></div>
      </div>
    </div>
  </div>
  <div class="header-spnav"><a class="tel-sp" href="tel:0857720727"><img src="~/assets/images/icons/467_s_h.svg" alt="株式会社　オートルビーズ" width="32"/></a>
    <div class="menu_btn" id="menu_btn" v-on:click="navToggle()" v-bind:class="(isActive === true) ? 'is-active' : ''"><span></span><span></span><span></span></div>
  </div>
  <div class="header-main">
    <div class="container">
      <div class="header-main_wrap">
        <div class="header-main_logo">
          <a href="/"><img src="~/assets/images/common/logo.svg" alt="株式会社　オートルビーズ" width="300" /></a>
        </div>
        <div class="header-main_nav" v-bind:class="(isActive === true) ? 'is-active' : ''">
          <ul class="header-main_list">
            <li>
              <a href="/service/">サービス案内</a>
            </li>
            <li>
              <a href="/products/">製品情報</a>
            </li>
            <li>
              <a href="/access/">交通アクセス</a>
            </li>
            <li>
              <a href="/company/">会社概要</a>
            </li>
            <li>
              <a href="/contact/">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>