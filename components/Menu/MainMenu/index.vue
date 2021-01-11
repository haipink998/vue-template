<template>
  <ul class="main-menu">
            <li class="sub-header">
              <span>Reports</span>
            </li>
            <li class="has-sub-menu">
              <nuxt-link to="/adiary">
                <div class="icon-w">
                  <div class="os-icon os-icon-calendar"></div>
                </div>
                <span>Adiary</span>
              </nuxt-link>
            </li>
            <li class="has-sub-menu">
              <nuxt-link to="/report">
                <div class="icon-w">
                  <div class="os-icon os-icon-list"></div>
                </div>
                <span>Chart</span>
              </nuxt-link>
            </li>
            <!--  -->
            <li class="sub-header">
              <span>More</span>
            </li>
            <li class=" has-sub-menu">
              <nuxt-link to="/news">
                <div class="icon-w">
                  <div class="os-icon os-icon-layout"></div>
                </div>
                <span>News</span>
              </nuxt-link>
            </li>
            <!--  -->
            <li class="sub-header">
              <span>Infomations</span>
            </li>
            <li class="has-sub-menu">
              <nuxt-link to="/profile">
                <div class="icon-w">
                  <div class="os-icon os-icon-users"></div>
                </div>
                <span>Users</span>
              </nuxt-link>
            </li>
          </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>