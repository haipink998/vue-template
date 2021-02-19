<template>
  <div class="help-block form-text with-errors form-control-feedback">
    <ul class="list-unstyled">
      <li>{{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
    message: String
  }
};
</script>

<style></style>
