import { computed, ref, Ref } from "vue";
import { ARROW, IImagePre, ZOOM } from "./types";

export function useImageSilder(imageLen: number) {
  const silderIndex = ref(0);

  const setSilderIndex = (dir: ARROW) => {
    const index = silderIndex.value;

    switch (dir) {
      case ARROW.RIGHT:
        silderIndex.value = index === imageLen - 1 ? 0 : index + 1;
        break;
      case ARROW.LEFT:
        silderIndex.value = index === 0 ? imageLen - 1 : index - 1;
        break;
      default:
        break;
    }
  };
  return { silderIndex, setSilderIndex };
}

export function useSilderLeft(silderIndex: Ref) {
  const silderLeft = computed(() => silderIndex.value * 440);
  return silderLeft;
}

export function useImageData(images: IImagePre[]) {
  const imageData = ref(images);

  const setImageRotate = (sliderIndex: number, arrow: ARROW) => {
    switch (arrow) {
      case ARROW.LEFT:
            imageData.value[sliderIndex].rotate -= 2
        break;
      case ARROW.RIGHT:
        imageData.value[sliderIndex].rotate += 2
        break;
    }
  };

  const setImageScale = (sliderIndex: number, zoom: ZOOM) => {
    switch (zoom) {
      case ZOOM.IN:
            imageData.value[sliderIndex].scale *= 1.1
        break;
      case ZOOM.OUT:
        imageData.value[sliderIndex].scale *= 0.9
        break;
    }
  };

  return {imageData,setImageRotate,setImageScale}
}
