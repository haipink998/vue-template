<template>
  <table
    id="dataTable1"
    width="100%"
    class="table table-striped table-lightfont"
  >
  {{templateList}}
    <thead>
      <tr>
        <th><input type="checkbox" /></th>
        <th>Hoạt Động</th>
        <th>Khung giờ</th>
        <th>Ngày</th>
        <th>Ghi chú</th>
        <th>Trạng thái</th>
        <th>Tùy chỉnh</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="diary in diaryListSon" :key="diary.id">
        <th><input type="checkbox" /></th>
        <th>{{ diary.action_name }}</th>
        <th>{{ diary.start_time_time }} - {{ diary.end_time_time }}</th>
        <th>{{ diary.end_time_day }}</th>
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
        <th class="row-actions">
          <a href="#"><i class="os-icon os-icon-ui-49" title="Edit"></i></a>
        </th>
      </tr>
    </tbody>
    <tfoot>
      <th><input type="checkbox" /></th>
      <th>Hoạt Động</th>
      <th>Khung giờ</th>
      <th>Ngày</th>
      <th>Ghi chú</th>
      <th>Trạng thái</th>
      <th>Tùy chỉnh</th>
    </tfoot>
  </table>
  
</template>

<script>
import mutationTypes from '~/constants/mutationTypes';
import { convertTime, convertDateTime } from "~/helpers/time";

export default {
  computed: {
    diaryListSon: function() {
      const list = this.$store.getters["diary/diaryListSon"];
      return list.map(el => {
        return {
          ...el,
          status: !!el.end_time,
          start_time_time: el.start_time
            ? convertTime(el.start_time)
            : "Processing",
          end_time_time: el.end_time ? convertTime(el.end_time) : "Processing",
          end_time_day: el.end_time
            ? convertDateTime(el.end_time)
            : "Processing"
        };
      });
    },
    
  }
};
</script>

<style></style>
