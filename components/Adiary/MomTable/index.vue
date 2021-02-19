<template>
  <div class="content-box">
    <div class="element-wrapper">
      <div class="element-box-tp">
        <h5 class="form-header">
          Mom Table
        </h5>
        <div class="form-desc">
          DESC ABC
        </div>
        <div class="element-box-tp">
          <!-- Button -->
          <Button />
          <!-- Table -->
          <Table />
        
        </div>
      </div>
   
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import Table from "./Table";
import Pagination from "./Pagination"
export default {
  components:{
    Button,Table
  }
};
</script>

<style></style>
