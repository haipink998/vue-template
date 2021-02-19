<template>
  <div class="form-group">
    <label for=""> {{ label }} </label>
    <select class="form-control" @change="onChange($event)" v-model="selected">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
  },

  data: function() {
    return {
      selected: this.value
    }
  },  

  methods: {
    onChange() {
      this.$emit("onChangeSelect", this.selected);
    }
  }
};
</script>

<style></style>
