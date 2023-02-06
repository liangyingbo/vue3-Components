<template>
  <div
    v-Magnifier
    class="img-wrapper"
    :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
  >
    <a
      :href="link"
      class="mag-wrapper"
      :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
    >
      <img
        class="mag-img"
        :src="url"
        :alt="imgAlt"
        :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
      />
    </a>
    <a class="static-wrapper">
      <img :src="url" :alt="imgAlt" class="static-img" />
    </a>
  </div>
</template>

<script setup lang="ts">
import {magnifier} from '../directives'
const props = defineProps({
  imgWidth: {
    type: Number,
    default: 375,
  },
  imgHeight: {
    type: Number,
    default: 500,
  },
  magWidth: {
    type: Number,
    default: 120,
  },
  magHeight: {
    type: Number,
    default: 120,
  },
  blank: {
    type: Boolean,
    default: true,
  },
  link: String,
  imgAlt: String,
  url: {
    type: String,
    required: true,
  },
});
const vMagnifier = magnifier
</script>
<style lang="scss" scoped>
.img-wrapper {
  margin: 50px auto;
  border: 1px solid #999;
  box-shadow: 0 0 5px #999;
  position: relative;
  .static-img {
    width: 100%;
    height: 100%;
  }

  .mag-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: #fff;
    cursor: move;
    overflow: hidden;
    box-shadow: 0 0 5px #000;
    display: none;
    &.show {
      display: block;
      transform: scale(1.6);
    }

    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
