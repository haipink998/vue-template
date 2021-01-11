<template>
  <News/>
</template>

<script>
import News from "../../components/News";
import { excuteAllExternalScript } from "../../helpers/index";

export default {
 components: {
   News
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