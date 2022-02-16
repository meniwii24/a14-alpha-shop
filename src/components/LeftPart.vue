<template>
  <div class="form-panel">
    <!-- stepper -->
    <div id="step-control" class="stepper-panel" :step="step">
      <div class="container stepper-container">
        <div class="step" :class="{ current: step == 1, complete: step > 1 }">
          <div>
            <div class="circle-container">1</div>
            <div class="circle-complete"><div class="tick">√</div></div>
          </div>
          <div class="title">寄送地址</div>
        </div>
        <div class="connect-line">
          <div class="line"></div>
        </div>
        <div class="step" :class="{ current: step == 2, complete: step > 2 }">
          <div>
            <div class="circle-container">2</div>
            <div class="circle-complete">
              <div class="tick">√</div>
            </div>
          </div>
          <div class="title">運送方式</div>
        </div>
        <div class="connect-line">
          <div class="line"></div>
        </div>
        <div class="step" :class="{ current: step == 3, complete: step > 3 }">
          <div>
            <div class="circle-container">3</div>
            <div class="circle-complete"><div class="tick">√</div></div>
          </div>
          <div class="title">付款方式</div>
        </div>
      </div>
    </div>
    <!-- form -->
    <div class="form">
      <div class="form-container">
        <form id="a-form">
          <div class="form-content">
            <!--step1 寄送地址-->
            <div class="part" v-show="step === 1">
              <h2 class="mb-2">寄送地址</h2>
              <div class="buyerInfo">
                <div class="form-row buyerGender">
                  <label for="">稱謂</label>
                  <div class="select-wrapper">
                    <select name="a-type" id="a-gender" required>
                      <option value="" selected>先生</option>
                      <option value="">小姐</option>
                    </select>
                  </div>
                </div>
                <div class="form-row buyerName">
                  <label for="">姓名</label>
                  <div>
                    <input type="text" placeholder="請輸入姓名" />
                  </div>
                </div>
                <div class="form-row telephone">
                  <label for="">電話</label>
                  <div>
                    <input type="tel" placeholder="請輸入行動電話" />
                  </div>
                </div>
                <div class="form-row email">
                  <label for="">Email</label>
                  <div>
                    <input type="email" placeholder="請輸入電子郵件" />
                  </div>
                </div>
                <div class="form-row city">
                  <label for="">縣市</label>
                  <div class="select-wrapper">
                    <select name="a-type" id="a-location" required>
                      <option value="" disabled selected>請選擇縣市</option>
                      <option value="">基隆市</option>
                      <option value="">台北市</option>
                      <option value="">新北市</option>
                      <option value="">桃園縣</option>
                      <option value="">新竹市</option>
                      <option value="">新竹縣</option>
                      <option value="">苗栗縣</option>
                      <option value="">台中市</option>
                      <option value="">彰化縣</option>
                      <option value="">南投縣</option>
                      <option value="">雲林縣</option>
                      <option value="">嘉義市</option>
                      <option value="">嘉義縣</option>
                      <option value="">台南市</option>
                      <option value="">高雄市</option>
                      <option value="">屏東縣</option>
                      <option value="">台東縣</option>
                      <option value="">花蓮縣</option>
                      <option value="">宜蘭縣</option>
                      <option value="">澎湖縣</option>
                      <option value="">金門縣</option>
                      <option value="">連江縣</option>
                    </select>
                  </div>
                </div>
                <div class="form-row address">
                  <label for="">地址</label>
                  <div>
                    <input type="text" placeholder="請輸入地址" />
                  </div>
                </div>
              </div>
            </div>
            <!--step2 運送方式-->
            <div class="part" v-show="step === 2">
              <h2 class="mb-2">運送方式</h2>
              <div class="shipping-info">
                <div class="form-row">
                  <div class="shipping-method">
                    <div class="choice">
                      <input name="shipping-method" type="radio" class="raido" @click="deliveryFee = 0" />
                      <label class="way"> 標準運送 <br />約 3~7 個工作天</label>
                    </div>
                    <div>
                      <label class="cost">免費</label>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="shipping-method">
                    <div class="choice">
                      <input name="shipping-method" type="radio" class="raido" @click="deliveryFee = 500"/>
                      <label class="way"> DHL 貨運<br />48 小時內送達</label>
                    </div>
                    <div>
                      <label class="cost">$500</label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <!--step3 付款資訊-->
            <div class="part" v-show="step >= 3">
              <h2 class="mb-2">結帳</h2>
              <div class="credit-card">
                <div class="form-row credit-card-name">
                  <label for="">持卡人姓名</label>
                  <div>
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div class="form-row credit-card-number">
                  <label for="">卡號</label>
                  <div>
                    <input
                      type="number"
                      placeholder=" 1111 2222 3333 4444"
                      maxlength="16"
                    />
                  </div>
                </div>
                <div class="form-row credit-card-date">
                  <label for="">有效期限</label>
                  <div>
                    <input type="tel" placeholder="MM/YY" maxlength="5" />
                  </div>
                </div>
                <div class="form-row credit-card-cvc">
                  <label for="">CVC / CCV</label>
                  <div>
                    <input type="num" placeholder="123" maxlength="3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- 上一步/下一步-->
      <div id="btn-control" class="control-panel">
        <button
          class="btn btn-outline"
          @click="step--"
          :class="{ invisible: step == 1 }"
        >
          ← 上一步
        </button>
        <button class="btn btn-primary">確認下單</button>
        <button class="btn btn-primary" @click="step++" :disabled="step == 4">
          下一步 →
        </button>
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

