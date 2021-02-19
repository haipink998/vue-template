<template>
  <div class="content-i">
    <div class="content-box">
    <div class="card mb-3 d-flex justify-content-start " style="border: 2px solid #ccc;" v-for="list in listNews" :key="list.id">
      <img :src="imageNews" class="card-img-top" alt="... " style="max-width:40%" v-if="imageNews">
      <img src="img/email-header-img.jpg" class="card-img-top" alt="... " style="max-width:40%" v-else>
      <div class="card-body p-2">
      <h5 class="card-title">{{list.title}}</h5>
        <p class="card-text content-edit">{{list.content}}</p>
        <p class="card-text"><small class="text-muted">Last updated at {{list.created_at}}</small></p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {mappGetters} from "vuex";
import mutationTypes from '~/constants/mutationTypes';
import { convertTime, convertDateTime } from "~/helpers/time";

export default {
  mounted() {
    this.$store.dispatch(`news/${mutationTypes.USER.GET_NEWS}`);
  },
  computed: {
    listNews: function(){
      return (this.$store.getters["news/newsList"] || []).map(el => ({
        ...el,
        created_at: el.created_at ? convertTime(el.created_at) : 'Processing',
      }))
    },
    imageNews: function(){
      return (this.$store.getters["news/newsList"]?.attach_file || null)
    }
  }
}
</script>

<style scoped>
.content-edit {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>