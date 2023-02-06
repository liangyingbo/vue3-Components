<template>
<select @change="changeSelect($event.target.value)">
      <option v-for="(title, index) of data" :value="index" :key="index">
        {{ title }}
      </option>
    </select>

</template>

<script setup >
 const props = defineProps({
    data:{
        type:Array,
        default: () =>[]
    }
 })

 const emit = defineEmits(['changeSelect'])
 const changeSelect = (value) =>{
    emit('changeSelect',value)
 }
</script>
<style lang='scss' scoped>

</style>