<template>
  
    <span :class="['iconfont',`icon-arrow-${dir}`]" @click="arrowClickHandle(dir)"></span>
</template>
<script lang="ts" setup>
import { ARROW } from './types';
defineProps<{dir:ARROW}>()
const emit = defineEmits<{
  (e:'handleImageSlide' ,dir: ARROW): void
}>()
function arrowClickHandle(dir:ARROW){
  emit('handleImageSlide',dir)
}

</script>
<style lang="scss" scoped>
.iconfont{
    position: absolute;
    z-index: 1;
    font-size: 33px;
    top:50%;
    margin-top: -16px;
    transition: all .3s;
    cursor: pointer;

    &.icon-arrow-left{
      left: 5px;
    }
    &.icon-arrow-right{
      right: 5px;
    }

    &:hover{
      text-shadow: 0 0 5px #000;
    }
}
</style>
