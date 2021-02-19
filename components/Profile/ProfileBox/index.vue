<template>
  <div class="content-box">
    <div class="row">
      <Information />
      <EditProfile :data="userInfoEdit" :dataUser="userInfoUserProfile" :dataSon="userInfoUserChildren"/>
    </div>
  </div>
</template>

<script>
import Information from "./Infomations/index";
import EditProfile from "./EditProfile/index";
export default {
  components: { Information, EditProfile },
  computed: {
    userInfoEdit: function() {
      return this.$store.getters["user/getUserInfo"] || {};
    },
    userInfoUserProfile: function() {
      const userInfo = this.$store.getters["user/getUserInfo"];
      return userInfo?.user_profile || {};
    },
    userInfoUserChildren: function() {
      const userInfo = this.$store.getters["user/getUserInfo"];
      return userInfo?.user_children?.[0] || {};
    }
  }
};
</script>

<style></style>
