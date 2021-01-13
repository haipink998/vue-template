<template>
     <div class="all-wrapper menu-side with-pattern">
      <div class="auth-box-w wider">
        <div class="logo-w" style="padding:10%">
          <nuxt-link to="/"><img alt="" src="img/logo-big.png"></nuxt-link>
        </div>
        <h4 class="auth-header">
          Create new account
        </h4>
         <Notification :message="error" v-if="error"/>
        <form method="post" @submit.prevent="register">
           <div class="form-group">
            <label for=""> Phone Number</label>
            <input class="form-control" name="email" v-model="username" placeholder="Enter Your Phone Number" type="number">
            <div class="pre-icon os-icon os-icon-phone"></div>
          </div>
          <div class="form-group">
            <label for=""> Name</label>
            <input class="form-control" name="first_name" v-model="first_name" placeholder="Enter Your Name" type="text">
            <div class="pre-icon os-icon os-icon-user"></div>
          </div>
          <div class="form-group">
            <label for=""> Email address</label>
            <input class="form-control" name="email" v-model="email" placeholder="Enter email" type="email">
            <div class="pre-icon os-icon os-icon-email-2-at2"></div>
          </div>
          <div class="form-group">
            <label for=""> Password</label>
            <input class="form-control" name="password" v-model="password" placeholder="Password" type="password">
            <div class="pre-icon os-icon os-icon-fingerprint"></div>
          </div>
          <!-- <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for=""> Password</label><input class="form-control" placeholder="Password" type="password">
                <div class="pre-icon os-icon os-icon-fingerprint"></div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="">Confirm Password</label><input class="form-control" placeholder="Password" type="password">
              </div>
            </div>
          </div> -->
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


<style>

</style>

<script>
import { mapAction, mapMutations} from "vuex";
import { excuteAllExternalScript } from "../../helpers/index";
import Notification from "../../components/auth/Notification"
import mutationTypes from '~/constants/mutationTypes';
export default {
  layout: "empty",
  head: {
      script: [
        excuteAllExternalScript()
      ]
  },
  // middleware: 'guest',
    components: {
        Notification,
      },

      data() {
        return {
          first_name: '',
          username: '',
          email: '',
          password: '',
          error: null
        }
      },

      methods: {
        async register() {
          try {
            this.$store.dispatch(mutationTypes.AUTH.REGISTER,{first_name:this.first_name,username:this.username,email:this.email,password:this.password});
            this.$toast.success('Success!!!')
              this.$router.push('/login')
          } catch (e) {
            this.error = e.response.data.message
          }
        }
      }
}
</script>

<style>

</style>