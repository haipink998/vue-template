<template>
  <div class="row">
    <Barchart/>
    <SmallChart/>
  </div>
</template>

<script>
import Barchart from './Barchart.vue'
import SmallChart from './SmallChart.vue'
export default {
  components: { Barchart, SmallChart },

}
</script>

<style>

</style>