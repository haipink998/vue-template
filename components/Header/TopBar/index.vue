<template>
   <div class="top-bar color-scheme-transparent">
    <!--------------------
    START - Top Menu Controls
    -------------------->
    <div class="top-menu-controls">
      <div class="element-search autosuggest-search-activator">
        <input placeholder="Start typing to search..." type="text">
      </div>
      <!--------------------
      START - User avatar and menu in secondary top menu
      -------------------->
      <div class="logged-user-w">
        <div class="logged-user-i">
          <div class="avatar-w">
            <img alt="" :src="userInfo && userInfo.user_profile.profile_picture">
          </div>
          <div class="logged-user-menu color-style-bright">
            <nuxt-link class="logged-user-avatar-info" to="/profile">
              <div class="avatar-w">
                <img alt="" :src="userInfo && userInfo.user_profile.profile_picture">
              </div>
              <div class="logged-user-info-w">
                <div class="logged-user-name">
                  {{ userInfo && userInfo.last_name}} {{ userInfo && userInfo.first_name}} 
                </div>
                <div class="logged-user-role">
                  Members
                </div>
              </div>
            </nuxt-link>
            <div class="bg-icon">
              <i class="os-icon os-icon-wallet-loaded"></i>
            </div>
            <ul>
              <li>
                <nuxt-link to="/profile"><i class="os-icon os-icon-user-male-circle2"></i><span>Profile Details</span></nuxt-link>
              </li>
              <li>
                <a @click="logout"><i class="os-icon os-icon-signs-11"></i><span>Logout</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--------------------
      END - User avatar and menu in secondary top menu
      -------------------->
    </div>
    <!--------------------
    END - Top Menu Controls
    -------------------->
  </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
   computed: {
    userInfo: function() {
      return this.$store.getters['user/getUserInfo'];
    }
  },
    methods: {
      async logout() {
      const res = await this.$store.dispatch(`auth/${mutationTypes.AUTH.LOGOUT}`);
        this.$router.push('/login');
    },
  },
}
</script>

<style>

</style>