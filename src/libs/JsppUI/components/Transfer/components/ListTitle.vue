<template>
  <div class="list-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
    title:{
        type:String,
        default:'列表'
    }
})
</script>
<style lang="scss" scoped>
 .list-title,
    h1 {
      margin: 0;
      font-weight: normal;
      font-size: 16px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ddd;
      background: #efefef;
    }

</style>
