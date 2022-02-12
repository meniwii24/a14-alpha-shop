<template>
  <div class="stepper">
    <div class="stepper-progress">
      <div class="stepper-progress-bar" :style="'width:' + stepperProgress "></div>
    </div>

    <div class="stepper-item" v-for="buyerInfo in buyerInfo" :key="buyerInfo.step">
      <div class="stepper-item-counter">
        <span class="icon-success">√</span>
        <span class="number">{{ buyerInfo.step }}</span>
      </div>
      <span class="stepper-item-title">{{ buyerInfo.title }}</span>
    </div>

  </div>
</template>

<style lang="scss">
.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 0;

  &-progress {
    position: absolute;
    background-color: #afb1bd;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;

    &-bar {
      position: absolute;
      left: 0;
      height: 100%;
      width: 66%;
      background-color: #333333;
      transition: all 500ms ease;
    }
  }
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #afb1bd;
  transition: all 500ms ease;

  &-counter {
    height: 24px;
    width: 24px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #afb1bd;
    position: relative;

    .icon-success {
      position: absolute;
      left: 15%;
      opacity: 0;
      transform: scale(0);
      transition: all 500ms ease;
    }

    .number {
      font-size: 12px;
      transition: all 500ms ease;
    }
  }

  &-title {
    position: absolute;
    font-size: 16px;
    bottom: -24px;
  }
}

.stepper-item.success {
  .stepper-item-counter {
    border-color: #333333;
    background-color: #333333;
    color: #fff;
    font-size: 16px;

    .icon-success {
      opacity: 1;
      transform: scale(1);
    }

    .number {
      opacity: 0;
      transform: scale(0);
    }
  }

  .stepper-item-title {
    color: #333333;
  }
}

.stepper-item.current {
  .stepper-item-counter {
    border-color: #333333;
    background-color: #333333;
    color: #fff;
    font-size: 16px;
  }

  .stepper-item-title {
    color: #333333;
  }
}

.controls {
  display: flex;
}


</style>

<script>
export default {
  props: {
    buyerInfo: {
      type: Array,
      require: true,
    },
  },
};
</script>