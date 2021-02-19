<template>
  <table
    ref="momTable"
    id="dataTable1"
    width="100%"
    class="table table-striped table-lightfont"
  >
    <thead>
      <tr>
        <th><input type="checkbox" /></th>
        <th>Hoạt Động</th>
        <th>Khung giờ</th>
        <th>Ngày</th>
        <th>Lượng sữa</th>
        <th>Ghi chú</th>
        <th>Trạng thái</th>
        <th>Tùy chỉnh</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="diary in diaryList" :key="diary.id">
        <th><input type="checkbox" /></th>
        <th>{{ diary.action_name }}</th>
        <th>{{ diary.start_time_time }} - {{ diary.end_time_time }}</th>
        <th>{{ diary.end_time_day }}</th>
        <th>
          Trái: <b>{{ diary.add_field }}</b> Ml <br />
          Phải: <b>{{ diary.add_field_right }}</b> Ml
        </th>
        <th>{{ diary.note }}</th>
        <th>
          <div
            data-title="Complete"
            data-toggle="tooltip"
            class="status-pill red"
            v-if="diary.status"
          ></div>
          <div
            data-title="Pending"
            data-toggle="tooltip"
            class="status-pill green"
            v-else
          ></div>
        </th>
        <th class="row-actions" v-if="diary.status">
          <button
            data-target=".edit-table-mom"
            data-toggle="modal"
            type="button"
          >
            <i
              class="os-icon os-icon-ui-49"
              title="Edit"
              @click="readTable(diary)"
            ></i>
          </button>
        </th>
        <th class="row-actions" v-else>
          <button
            class="btn btn-danger"
            type="button"
            @click="endAction(diary)"
          >
            Kết thúc
          </button>
        </th>
      </tr>
      <Edit v-if="diarySelected" :diarySelected="diarySelected"/>   
    </tbody>
    <tfoot>
      <th><input type="checkbox" /></th>
      <th>Hoạt Động</th>
      <th>Khung giờ</th>
      <th>Ngày</th>
      <th>Lượng sữa</th>
      <th>Ghi chú</th>
      <th>Trạng thái</th>
      <th>Tùy chỉnh</th>
    </tfoot>
  </table>
</template>

<script>
import Edit from "~/components/Adiary/MomTable/Button/edit";
import moment from "moment";
import { convertTime, convertDateTime } from "~/helpers/time";
import mutationTypes from "~/constants/mutationTypes";
export default {
  data() {
    return {
      end_time: moment().format("YYYY-MM-DDTHH:mm:ss"),
      diarySelected: null,
    };
  },
  components: {Edit},
  methods: {
    moment: function() {
      return moment();
    },
    readTable: function(showDiary) {
      this.diarySelected = showDiary
    },

    async endAction(thisDiary) {
      const nextDiary = { ...thisDiary };
      nextDiary.end_time = convertDateTime(null, "YYYY-MM-DDTHH:mm:ss");

      try {
        const res = await this.$store.dispatch(
          `diary/${mutationTypes.TABLE.END_ACTION}`,
          {
            nextDiary
          }
        );
        if (res) {
          this.$toast.success("Kết thúc hút sữa thành công");
          this.$store.dispatch(`diary/${mutationTypes.USER.GET_DIARY}`);
        } else {
          this.$toast.error("Xảy ra lỗi");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  computed: {
    diaryList: function() {
      return (this.$store.getters["diary/getDiaryList"] || []).map(el => ({
        ...el,
        status: !!el.end_time,
        start_time_time: el.start_time
          ? convertTime(el.start_time)
          : "Processing",
        end_time_time: el.end_time ? convertTime(el.end_time) : "Processing",
        end_time_day: el.end_time ? convertDateTime(el.end_time) : "Processing"
      }));
    },
    userId: function() {
      return this.$store.getters["auth/getIdOfUser"];
    },
    tableRead: function() {
      return this.diarySelected;
    }
  }
};
</script>

<style>
.row-actions button {
  border: none;
}
</style>
