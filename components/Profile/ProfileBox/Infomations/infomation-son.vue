<template>
  <div class="user-profile compact mt-3">

        <div class="up-head-w" style="background-image:url(img/profile_bg1.jpg)">
          <div class="up-main-info">
            <h2 class="up-header">
              <span>{{ children.name}}</span>
            </h2>
            <h6 class="up-sub-header">
              Con đẻ
            </h6>
          </div>
          <svg class="decor" width="842px" height="219px" viewBox="0 0 842 219" preserveAspectRatio="xMaxYMax meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-381.000000, -362.000000)" fill="#FFFFFF"><path class="decor-path" d="M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z"></path></g></svg>
        </div>
        <div class="up-controls">
          <div class="row">
            <div class="col-sm-6">
              <div class="value-pair">
                <div class="label">
                  Trạng thái:
                </div>
                <div class="value badge badge-pill badge-success">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="up-contents">
          <div class="m-b">
            <div class="padded">
              <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Tên con:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>{{ children.name}}</span>
                </div>
              </div>
              <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>ID:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>{{ children.id}}</span>
                </div>
              </div>
              <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Giới tính:</span>
                </div>
                <!-- <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span> {{ sonGender}}</span>
                </div> -->
              </div>
               <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Ngày sinh:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>  {{ children.birthday}} </span>
                </div>
              </div>    
               <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Ngày dự sinh:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>  {{ children.edd}} </span>
                </div>
              </div>    
              <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Ghi chú:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>  {{ children.text_note }} </span>
                </div>
              </div>         
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
import { typeActive, typeGender } from "~/constants/index";

export default {
 computed: {
    userInfo: function() {
      return this.$store.getters['user/getUserInfo'];
    },
     userAvatar: function() {
      return this.$store.getters['user/getUserInfo']?.user_profile?.profile_picture || null;
    },
      children: function(){
      const userInfo = this.$store.getters['user/getUserInfo'];
      return userInfo?.user_children?.[0] || {};
    },
    gender: function() {
      const userInfo = this.$store.getters['user/getUserInfo'];
      if (userInfo) {
        const gender = userInfo.user_profile.gender;
        return typeGender[gender];
      } 
      return null; 
    },
    // sonGender: function(){
    //   const userInfo = this.$store.getters['user/getUserInfo'];
    //   if (userInfo){
    //     const gender = userInfo.user_children[0].gender;
    //     return typeGender[gender]
    //   }
    //   return null
    // }
  },
}
</script>

<style>

</style>