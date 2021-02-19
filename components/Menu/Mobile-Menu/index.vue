<template>
    <!--------------------
        START - Mobile Menu
        -------------------->
        <div class="menu-mobile menu-activated-on-click color-scheme-dark">
          <div class="mm-logo-buttons-w">
            <nuxt-link class="mm-logo" to="/">
              <img src="img/logo.png"><span>Clean Admin</span>
            </nuxt-link>
            <div class="mm-buttons">
              <div class="mobile-menu-trigger">
                <div class="os-icon os-icon-hamburger-menu-1"></div>
              </div>
            </div>
          </div>
          <div class="menu-and-user">
            <div class="logged-user-w">
              <div class="avatar-w">
                <img :src="userInfo && userInfo.user_profile.profile_picture">
              </div>
              <div class="logged-user-info-w">
                <div class="logged-user-name">
                  {{ userInfo && userInfo.last_name}} {{ userInfo && userInfo.first_name}} 
                </div>
                <div class="logged-user-role">
                  Member
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
            
          </div>
        </div>
        <!--------------------
        END - Mobile Menu
        -------------------->
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    computed: {
        userInfo: function() {
          return this.$store.getters['user/getUserInfo'];
        }
      },

}
</script>

<style>

</style>