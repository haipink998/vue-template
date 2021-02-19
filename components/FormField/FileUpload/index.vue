<template>
  <div class="form-group">
    <label for="">{{label}}</label>
    <input type="file" class="form-control fileupload" @change="onFileChange" v-if="!image">
    <div v-else>
    <img :src="image" class="imageupload" />
    <button @click="removeImage" class="btn btn-danger">Remove image</button>
    </div>
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
    type: {
      type: String,
      default: "text"
    },
    className: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      image:''
    };
  },

  methods: {
    //  onFileChange(e) {
    //   var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length)
    //     return;
    //   this.createImage(files[0]);
    // },
    // createImage(file) {
    //   var image = new Image();
    //   var reader = new FileReader();
    //   var vm = this;

    //   reader.onload = (e) => {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    // removeImage: function (e) {
    //   this.image = '';
    // }
  }
};
</script>

<style >
.imageupload {
  width: 50%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.fileupload { 
  padding:3px
}
</style>
