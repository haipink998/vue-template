<template>
  <div class="row">
    <Barchart :dataChart="data"/>
    <SmallChart :dataTotal="data"/>
  </div>
</template>

<script>
import Barchart from "./Barchart.vue";
import SmallChart from "./SmallChart.vue";
export default {
  components: { Barchart, SmallChart },
  props: {
    data:{
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>
