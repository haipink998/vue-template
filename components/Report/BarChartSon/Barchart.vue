<template>
  <div class="col-sm-8">
    <div class="element-wrapper">
      <h6 class="element-header">
        Biểu đồ lượng sữa ăn bình
      </h6>
      <div class="element-box">
      <Barchart
          :label="'abcd'"
          :dataLabels="parseDataLabel"
          :data="parseData"
          :bgcolor="'#f7c992'"
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
      type: Array,
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
