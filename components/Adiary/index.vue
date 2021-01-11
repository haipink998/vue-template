<template>
  <div class="content-i">
    <MomTable />
    <SonTable />
  </div>
</template>

<script>
import MomTable from "./MomTable";
import SonTable from "./SonTable";
export default {
  components: {
    MomTable,
    SonTable
  }

}
</script>

<style lang="scss" scoped>
  .content-i {
    display: flex;
    flex-direction: column;
  }
</style>