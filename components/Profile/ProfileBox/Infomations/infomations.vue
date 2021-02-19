<template>
  <div class="user-profile compact">
        <!-- v-if Avatar -->
        <div class="up-head-w" v-if="userAvatar" :style="{ backgroundImage: `url(${userAvatar})`}">
          <div class="up-main-info" >
            <h2 class="up-header">
              {{ userInfo.last_name}} {{ userInfo.first_name}} 
            </h2>
            <h6 class="up-sub-header">
              Thành viên
            </h6>
          </div>
          <svg class="decor" width="842px" height="219px" viewBox="0 0 842 219" preserveAspectRatio="xMaxYMax meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-381.000000, -362.000000)" fill="#FFFFFF"><path class="decor-path" d="M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z"></path></g></svg>
        </div>
        <!--  -->
        <div class="up-head-w" v-else style="background-image: url(img/avatar1.png)">
          <div class="up-main-info" >
            <h2 class="up-header">
              {{ userInfo.last_name}} {{ userInfo.first_name}} 
            </h2>
            <h6 class="up-sub-header">
              Thành viên
            </h6>
          </div>
          <svg class="decor" width="842px" height="219px" viewBox="0 0 842 219" preserveAspectRatio="xMaxYMax meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-381.000000, -362.000000)" fill="#FFFFFF"><path class="decor-path" d="M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z"></path></g></svg>
        </div>
        <!-- End V-If -->
        <div class="up-controls">
          <div class="row">
            <div class="col-sm-6">
              <div class="value-pair">
                <div class="label">
                  Trạng thái:
                </div>
                <div class="value badge badge-pill badge-success">
                  Hoạt động
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
                    <span>Tên mẹ:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>{{ userInfo.last_name}} {{ userInfo.first_name}}</span>
                </div>
              </div>
               <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Email:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>{{ userInfo.email}} </span>
                </div>
              </div>
               <div class="os-progress-bar primary">
                <div class="bar-labels" style="font-weight:bold">
                    <span>Địa chỉ:</span>
                </div>
                <div class="bar-label" style="border-bottom: 1px solid #ccc;">
                    <span>{{ userInfoUserProfile.address}} </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
import { typeGender } from "~/constants/index";

export default {
 computed: {
    userInfo: function() {
      return this.$store.getters['user/getUserInfo'] || {};
    },
     userAvatar: function() {
      return this.$store.getters['user/getUserInfo']?.user_profile?.profile_picture || null;
    },
    userInfoUserProfile: function() {
    const userInfo = this.$store.getters['user/getUserInfo'];
    return userInfo?.user_profile || {};
    },
  },
}
</script>

<style>

</style>