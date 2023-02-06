<template>
  <div>
    <selector :data="options" @change-select="setTargetIndex" />
    <div class="transfer">
      <div class="box left-list">
        <list-title :title="leftTitle"></list-title>
        <list-item left-or-right="left" :data="leftListData" @list-item-click="setCheckedData" @drag-item="setDragedItem"></list-item>
      </div>
      <div class="box btn-group">
        <ButtonGroup
          :button-disabled-left="transferButtonDisabled.left"
          :button-disabled-right="transferButtonDisabled.right"
          @button-click-left="removeRightListData(checkedData.right)"
          @button-click-right="addRightListData(checkedData.left)"
        />
      </div>
      <div class="box right-list" @dragover.prevent @drop="setCheckedData">
        <list-title :title="rightTitle"></list-title>
        <list-item left-or-right="right" :data="rightListData" @list-item-click="setCheckedData"></list-item>
      </div>
    </div>
  </div>
</template>

<script setup>
import Selector from "./components/Selector.vue";
import ListTitle from "./components/ListTitle.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import ListItem from "./components/ListItem.vue";
import propsDefine from "./extends/props";

import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useSetDragedItem
} from "./extends/hooks";

const props = defineProps(propsDefine);
const options = props.data.map(({ title }) => title);

const [targetIndex, setTargetIndex] = useTargetIndex(0);
const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();

const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);

const [dragedItem,setDragedItem] = useSetDragedItem()

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

const setCheckedData = (checked, leftOrRight, item) => {
   checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
};
</script>
<style lang="scss" scoped>
.transfer {
  width: 360px;
  height: 300px;
  display: flex;
  border: 1px solid #666;

  .box {
    width: 120px;
    height: 100%;
  }
}
</style>
