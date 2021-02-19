<template>
  <div class="element-wrapper">
    <h6 class="element-header">
      Biểu đồ cân nặng
    </h6>
    <div class="element-box">
      <Linechart 
        :label="'asdasd'"
        :data="[13,34,44,35,16,23,74,18,48,39]"
        :dataLabels="['a','b','da','adsad','dasdasd','a','b','da','adsad','dasdasd']"
        :bordercolor="'rgba(1, 116, 188, 0.50)'"
        :pointcolor="'#4b4e81'"
        :bgcolor="'transparent'"
      />
    </div>
  </div>
</template>

<script>
import Linechart from "~/components/Chart/Linechart"
export default {
components: {
  Linechart
}
}
</script>

<style>

</style>