<template>
  <!--stepper-->
  <div id="step-control" class="stepper-panel" :step="step">
    <div class="container stepper-container">
      <div class="step" :class="{ 'complete': step == 1, 'success': step > 1 }">
        <div>
          <div class="circle-container">1</div>
          <div class="circle-complete"><div class="tick">√</div></div>
        </div>
        <div class="title">寄送地址</div>
      </div>
      <div class="connect-line">
        <div class="line"></div>
      </div>
      <div class="step active">
        <div>
          <div class="circle-container">2</div>
          <div class="circle-complete"><div class="tick">√</div></div>
        </div>
        <div class="title">運送方式</div>
      </div>
      <div class="connect-line">
        <div class="line"></div>
      </div>
      <div class="step">
        <div>
          <div
            class="circle-container"
            v-bind:class="{ active: isActive, error: hasError }"
          >
            3
          </div>
          <div class="circle-complete"><div class="tick">√</div></div>
        </div>
        <div class="title">付款方式</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.complete {
  .circle-container {
    display: none;
  }
  .title {
    color: #333333;
  }
}

.active {
  .circle-container {
    border: 1px solid #333333;
    background: #333333;
    color: #fff;
  }
  .title {
    color: #333333;
  }
}

.stepper-panel {
  height: 32px;
}
.stepper-container {
  display: flex;
  justify-content: space-between;
}

.step {
  display: flex;
  align-items: center;
}

.circle-complete {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid #333333;
  background: #333333;
  border-radius: 50%;
}

.tick {
  content: "\25BE";
  font-size: 80%;
  color: #fff;
}

.circle-container {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 1px solid #afb1bd;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  color: #afb1bd;
}

.title {
  margin-left: 10px;
  color: #afb1bd;
}

.connect-line {
  width: 13%;
  height: 32px;
}
.line {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #afb1bd;
}
</style>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>