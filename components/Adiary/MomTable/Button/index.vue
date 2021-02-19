<template>
  <div class="controls-above-table">
    <div class="row">
      <div class="col-sm-6">
        <button
          class="btn btn-sm btn-success my-2"
          type="button"
          @click="addAction"
        >
          Bắt đầu hút sữa
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Input from "~/components/FormField/Input";
import { optionsAction } from '~/constants';
import mutationTypes from '~/constants/mutationTypes';
export default {
  components: {
    Input
  },
  data() {
    return {
      actionMom: "1",
      start_time: moment().format('YYYY-MM-DDTHH:mm:ss'),
    }
  },
  computed: {
    optionsActionLocal: function() {
      return optionsAction;
    },
    userId: function() {
      return this.$store.getters["auth/getIdOfUser"]
    },
  },
  methods: {
  moment: function () {
    return moment();
  },
 
  async addAction() {
    try {
      const res = await this.$store.dispatch(`diary/${mutationTypes.TABLE.ADD_ACTION}`, {
        action: this.actionMom,
        start_time: this.start_time,
        actual_date: this.start_time,
        user: this.userId,
      }); 
      if(res) {
        this.$toast.success("Tạo hút sữa thành công");
        this.$store.dispatch(`diary/${mutationTypes.USER.GET_DIARY}`);
      }else {
        this.$toast.error("Xảy ra lỗi")
      }
    } catch (error) {
      console.log(error, "wrong")
    }
  }
  },

};
</script>

<style></style>
