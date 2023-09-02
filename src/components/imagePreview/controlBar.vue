<template>
  <div class="controlBar">
    <span :class="['iconfont', `icon-rotate-${ARROW.LEFT}`]"
    @click="rotateImageHandle(ARROW.LEFT)"
    ></span>
    <span :class="['iconfont', `icon-rotate-${ARROW.RIGHT}`]"
    @click="rotateImageHandle(ARROW.RIGHT)"
    ></span>
    <span :class="['iconfont', `icon-zoom-${ZOOM.IN}`]"
    @click="scaleImageHandle(ZOOM.IN)"
    ></span>
    <span :class="['iconfont', `icon-zoom-${ZOOM.OUT}`]"
    @click="scaleImageHandle(ZOOM.OUT)"
    ></span>
  </div>
</template>

<script lang="ts" setup>
import { ARROW, ZOOM } from "./types";

const emit = defineEmits<{
    (e:'rotateImageHandle' ,dir: ARROW): void,
    (e:'scaleImageHandle',zoom:ZOOM)
}>()

function rotateImageHandle(dir:ARROW){
  emit('rotateImageHandle',dir)
}
function scaleImageHandle(zoom:ZOOM){
  emit('scaleImageHandle',zoom)
}
</script>

<style lang="scss" scoped>
.controlBar {
  position: absolute;
  z-index: 1;
  left:50%;
 width: 120px;
 height: 30px;
 margin-left: -60px;
bottom: 30px;
  .iconfont {
    font-size: 33px;
    color: #fff;
    text-shadow: 2px 3px 5px #000;
    cursor: pointer;
    
    &:hover{
        text-shadow: 4px 5px 6px #000;
     }

  }
}
</style>
