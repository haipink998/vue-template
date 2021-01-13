<template>
  <div class="all-wrapper menu-side with-pattern">
    <div class="auth-box-w">
      <div class="logo-w">
        <a href="index.html"><img alt="" src="img/logo-big.png"/></a>
      </div>
      <h4 class="auth-header">
        Login Form
      </h4>
      <Notification :message="error" v-if="error" />
      <form method="post" @submit.prevent="login">
        <div class="form-group">
        <label for="">Phone Number</label>
        <input
          class="form-control"
          name="username"
          v-model="username"
          placeholder="Enter your Phone Number"
          type="number"
        />
        <div class="pre-icon os-icon os-icon-phone"></div>
        </div>
        <div class="form-group">
          <label for="">Password</label
          ><input
            class="form-control"
            placeholder="Enter your password"
            type="password"
            name="password"
            v-model="password"
          />
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
        </div>
        <div class="buttons-w">
          <button class="btn btn-primary" type="submit">Log me in</button>
          <!-- <div class="form-check-inline">
            <label class="form-check-label"
              ><input class="form-check-input" type="checkbox" />Remember
              Me</label
            >
          </div> -->
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
import { mapAction} from "vuex"
import Login from "../../components/auth/Login.vue";
import { excuteAllExternalScript } from "../../helpers/index";
import Notification from "../../components/auth/Notification"
import mutationTypes from '~/constants/mutationTypes';
export default {
  components: { Login, Notification },
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
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
     try {
       const res = await this.$store.dispatch(mutationTypes.AUTH.LOGIN,{username:this.username,password:this.password});
       if (res) {
         this.$router.push('/')
         this.$toast.success('Successfully authenticated')
       }
      } catch (e) {
        this.error = e.response.data.message;
        this.$toast.error('Error while authenticating')
      }
    }
  }
};
</script>

<style></style>
