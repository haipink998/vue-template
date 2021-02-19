<template>
  <div class="form-group">
    <label for="">{{ label }}</label>
    <input
      v-if="!required"
      v-on:input="onChange"
      :v-model="inputValue"
      :type="type"
      :value="inputValue"
      :class="`form-control ${className}`"
      :data-error="messageError"
      :placeholder="placeholder"
      :data-minlength="minLength"
      :name="name"
    />

    <input
      v-else
      v-on:input="onChange"
      :v-model="inputValue"
      :value="inputValue"
      :type="type"
      :class="`form-control ${className}`"
      :data-error="messageError"
      :placeholder="placeholder"
      :data-minlength="minLength"
      :name="name"
      required="required"
    />

    <div
      v-if="feedback"
      class="help-block form-text text-muted form-control-feedback"
    >
      {{ feedback }}
    </div>

    <div
      v-else
      class="help-block form-text with-errors form-control-feedback"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    className: {
      type: String,
      default: ""
    },
    messageError: {
      type: String,
      default: ""
    },
    minLength: {
      type: String,
      default: ""
    },
    feedback: {
      type: String,
      default: ""
    },
    value: {
      type: String | Number,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      inputValue: this.value
    };
  },

  mounted() {
    this.$watch(
      "value",
      value => {
        this.inputValue = value;
      },
      { immediate: true }
    );
  },

  methods: {
    onChange(e) {
      this.inputValue = e.currentTarget.value;
      this.$emit("onChange", this.inputValue);
    }
  }
};
</script>

<style></style>
