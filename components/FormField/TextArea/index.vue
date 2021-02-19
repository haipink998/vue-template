<template>
  <div class="form-group">
    <label> {{label}}</label>
    <textarea
      v-if="!required"
      
      :class="`form-control ${className}`"
      :data-error="messageError"
      :rows="rows"
      :v-model="textareaValue"
      v-on:input="onChange"
      :value="textareaValue"
      :name="name"

    >
    </textarea>
     <textarea
      v-else

      :class="`form-control ${className}`"
      :data-error="messageError"
      :rows="rows"
      :v-model="textareaValue"
      v-on:textarea="onChange"
      :value="textareaValue"
      :name="name"

      required="required"
    >
    </textarea>
    <div class="help-block form-text with-errors form-control-feedback"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: ""
    },
    className: {
      type: String,
      default: ""
    },
    messageError: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      textareaValue: this.value
    }
  },
  methods: {
    onChange(e) {
      this.textareaValue = e.target.value;
      this.$emit("onChange", this.textareaValue)
    }
  }
};
</script>

<style></style>
