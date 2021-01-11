<template>
  <div class="content-box">
    <div class="element-wrapper">
      <div class="element-box-tp">
        <h5 class="form-header">
          Son Table
        </h5>
        <div class="form-desc">
          DESC ABC OF SON
        </div>
        <div class="element-box-tp">
          <!-- Button -->
          <Button />
          <!-- Table -->
          <Table />
          <!-- Paganation -->
          <Paganation />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import Table from "./Table";
import Paganation from "./Pagination";
export default {
  components: {
    Button,Table,Paganation
  }
};
</script>

<style></style>
