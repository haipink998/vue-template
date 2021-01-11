<template>
<div class="content-box">
  <div class="row">
  <Information />
  <EditProfile />
  </div>
</div>
</template>

<script>
import Information from "./Infomations/index";
import EditProfile from './EditProfile/index';
export default {
  components: { Information, EditProfile },

}
</script>

<style>

</style>