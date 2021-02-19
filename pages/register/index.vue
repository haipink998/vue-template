<template>
  <div class="all-wrapper menu-side with-pattern">
    <div class="auth-box-w wider">
      <div class="logo-w" style="padding:10%">
        <nuxt-link to="/"><img alt="" src="img/logo-big.png"/></nuxt-link>
      </div>
      <h4 class="auth-header">
        Create new account
      </h4>
      <form method="post" @submit.prevent="register" @submit="checkForm">
        <div
          :class="`form-group ${errors.username ? 'has-error has-danger' : ''}`"
        >
          <label for="">Phone Number</label>
          <input
            class="form-control"
            name="username"
            v-model="username"
            placeholder="Enter Your Phone Number"
            type="number"
          />
          <Feedback v-if="errors.username" :message="errors.username" />
          <div class="pre-icon os-icon os-icon-phone"></div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div
            :class="`form-group ${errors.first_name ? 'has-error has-danger' : ''}`"
            >
              <label for="">First Name</label>
              <input
                class="form-control"
                name="first_name"
                v-model="first_name"
                placeholder="First Name"
                type="text"
              />
              <Feedback v-if="errors.first_name" :message="errors.first_name" />
              <div class="pre-icon os-icon os-icon-user"></div>
            </div>
          </div>
          <div class="col-sm-6">
            <div
              :class="`form-group ${errors.last_name ? 'has-error has-danger' : ''}`"
            >
              <label for="">Last Name</label>
              <input
                class="form-control"
                name="last_name"
                v-model="last_name"
                placeholder="Last Name"
                type="text"
              />
              <Feedback v-if="errors.last_name" :message="errors.last_name" />
            </div>
          </div>
        </div>

        <div
          :class="`form-group ${errors.email ? 'has-error has-danger' : ''}`"        
        >
          <label for=""> Email address</label>
          <input
            class="form-control"
            name="email"
            v-model="email"
            placeholder="Enter email"
            type="email"
          />
          <Feedback v-if="errors.email" :message="errors.email" />
          <div class="pre-icon os-icon os-icon-email-2-at2"></div>
        </div>
        <div :class="`form-group ${errors.password ? 'has-error has-danger' : ''}`">
          <label for=""> Password</label>
          <input
            class="form-control"
            name="password"
            v-model="password"
            placeholder="Password"
            type="password"
          />
          <Feedback v-if="errors.password" :message="errors.password" />
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
        </div>
        <div class="buttons-w">
          <button class="btn btn-primary" type="submit">Register Now</button>
        </div>
      </form>
      <div class="form-control" style="margin-top: 20px">
        Already got an account? <nuxt-link to="/login">Login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import { mapAction, mapMutations } from "vuex";
import { excuteAllExternalScript } from "~/helpers/index";
import Feedback from "~/components/Feedback";
import mutationTypes from "~/constants/mutationTypes";
export default {
  layout: "empty",
  head: {
    script: [excuteAllExternalScript()]
  },
  // middleware: 'guest',
  components: {
    Feedback
  },

  data() {
    return {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: {}
    };
  },

  methods: {
    checkForm: function(e) {
    this.errors = {};

    if (this.username && this.first_name && this.last_name && this.email && this.password) {
      return true;
    }
    if (!this.username) {
      this.errors.username = "Số điện thoại không được để trống !";
    } else if (!this.validUsername(this.username)) {
      this.errors.username =
        "Số điện thoại không đúng định dạng, vui lòng kiểm tra lại";
    }
    if (!this.first_name) {
      this.errors.first_name = "Tên không được để trống !"
    }
    if (!this.last_name) {
      this.errors.last_name = "Họ không được để trống !"
    }
    if (!this.email) {
      this.errors.email = "Email không được để trống !"
    }
    
    if (!this.password) {
      this.errors.password = "Mật khẩu không được để trống";
    }

    e.preventDefault();
    },
    validUsername: function(username) {
      var re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      return re.test(username);
    },
  
    async register() {
      try {
        const res = await this.$store.dispatch(mutationTypes.AUTH.REGISTER, {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
          email: this.email,
          password: this.password
        });
        if(res) {
          this.$router.push("/login");
          this.$toast.success("Đăng ký thành công!!!");
        }else {
          this.$toast.error("Đăng ký không thành công, chưa đủ thông tin hoặc tài khoản đã tồn tại !!!");
        }
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    
    //
  }
};
</script>

<style></style>
