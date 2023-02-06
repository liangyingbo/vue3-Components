<template>

<div>
    <Magnifier1
    :linK="state.link"
    :blank="state.blank"
    :imgAlt="state.imgAlt"
    :url="state.url"
    :imgWidth="state.imgWidth"
    :imgHeight="state.imgHeight"
    :magWidth="state.magWidth"
    :magHeight="state.magHeight"
    />
</div>

</template>

 <script setup >
import {reactive} from 'vue'
  // 576
  const state = reactive({
    url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F040221103339%2F210402103339-8-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674541470&t=f9ad450c7d98a68b7dc548248f3b439a',
    blank:true,
    imgAlt:'',
    link:'www.baidu.com',
    imgWidth:375,
    imgHeight:495,
    magWidth:120,
    magHeight:120,
  })
</script>
<style lang='scss' scoped>

</style>