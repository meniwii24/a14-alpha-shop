<template>
  <div class="container">
    <h1>結帳</h1>
    <main>
      <!-- 左側結帳資訊 -->
      <LeftPart v-bind:delivery="delivery" @delivery-change="deliveryFeeChange"/>
      <!-- 右側購物籃 ShoppingCart -->
      <ShoppingCart v-bind:deliveryFee="deliveryFee" />
    </main>
  </div>
</template>

<script>
// import Navbar from './../components/Navbar.vue'
import LeftPart from "./../components/LeftPart";
import ShoppingCart from "./../components/ShoppingCart";

export default {
  name: "ChackoutPage",
  components: {
    LeftPart,
    ShoppingCart,
  },
  data() {
    return {
      deliveryFee: 0,
    };
  },
  created() {
    this.fetchDelivery();
  },
  methods: {
     deliveryFeeChange(newfee) {
      this.deliveryFee = newfee
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 32px;
  margin: 32px 0;
}
main {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 5rem;
}
</style>
