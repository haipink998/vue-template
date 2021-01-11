<template>
  <Adiary />
</template>

<script>
import { excuteAllExternalScript } from "../../helpers/index";
import Adiary from "../../components/Adiary";

export default {
  components: {
    Adiary
  },
  head() {
    return {
      bodyAttrs: {
        class:
          "menu-position-side menu-side-left full-screen with-content-panel"
      },
      // script: [excuteAllExternalScript()]
    };
  }
};
</script>

<style></style>
