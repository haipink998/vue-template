<template>
  <div class="logged-user-w avatar-inline">
    <div class="logged-user-i">
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
      <div class="logged-user-toggler-arrow">
        <div class="os-icon os-icon-chevron-down"></div>
      </div>
      <div class="logged-user-menu color-style-bright">
        <div class="logged-user-avatar-info">
          <div class="avatar-w">
            <img alt="" src="img/avatar1.jpg">
          </div>
          <nuxt-link to="/profile">
            <div class="logged-user-info-w">
              <div class="logged-user-name">
              Maria Gomez 
              </div>
              <div class="logged-user-role">
                Administrator
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="bg-icon">
          <i class="os-icon os-icon-wallet-loaded"></i>
        </div>
        <ul>
          <li>
            <a href="#"><i class="os-icon os-icon-mail-01"></i><span>Incoming Mail</span></a>
          </li>
          <li>
            <nuxt-link to="/profile"><i class="os-icon os-icon-user-male-circle2"></i><span>Profile Details</span></nuxt-link>
          </li>
          <li>
            <a href="#"><i class="os-icon os-icon-coins-4"></i><span>Billing Details</span></a>
          </li>
          <li>
            <a href="#"><i class="os-icon os-icon-others-43"></i><span>Notifications</span></a>
          </li>
          <li>
            <a href="#"><i class="os-icon os-icon-signs-11"></i><span>Logout</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>