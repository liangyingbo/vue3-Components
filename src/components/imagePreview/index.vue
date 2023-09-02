<template>
  <div class="image-pre">
    <div class="slider" :style="{ width: sliderLen + 'px' , transform: `translateX(-${silderLeft}px)`}">
      <image-container v-for="item of imageData" :key="item.id" :item="item">
      </image-container>
    </div>
    <indicator
      :dir="ARROW.LEFT"
      @handleImageSlide="handleImageSlide"
    ></indicator>
    <indicator
      :dir="ARROW.RIGHT"
      @handleImageSlide="handleImageSlide"
    ></indicator>
    <control-bar
    @rotate-image-handle="rotateImageHandle"
    @scale-image-handle="scaleImageHandle"
    ></control-bar>
  </div>
</template>
<script lang="ts" setup>
import { IImagePre, ARROW, ZOOM } from "./types";
import imageContainer from "./imageContainer.vue";
import indicator from "./indicator.vue";
import controlBar from "./controlBar.vue";
import { useImageSilder, useSilderLeft,useImageData } from "./hooks";

const props = defineProps<{ data: IImagePre[] }>();

const imgLen = props.data.length;
const sliderLen = imgLen * 440;

const { silderIndex, setSilderIndex } = useImageSilder(imgLen);
const handleImageSlide = (dir: ARROW) => {
  imageReset(silderIndex.value)
  setSilderIndex(dir);
};

const silderLeft = useSilderLeft(silderIndex);

// const {imageData,setImageRotate,setImageScale }= useImageData(props.data)
const { imageData,setImageRotate,setImageScale } = useImageData(props.data)

const rotateImageHandle = (dir:ARROW) =>{
   setImageRotate(silderIndex.value,dir)
}

const scaleImageHandle = (zoom:ZOOM) =>{
  setImageScale(silderIndex.value,zoom)
}

const imageReset = (index:number) => {
  const obj = imageData.value[index]
  obj.rotate = 0;
  obj.scale = 1
}

 </script>
<style lang="scss" scoped>
.image-pre {
  width: 440px;
  height: 248px;
  position: relative;
  overflow: hidden;
  .slider {
    height: 248px;
    position: absolute;
    left: 0;
    top: 0;
    transition: transform 0.3s;
  }
}
</style>
