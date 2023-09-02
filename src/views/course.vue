<template>
  <div class="border">
    <div class="left">
      <course-panel
        v-for="({ name }, key) in data.course"
        :key="key"
        :course-name="name"
        @dragEnd="handleDragEnd"
        :course-key="key"
      ></course-panel>
    </div>
    <div class="right" @dragenter="handleDragEnter" @dragover="handleDragOver">
      <table border="1">
        <tr>
          <th>时间段 / 课程</th>
          <th v-for="(weekday, index) of data.weekday" :key="index">
            {{ weekday }}
          </th>
        </tr>
        <tr v-for="(timeSlot, index) of data.time_slot" :key="index">
          <th>{{ timeSlot }}</th>
          <td v-for="n in 7" :data-weekday="n" :data-timeslot="index">
            <template v-if="cellData[`${n}-${index}`]">
              <course-panel
                :course-name="data.course[cellData[`${n}-${index}`]].name"
                :course-key="cellData[`${n}-${index}`]"
                v-course-panel="{ 
                  cellData,
                  weekday:n,
                  time_slot:index
                }"
              >
              </course-panel>
            </template>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import CoursePanel from "../components/coursePanel.vue";
import vCoursePanel from '../directives/coursePanel.js'
import { ref } from "vue";
const data = {
  weekday: [
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
    "星期日",
  ],
  time_slot: [
    "08:00-08:50",
    "09:00-09:50",
    "10:00-10:50",
    "11:00-11:50",
    "14:00-14:50",
    "15:00-15:50",
    "16:00-16:50",
    "17:00-17:50",
  ],
  course: {
    chinese: {
      name: "语文",
    },
    math: {
      name: "数学",
    },
    english: {
      name: "英语",
    },
  },
};
let celltar = null;
function handleDragEnd(tar) {
  if (celltar) {
    const weekday = celltar.dataset.weekday;
    const timeslot = celltar.dataset.timeslot;
    console.log(weekday, timeslot);
    const val = `${weekday}-${timeslot}`;
    if (!cellData.value[val]) {
      const key = tar.dataset.key;
      cellData.value[val] = key;
    }
  }
}
function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.preventDefault();
  // console.dir(e.target)
  const tar = e.target;
  if (tar.tagName && tar.tagName.toLowerCase() == "td") {
    celltar = tar;
  }
}

const cellData = ref({
  "1-1": "chinese",
  "2-3": "english",
  "3-5": "math",
});

// console.log(cellData)
</script>

<style lang="scss" scoped>
.border {
  position: relative;
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
  }
  .right {
    width: 100%;
    height: 800px;
    padding-left: 300px;
    box-sizing: border-box;

    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      td {
        height: 100px;
      }
    }
  }
}
</style>
