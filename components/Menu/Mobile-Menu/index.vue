<template>
    <!--------------------
        START - Mobile Menu
        -------------------->
        <div class="menu-mobile menu-activated-on-click color-scheme-dark">
          <div class="mm-logo-buttons-w">
            <a class="mm-logo" href="index.html"><img src="img/logo.png"><span>Clean Admin</span></a>
            <div class="mm-buttons">
              <div class="content-panel-open">
                <div class="os-icon os-icon-grid-circles"></div>
              </div>
              <div class="mobile-menu-trigger">
                <div class="os-icon os-icon-hamburger-menu-1"></div>
              </div>
            </div>
          </div>
          <div class="menu-and-user">
            <div class="logged-user-w">
              <div class="avatar-w">
                <img alt="" src="img/avatar1.jpg">
              </div>
              <div class="logged-user-info-w">
                <div class="logged-user-name">
                  Maria Gomez
                </div>
                <div class="logged-user-role">
                  Administrator
                </div>
              </div>
            </div>
            <!--------------------
            START - Mobile Menu List
            -------------------->
            <ul class="main-menu">
              <li class="has-sub-menu">
                <a href="#">
                  <div class="icon-w">
                    <div class="os-icon os-icon-layout"></div>
                  </div>
                  <span>Reports</span></a>
                <ul class="sub-menu">
                  <li>
                    <nuxt-link to="/adiary">
                      <span>Adiary</span>
                    </nuxt-link>
                  </li>
                   <li>
                    <nuxt-link to="/report">
                      <span>Chart</span>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="has-sub-menu">
                <a href="#">
                  <div class="icon-w">
                    <div class="os-icon os-icon-layers"></div>
                  </div>
                  <span>More</span></a>
                <ul class="sub-menu">
                  <li>
                    <nuxt-link to="/news">
                      <span>News</span>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="has-sub-menu">
                <a href="#">
                  <div class="icon-w">
                    <div class="os-icon os-icon-package"></div>
                  </div>
                  <span>Infomations</span></a>
                <ul class="sub-menu">
                  <li>
                    <nuxt-link to="/profile">
                      <span>Users</span>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            <!--------------------
            END - Mobile Menu List
            -------------------->
            <div class="mobile-menu-magic">
              <h4>
                Light Admin
              </h4>
              <p>
                Clean Bootstrap 4 Template
              </p>
              <div class="btn-w">
                <a class="btn btn-white btn-rounded" href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin" target="_blank">Purchase Now</a>
              </div>
            </div>
          </div>
        </div>
        <!--------------------
        END - Mobile Menu
        -------------------->
</template>

<script>
export default {

}
</script>

<style>

</style>