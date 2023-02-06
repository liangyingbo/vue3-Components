<template>
  <div>
    <!-- <jsppui type="error" message="this is a message component!" /> -->
    <button
      @click="
        Message.success({
          message: 'this is SUCCESS text.',
        })
      "
    >
      success
    </button>
    <button
      @click="
        Message.warning({
          message: 'this is WARNING text.',
        })
      "
    >
      warning
    </button>
    <button
      @click="
        Message({
          type: types.MESSAGE,
          message: 'this is MESSAGE text.',
        })
      "
    >
      message
    </button>
    <button
      @click="
        Message({
          type: types.ERROR,
          message: 'this is ERROR text.',
        })
      "
    >
      error
    </button>
  </div>
</template>

<script setup>
import Message, { types } from "../libs/JsppUI/components/Message";
// import jsppui from "../libs/JsppUI/components/Message/Message.vue";
</script>
<style lang="scss" scoped></style>
