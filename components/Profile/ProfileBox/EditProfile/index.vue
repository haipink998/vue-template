<template>
  <div class="col-sm-7">
    <div class="element-wrapper">
      <div class="element-box">
        <div class="element-info">
          <div class="element-info-with-icon">
            <div class="element-info-icon">
              <div class="os-icon os-icon-grid"></div>
            </div>
            <div class="element-info-text">
              <h5 class="element-inner-header">
                Chỉnh sửa thông tin
              </h5>
              <div class="element-inner-desc">
                Description
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <legend><span>Sửa thông tin Mẹ</span></legend>
        <form @submit.prevent="updateUser">
          <Input
            :type="`email`"
            :label="`Email address`"
            :placeholder="userInfoEdit.email"
            :messageError="`Vui lòng nhập địa chỉ Email`"
            :required="true"
            :value="userInfoEdit.email"
            @onChange="userInfoEdit.email = $event"
          />
          <div class="row">
            <div class="col-sm-6">
              <Input
                :type="'text'"
                :label="'Tên'"
                :placeholder="userInfoEdit.first_name"
                :messageError="'Vui lòng nhập Tên'"
                :required="true"
                :value="userInfoEdit.first_name"
                @onChange="userInfoEdit.first_name = $event"
              />
            </div>
            <div class="col-sm-6">
              <Input
                :type="`text`"
                :label="`Họ`"
                :placeholder="userInfoEdit.last_name"
                :messageError="`Vui lòng nhập Họ`"
                :required="true"
                :value="userInfoEdit.last_name"
                @onChange="userInfoEdit.last_name = $event"
              />
            </div>
          </div>
          <!-- <FileUpload :label="'Thay đổi ảnh đại điện'" :type="'file'" /> -->
          <!-- <Input
            :label="'Select Avatar'"
            :type="'file'"
            @onChangeSelect="image = $event"
          /> -->
          <Input
            :label="'Age'"
            :required="false"
            :value="userInfoUserProfile.age"
            @onChange="userInfoUserProfile.age = $event"
          />
          <TextArea
            :label="'Địa chỉ'"
            :rows="3"
            :required="false"
            :placeholder="address"
            :messageError="'Vui lòng nhập địa chỉ'"
            @onChange="userInfoUserProfile.address = $event"
          />
          <!-- START SON EDIT PROFILE -->
          <legend><span>Sửa thông tin Con</span></legend>
          <Input
            :type="`text`"
            :label="'Tên'"
            :messageError="'Vui lòng nhập Tên'"
            :required="true"
            :value="userInfoUserChildren.name"
            @onChange="userInfoUserChildren.name = $event"
          />
          <Input
            :label="'Ngày sinh'"
            :className="'single-daterange'"
            :type="`text`"
            :required="true"
            :messageError="`Vui lòng ghi rõ ngày tháng`"
            :value="userInfoUserChildren.birthday"
            @onChange="userInfoUserChildren.birthday = $event"
          />
          <Input
            :label="'Ngày dự sinh'"
            :className="'single-daterange'"
            :placeholder="userInfoUserChildren.edd"
            :value="userInfoUserChildren.edd"
            @onChange="userInfoUserChildren.edd = $event"
            :type="`text`"
          />
          <TextArea
            :label="'Ghi chú'"
            :rows="3"
            :value="userInfoUserChildren.text_note"
            @onChange="userInfoUserChildren.text_note = $event"
            :required="false"
          />
          <Button
            :label="'Thay đổi'"
            :type="`submit`"
            :className="'btn-success'"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "~/components/FormField/Input";
import Select from "~/components/FormField/Select";
import TextArea from "~/components/FormField/TextArea";
import Button from "~/components/FormField/Button";
import { optionsGender } from "~/constants/index";
import mutationTypes from "~/constants/mutationTypes";

export default {
  components: {
    Input,
    Select,
    TextArea,
    Button
  },
  props: {
    data: {
      type: Object,
      default: {}
    },
    dataUser: {
      type: Object,
      default: {}
    },
    dataSon: {
      type: Object,
      default: {}
    }
  },
  data: function() {
    return {
      userInfoEdit: this.data || {},
      userInfoUserProfile: this.dataUser || {},
      userInfoUserChildren: this.dataSon || {}
    };
  },
  watch: {
    data: function(value) {
      const cloneData = { ...value };
      this.userInfoEdit = cloneData;
    },
    dataUser: function(value) {
      const cloneDataProfile = { ...value };
      this.userInfoUserProfile = cloneDataProfile;
    },
    dataSon: function(value) {
      const cloneDataProfile = { ...value };
      this.userInfoUserChildren = cloneDataProfile;
    }
  },
  methods: {
    async updateUser() {
      try {
        const res = await this.$store.dispatch(
          `user/${mutationTypes.USER.UPDATE_USER}`,
          {
            id: this.userId,
            email: this.userInfoEdit.email,
            first_name: this.userInfoEdit.first_name,
            last_name: this.userInfoEdit.last_name,
            user_profile: {
              ...this.userInfoUserProfile,
              address: this.address,
              age: this.age
            },
            user_children: { ...this.userInfoUserChildren, name: this.nameSon }
          }
        );
        if (res) {
          this.$toast.success("Cập nhật thành công!");
          setInterval(() => {
              location.reload();
            }, 1000);
        } else {
          this.$toast.error("Xảy ra lỗi cập nhật");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    nameSon: function() {
      return this.userInfoUserChildren.name;
    },
    address: function() {
      return this.userInfoUserProfile.address;
    },
    age: function() {
      return this.userInfoUserProfile.age;
    },
    userId: function() {
      return this.$store.getters["auth/getIdOfUser"];
    },
    optionsGenderLocal: function() {
      return optionsGender;
    }
  }
};
</script>

<style></style>
