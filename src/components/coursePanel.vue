<template>
  <div class="panel" draggable="true"
  @dragstart="handleDragstart"
  @dragend="handleDragend"
  :data-key="courseKey"
  >
    <h1>{{ courseName }}</h1>
    <span class="btn">x</span>
  </div>
</template>

<script setup>
const props = defineProps({
  courseName: {
    type: String,
    default: "Null",
  },
  courseKey:{
    type:String,
    default:'Null'
  }
});
const emits = defineEmits('dragEnd')
function handleDragend(e){
    const tar = e.target
    tar.style.opacity = '1'
    emits('dragEnd',tar)
}
function handleDragstart(e){
    const tar = e.target
    tar.style.opacity = '.6'
}
</script>

<style lang="scss" scope>
.panel {
  position: relative;
  width: 100px;
  height: 80px;
  background-color: orange;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 10px;
  cursor: move;
  h1 {
    font-size: 21px;
    font-weight: normal;
    text-align: center;
  }
  .btn {
    position: absolute;
    right: 10px;
    top: 0;
    color: #fff;
  }
}
</style>
