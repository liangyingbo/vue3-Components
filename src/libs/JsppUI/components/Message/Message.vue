<template>
  <transition name="jspp-message-fade">
    <div :class="styleCss" v-show="visible" :style="{top:top + 'px'}">
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { reactive, computed, toRefs } from "vue";
import types from "./types";

const state = reactive({
  visible: false,
  top:0
});
const setVisible = (isVisible) => {
  return new Promise((resolve) => {
    state.visible = isVisible;
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

const setTop = (top) =>{
    state.top = top
}

defineExpose({
  setVisible,
  setTop
});
const props = defineProps({
  type: {
    type: String,
    default: types.MESSAGE,
    validator: (value) => {
      return Object.values(types).includes(value);
    },
  },
  message: {
    type: String,
    default: "",
  },
});
const styleCss = computed(() => ["jspp-box", props.type]);

const { visible,top } = toRefs(state);
</script>
<style lang="scss" scoped>
.jspp-box {
  position: relative;
  left: 50%;
  width: 380px;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  margin-left: -190px;
  text-align: center;
  transition: all .5s ease-out;

  &.success {
    background-color: #f0f9eb;
    color: #529b2e;
  }

  &.warning {
    background-color: #fdf6ec;
    color: #b88230;
  }
  &.message {
    background-color: #f4f4f5;
    color: #73767a;
  }
  &.error {
    background-color: #fef0f0;
    color: #c45656;
  }
}
.jspp-message-fade-enter-from,
.jspp-message-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.jspp-message-fade-enter-active {
  transition: all 0.3s ease-in;
}
.jspp-message-fade-leave-active {
  transition: all 0.3s ease-out;
}
</style>
