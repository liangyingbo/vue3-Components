<template>
<div class="image-container">
  <img  :src="item.image" :style="{transform: `rotate(${item.rotate}deg) scale(${item.scale})` }">
</div>
</template>
<script lang="ts" setup>
import { IImagePre } from './types';

const props = defineProps<{item:IImagePre}>()
console.log(props)
</script>
<style lang="scss" scoped>
.image-container{
  width: 440px;
  height: 248px;
  float: left;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