.current {
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
  padding-right: 2px;
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

.control-panel {
  border-top: 1px solid #f0f0f5;
  padding-top: 16px;
}
form {
  padding-top: 64px;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .buyerInfo {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 2rem;
    .buyerGender {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
    .buyerName {
      grid-column: 3 / 7;
      grid-row: 1 / 2;
    }
    .telephone {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
    }
    .email {
      grid-column: 4 / 7;
      grid-row: 2 / 3;
    }
    .city {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
    .address {
      grid-column: 3 / 7;
      grid-row: 3 / 4;
    }
  }
  .form-row {
    @extend %label-style;
    margin-bottom: 16px;
    > label {
      font-weight: bold;
      font-size: 12px;
      color: #808080;
    }
    input {
      @extend %input-style;
      &[type="radio"] {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        &:checked {
          box-shadow: inset 0 0 0 8px black;
        }
      }
    }
    select {
      @extend %input-style;
      -webkit-appearance: none;
      cursor: pointer;
      width: 100%;
      background-color: transparent;
    }

    .select-wrapper {
      position: relative;
      z-index: inherit 0;
      &::after {
        content: "\25BE";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 17px;
        z-index: -1;
      }
    }
    .shipping-method {
      display: flex;
      justify-content: space-between;
      border: 1px solid #f0f0f5;
      padding: 11px;
      border-radius: 5px;
      &:hover {
        border-color: #2a2a2a;
      }
      .choice {
        display: flex;
        .radio {
          width: 20px;
        }
        .way {
          padding-left: 1rem;
          font-size: 14px;
        }
      }
      .cost {
        font-size: 12px;
        top: 13px;
        right: 20px;
      }
    }
  }
}

.credit-card {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 2rem;
  &-name {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }
  &-number {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
  }
  &-date {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }
  &-cvc {
    grid-column: 4 / 7;
    grid-row: 3 / 4;
  }
}

.control-panel {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.btn {
  font-size: 14px;
  border: 0 solid #000;
  border-radius: 8px;
  background: #fff;
  color: black;
  height: 46px;
  width: 176px;
  padding: 0 38px;

  &.btn-primary {
    position: absolute;
    right: 0px;
    background: #f67599;
    color: white;
  }
  &.btn-outline {
    padding-left: 0;
  }

  &:disabled {
    display: none;
  }

  .done {
    display: block;
  }

  .invisible {
    visibility: hidden;
  }
}
</style>

<script>
export default {
  name: "BuyerInfo",

  data: () => ({
    step: 1,
    deliveryFee: 0,
  }),

  watch:{
    deliveryFee(val){
      this.$emit("delivery-change", val)
    }
  }
}
</script>
