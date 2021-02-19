<template>
  <div class="col-sm-8">
    <div class="element-wrapper">
      <h6 class="element-header">
        Biểu đồ hút sữa
        <!-- {{ data && data.mother_data[0].total }}
        {{ data && data.mother_data[0].day }} -->
      </h6>

      <div class="element-box">
        <Barchart
          :label="'ml'"
          :dataLabels="parseDataLabel"
          :data="parseData"
          :bgcolor="'#ffa6a6'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Barchart from "~/components/Chart/Barchart";
import { convertDateTime } from '~/helpers/time';

export default {
  components: {
    Barchart
  },
  props: {
    dataChart: {
      type: Array ,
      default: () => []
    }
  },
  computed: {
    parseDataLabel: function() {
      return this.dataChart.map(el => el.day ? convertDateTime(el.day) : "");
    },
    parseData: function() {
      return this.dataChart.map(el => el.total);
    }
  }
};
</script>

<style></style>
