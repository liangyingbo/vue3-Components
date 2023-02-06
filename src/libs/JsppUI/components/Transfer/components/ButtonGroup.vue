<template>
  <div class="box btn-group">
    <button :disabled="buttonDisabledLeft" @click="buttonClickLeft">&lt</button>
    <button :disabled="buttonDisabledRight" @click="buttonClickRight">
      &gt
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttonDisabledLeft: {
    type: Boolean,
    default: true,
  },
  buttonDisabledRight: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["buttonClickLeft", "buttonClickRight"]);
const buttonClickLeft = () => {
  emit("buttonClickLeft");
};
const buttonClickRight = () => {
  emit("buttonClickRight");
};
</script>
<style lang="scss" scoped>
.box {
  width: 120px;
  height: 100%;

  &.btn-group {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: none;
      outline: none;
      padding: 8px 15px;
      background: orange;
      color: #fff;
      border-radius: 3px;

      &:disabled {
        opacity: 0.6;
      }
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }

  .item-list {
    display: flex;
    align-items: center;
    height: 32px;

    font-size: 12px;
    &.disabled {
      opacity: 0.6;
    }
  }
}
</style>
