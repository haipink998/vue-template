<template>
    <button :class="`btn ${className}`" :type="type" :rows="rows">{{label}}</button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    rows: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>

</style>