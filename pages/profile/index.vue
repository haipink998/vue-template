<template>
  <Profile
    :name="123"
    :dob="25/22"
    gender="Test male"
  />
</template>

<script>
import { excuteAllExternalScript } from "../../helpers/index";
import Profile from "../../components/Profile";
export default {
  components: {
    Profile
  },
  head() {
    return {
      bodyAttrs: {
        class:
          "menu-position-side menu-side-left full-screen with-content-panel"
      },
      script: [excuteAllExternalScript()]
    };
  },
  mounted: function() {
  },
  computed: {
    
  }
};
</script>

<style></style>
