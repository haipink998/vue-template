<template>
  <div class="content-i">
    <div class="content-box">
      <BarChart :data="chartMom" />
      <BarChartSon :data="chartSon" />
      <LineChart />
    </div>
  </div>
</template>

<script>
import mutationTypes from '~/constants/mutationTypes';
import BarChart from './BarChart';
import LineChart from './LineChart';
export default {
  components: { BarChart , LineChart },
  mounted() {
    this.$store.dispatch(`report/${mutationTypes.CHART.GET_CHART}`)
  },
  computed: {
    chartMom: function() {
      return this.$store.getters["report/getChart"]?.mother_data;
    },
    chartSon: function() {
      return this.$store.getters["report/getChart"]?.children_data;
    }
  }
}

</script>

<style>

</style>