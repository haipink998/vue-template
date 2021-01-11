<template>
  <div class="content-i">
    <div class="content-box">
      <BarChart />
      <LineChart />
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart';
import LineChart from './LineChart';
export default {
  components: { BarChart,LineChart },

}
</script>

<style>

</style>