<template>
  <transition name="jspp-messagebox-fade">
    <div class="ui-message-box" v-show="visible" @click="cancelBtnClick">
      <div class="ui-message-wrapper" @click.stop>
        <div class="message-title-box">
          <h1>{{ title }}</h1>
          <span @click="cancelBtnClick">X</span>
        </div>
        <div class="message-content-box">
          <content-view :field="field"></content-view>
        </div>
        <div class="message-btn-group">
          <button class="btn btn-primary" @click="confirmBtnClick">
            {{ confirmBtnText }}
          </button>
          <button class="btn btn-default" @click="cancelBtnClick">
            {{ cancelBtnText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { h, reactive, toRefs } from "vue";
import { fields } from "./index";
const props = defineProps({
  cancelBtn: {
    type: Boolean,
    default: false,
  },
  cancelBtnText: {
    type: String,
    default: "cancel",
  },
  confirmBtnText: {
    type: String,
    default: "OK",
  },
  title: {
    type: String,
    default: "MessageBox",
  },
  content: {
    type: String,
    default: "This is content text.",
  },
  field: {
    type: String,
    validator: (value) => fields.includes(value),
  },
});
const confirmBtnClick = () => {
  state.type = "confirm";
  setVisible(false);
};

const cancelBtnClick = () => {
  state.type = "cancel";
  setVisible(false);
};

const ContentView = ({ field }) => {
  switch (field) {
    case !field || "confirm":
      return h("p", null, props.content);
    case "prompt":
      return h("input", {
        value: state.promptValue,
        onInput: (e) => (state.promptValue = e.target.value),
        class: "message-prompt-input",
      });
    default:
      return h("p", null, props.content);
  }
};

const state = reactive({
  visible: false,
  type: "confirm",
  promptValue: "",
});

const setVisible = (isVisible) => {
  state.visible = isVisible;
};

defineExpose({
  setVisible,
  state,
});

const { visible } = toRefs(state);
</script>

<style lang="scss" scoped>
.ui-message-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .ui-message-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 420px;
    height: 200px;
    margin: -100px 0 0 -210px;
    background: #fff;
    border-radius: 3px;

    .message-title-box {
      padding: 15px 15px 10px;
      h1 {
        padding: 0;
        margin: 0;
        font-size: 18px;
        display: inline-block;
      }
      span {
        font-size: 12px;
        float: right;
      }
    }

    .message-content-box {
      padding: 10px 15px;
      p {
        margin: 0;
        font-size: 14px;
      }
    }

    .message-btn-group {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 5px 15px 10px;
      width: 100%;
      box-sizing: border-box;

      .btn {
        border: 0;
        outline: 0;
        height: 32px;
        padding: 8px 15px;
        float: right;
        border-radius: 3px;
        line-height: 16px;

        &.btn-default {
          margin-right: 15px;
          border: 1px solid #999;
          color: #666;
          background: #fff;
        }

        &.btn-primary {
          background: #409eff;
          color: #fff;
        }
      }
    }
  }
}

.message-prompt-input {
  outline: 0;
  width: 100%;
  height: 22px;
}

.jspp-messagebox-fade-enter-from,
.jspp-messagebox-fade-leave-to {
  opacity: 0;
}

.jspp-messagebox-fade-enter-active {
  transition: opacity 0.3s ease-in;
}

.jspp-messagebox-fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
