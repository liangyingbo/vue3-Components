<template>
  <div
    v-for="item of data"
    :key="item.id"
    :class="['item-list', item.disabled ? 'disabled' : '']"
    :draggable="!item.disabled"
    @dragstart="dragedItem(item)"
  >
    <input
      type="checkbox"
      :id="item.id"
      :disabled="item.disabled"
      @click="listItemClick($event.target.checked, leftOrRight, item)"
    />
    <label :for="item.id">{{ item.phone_name }}</label>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator: (value) => ["left", "right"].includes(value),
  },
});

const emit = defineEmits(["listItemClick",'dragedItem']);
const listItemClick = (checked,leftOrRight,item) => {
  emit("listItemClick",checked,leftOrRight,item);
};
const dragedItem = (item) =>{
    emit('dragedItem',item)
}
</script>
<style lang="scss" scoped>
.item-list {
  display: flex;
  align-items: center;
  height: 32px;

  font-size: 12px;
  &.disabled {
    opacity: 0.6;
  }
}
</style>
