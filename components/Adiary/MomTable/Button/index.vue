<template>
  <div class="controls-above-table">
    <div class="row">
      <div class="col-sm-6">
        <button
          class="btn btn-sm btn-success my-2"
          data-target=".bd-example-modal-sm"
          data-toggle="modal"
          type="button"
        >
          Add
        </button>
        <button class="btn btn-sm btn-danger">Delete</button>
      </div>
      <div class="col-sm-6">
        <form class="form-inline justify-content-sm-end">
          <input
            class="form-control form-control-sm rounded bright"
            placeholder="Search"
            type="text"
          /><select class="form-control form-control-sm rounded bright">
            <option selected="selected" value="">
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
       <!-- FORM MODAL -->
      <div
        aria-hidden="true"
        aria-labelledby="mySmallModalLabel"
        class="modal fade bd-example-modal-sm"
        role="dialog"
        tabindex="-1"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Action
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
                    <option value="hut-sua">
                      Hút sữa
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
export default {

}
</script>

<style>

</style>