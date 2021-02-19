<template>
  <div class="all-wrapper menu-side with-pattern">
    <div class="auth-box-w">
      <div class="logo-w">
        <nuxt-link to="/"><img alt="" src="img/logo-big.png"/></nuxt-link>
      </div>
      <h4 class="auth-header">
        Login Form
      </h4>
      <form method="post" @submit.prevent="login" @submit="checkForm">
        <div
          :class="`form-group ${errors.username ? 'has-error has-danger' : ''}`"
        >
          <label for="">Phone Number</label>

          <input
            class="form-control"
            name="username"
            v-model="username"
            placeholder="Enter your Phone Number"
            type="number"
          />
          <Feedback v-if="errors.username" :message="errors.username" />
          <div class="pre-icon os-icon os-icon-phone"></div>
        </div>
        <div
          :class="`form-group ${errors.password ? 'has-error has-danger' : ''}`"
        >
          <label for="">Password</label>
          <input
            class="form-control"
            placeholder="Enter your password"
            type="password"
            name="password"
            data-error="123123123132"
            v-model="password"
          />
          <Feedback v-if="errors.password" :message="errors.password" />
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
        </div>
        <div class="buttons-w">
          <button class="btn btn-primary" type="submit">Log me in</button>
        </div>
      </form>
      <div class="form-control" style="margin-top: 20px">
        <p>
          Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { excuteAllExternalScript } from "~/helpers/index";
import { mapAction } from "vuex";
import Login from "~/components/auth/Login.vue";
import Feedback from "~/components/Feedback";
import mutationTypes from "~/constants/mutationTypes";

export default {
  components: { Login, Notification, Feedback },
  layout: "empty",
  head() {
    return {
      bodyAttrs: {
        class: "auth-wrapper"
      },
      script: [excuteAllExternalScript()]
    };
  },
  data() {
    return {
      errors: {},
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = {};

      if (this.username && this.password) {
        return true;
      }
      if (!this.username) {
        this.errors.username = "Số điện thoại đang để trống";
      } else if (!this.validUsername(this.username)) {
        this.errors.username =
          "Số điện thoại không đúng định dạng, vui lòng kiểm tra lại";
      }
      if (!this.password) {
        this.errors.password = "Mật khẩu đang để trống";
      }

      e.preventDefault();
    },
    validUsername: function(username) {
      var re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      return re.test(username);
    },
    async login() {
      try {
        const res = await this.$store.dispatch(mutationTypes.AUTH.LOGIN, {
          username: this.username,
          password: this.password
        });
        if (res) {
          this.$toast.success("Đăng nhập thành công!");
          this.$router.push("/");
        }else{
         this.$toast.error("Sai tài khoản hoặc mật khẩu !!!");
          }

      } catch (e) {
        this.error = e.response.data.message;
       
      }
    }
  }
};
</script>

<style></style>
