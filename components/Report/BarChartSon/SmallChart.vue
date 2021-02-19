<template>
  <div class="col-sm-4">
    <div class="element-wrapper">
      <h6 class="element-header">
        Thống kê
      </h6>
      <div class="element-box el-tablo">
        <div class="label">
          TỔNG
        </div>
        <div class="value">{{ reduceData }} ml</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataTotal: {
      type: String,
      default: '',
    }
  },
  computed: {
    reduceData: function() {
      return this.dataTotal.reduce((total, ele) => {
        total = total + ele.total;
        return total;
      }, 0);
    }
  }
};
</script>

<style></style>
