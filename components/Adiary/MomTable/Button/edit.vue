<template>
  <!-- FORM MODAL -->
  <div
    aria-hidden="true"
    aria-labelledby="mySmallModalLabel"
    class="modal fade bd-example-modal-sm edit-table-mom"
    role="dialog"
    tabindex="-1"
  >
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Chỉnh sửa {{ diary.id }}
          </h5>
          <Button
            :type="'button'"
            aria-label="Close"
            class="close"
            data-dismiss="modal"
          />
          <span aria-hidden="true"> &times;</span>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateAction">
            <div class="form-group row">
              <div class="col">
                <Input
                  :label="'Start Time'"
                  :type="`time`"
                  :required="true"
                  :value="diary.start_time_time"
                  @onChange="diary.start_time_time = $event"
                  :name="'start_time'"
                />
              </div>
              <div class="col">
                <Input
                  :label="`End Time`"
                  :type="`time`"
                  :value="diary.end_time_time"
                  :required="true"
                  @onChange="diary.end_time_time = $event"
                  :name="'end_time'"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col">
                <Input
                  :label="`Vú trái (Ml)`"
                  :placeholder="'0 ML'"
                  :type="`number`"
                  :value="diary.add_field"
                  @onChange="diary.add_field = $event"
                  :name="'add_field'"
                />
              </div>
              <div class="col">
                <Input
                  :label="`Vú phải (Ml)`"
                  :placeholder="'0 ML'"
                  :type="`number`"
                  :value="diary.add_field_right"
                  @onChange="diary.add_field_right = $event"
                  :name="'add_field_right'"
                />
              </div>
            </div>
            <TextArea
              :label="'Ghi chú'"
              :rows="3"
              :value="diary.note"
              @onChange="diary.note = $event"
              :name="'note'"
            />
            {{diary.start_time}} / {{diary.start_time_time}}
            <div class="row justify-content-between">
              <div class="col">
                <Button
                  :label="'Chỉnh sửa'"
                  :type="`submit`"
                  :className="`btn-success`"
                />
              </div>
              <div class="col-4">
                <Button
                  :label="'Close'"
                  :className="'btn-black'"
                  :type="'button'"
                  data-dismiss="modal"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- / -->
</template>

<script>
import {
  convertTime,
  convertDateTime,
  convertTimeAPI,
  parseTimeToCallAPI
} from "~/helpers/time";
import moment from "moment";
import mutationTypes from "~/constants/mutationTypes";
import Input from "~/components/FormField/Input";
import diary from "~/store/diary";

export default {
  components: {
    Input
  },
  props: {
    diarySelected: {
      type: Object,
      default: {}
    }
  },
  data: function() {
    return {
      diary: this.diarySelected || {}
    };
  },
  methods: {
    moment: function() {
      return moment();
    },
    async updateAction() {
      try {
        const startTimeChange = this.diary.start_time_time;
        const startTime = this.diary.start_time;
        const newStartTime = parseTimeToCallAPI(startTimeChange, startTime);
        const endTimeChange = this.diary.end_time_time;
        const endTime = this.diary.end_time;
        const newEndTime = parseTimeToCallAPI(endTimeChange, endTime);
        const res = await this.$store.dispatch(
          `diary/${mutationTypes.TABLE.UPDATE_ACTION}`,
          {
            id: this.diary.id,
            start_time: newStartTime,
            end_time: newEndTime,
            add_field: this.diary.add_field,
            add_field_right: this.diary.add_field_right,
            note: this.diary.note,
            user: this.userId,
            action: this.action
          }
        );
        if (res) {
          this.$store.dispatch(`diary/${mutationTypes.USER.GET_DIARY}`);
          $(".edit-table-mom").modal("hide");
          this.$toast.success("Cập nhật thành công");
        } else {
          this.$store.error("Xảy ra lỗi với cập nhật");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    diarySelected: function(value) {
      console.log({ value }, "diarySelected");
      const clonePropDiary = { ...value };
      clonePropDiary["end_time_time"] = clonePropDiary.end_time
        ? convertTimeAPI(clonePropDiary.end_time)
        : "";
      clonePropDiary["start_time_time"] = clonePropDiary.start_time
        ? convertTime(clonePropDiary.start_time)
        : "";
      this.diary = clonePropDiary;
    }
  },
  computed: {
    userId: function() {
      return this.$store.getters["auth/getIdOfUser"];
    },
    timeStart: function() {
      const time = { ...value };
      time["timeStart"] = time.diary.start_time_time
        ? convertTimeAPI(time.diary.start_time_time)
        : "";
      return timeStart;
    }
  }
};
</script>

<style>
.btn-black {
  background: black;
  color: white;
}
.btn-black:hover {
  background: #414141;
  color: white;
}
</style>
