<template>
  <Report />
</template>

<script>
import { excuteAllExternalScript } from "../../helpers/index";
import Report from "../../components/Report";
export default {
  components: {
    Report
  },
  head() {
    return {
      bodyAttrs: {
        class: "menu-position-side menu-side-left full-screen with-content-panel"
      },
      script: [
        excuteAllExternalScript()
      ]
    };
  }
}
</script>

<style>

</style>