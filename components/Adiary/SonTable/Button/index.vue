<template>
  <div class="controls-above-table">
    <div class="row">
      <div class="col-sm-6">
        <div v-if="timeCheck >= 5 && timeCheck <= 9">
          <button class="btn btn-sm btn-success my-2" type="button">
            Bắt đầu ngày mới
          </button>
        </div>
        <div v-else>
          <button
            class="btn btn-sm btn-success my-2"
            data-target=".modal2"
            data-toggle="modal"
          >
            Bắt đầu
          </button>
        </div>
      </div>
      <div class="col-sm-6">
        <div>
          <form class="form-inline justify-content-sm-end">
            <Select 
              :label="'abc'"
            />
            <select class="form-control form-control-sm rounded bright">
              <option selected="selected">
                Select Status
              </option>
              <option value="Pending">
                Pending
              </option>
              <option value="Active">
                Active
              </option>
              <option value="Cancelled">
                Cancelled
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>

    <!-- FORM MODAL -->
    <div
      id="myModal"
      aria-hidden="true"
      aria-labelledby="mySmallModalLabel"
      class="modal fade bd-example-modal-sm modal2"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Action
              {{ templateList }}
            </h5>
            <button
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden="true"> &times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for=""> Action</label>
                <select class="form-control  bright">
                  <option selected="selected" value="">
                    Select Status
                  </option>
                  <option value="an">
                    Ăn
                  </option>
                  <option value="ngu">
                    Ngủ
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for=""> Time Start</label>
                <input class="form-control" type="time" value="13:45:00" />
              </div>
              <div class="form-group">
                <label for=""> Lượng sữa (Ml)</label>
                <input
                  class="form-control col col-sm-4"
                  placeholder="0 Ml"
                  value="0"
                  type="number"
                />
              </div>
              <div class="form-group">
                <label for=""> Chú ý:</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              data-dismiss="modal"
              type="button"
            >
              Close
            </button>
            <button class="btn btn-success" type="button">Add</button>
          </div>
        </div>
      </div>
    </div>
    <!-- / -->
  </div>
</template>

<script>
import mutationTypes from "~/constants/mutationTypes";
import { currentTime } from "~/helpers/time";
import Select from "~/components/FormField/Select"
export default {
  components: {
    Select
  },
  computed: {
    timeCheck: function(time) {
      const timezone = currentTime(time);
      return timezone;
    },
    templateList: function() {
      const list = this.$store.dispatch(
        `template/${mutationTypes.TEMPLATE.GET_TEMPLATE}`
      );
      return list;
    }
  }
};
</script>

<style></style>
