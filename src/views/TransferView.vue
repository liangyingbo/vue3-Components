<template>
  <transfer :data="data" right-title="已选机型"></transfer>
</template>

<script setup>
import { Transfer } from "../libs/JsppUI/components/Transfer";
const data = [
  {
    title: "华为",
    data: [
      { id: 1, phone_name: "Mate50 pro", disabled: false },
      { id: 2, phone_name: "Mate 40", disabled: false },
      { id: 3, phone_name: "P40", disabled: true },
      { id: 4, phone_name: "P50", disabled: false },
    ],
  },
  {
    title: "小米",
    data: [
      { id: 5, phone_name: "mi 13s", disabled: false },
      { id: 6, phone_name: "mi 12", disabled: true },
      { id: 7, phone_name: "redmi note", disabled: true },
      { id: 8, phone_name: "mi xs max", disabled: false },
    ],
  },
  {
    title: "phone",
    data: [
      { id: 9, phone_name: "phone 12", disabled: false },
      { id: 10, phone_name: "phone13 pro", disabled: false },
      { id: 11, phone_name: "phone Xs", disabled: false },
      { id: 12, phone_name: "phone 14", disabled: false },
    ],
  },
];
</script>
<style lang="scss" scoped></style>
