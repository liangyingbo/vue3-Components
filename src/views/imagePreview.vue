<template>
<imagePre :data="data"></imagePre>
</template>

<script setup lang="ts">
import imagePre from '../components/imagePreview/index.vue'
const data = [
    {
        id:1,
        image:'/image/1.jpg',
        rotate:0,
        scale:1        
    },
    {
        id:2,
        image:'/image/2.png',
        rotate:0,
        scale:1        
    },
    {
        id:3,
        image:'/image/3.png',
        rotate:0,
        scale:1        
    },
    {
        id:4,
        image:'/image/4.jpg',
        rotate:0,
        scale:1        
    },
    {
        id:5,
        image:'/image/5.jpg',
        rotate:0,
        scale:1        
    }
]
</script>

<style lang="scss" scoped></style>