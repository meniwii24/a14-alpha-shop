<template>
  <div class="container-shopping-cart">
    <div class="shopping-cart-top">
      <h3>購物籃</h3>
      <!--商品-->
      <CartItems v-bind:productinfo="productinfo" />
    </div>
    <div class="shopping-cart-buttom">
      <!--運費-->
      <div class="other-cost">
        <label>運費</label>
        <label class="other-price" v-show="(deliveryFee === 0)">免費</label>
        <label class="other-price" v-show="(deliveryFee === 500)">$ 500</label>
      </div>
      <!--小計-->
      <div class="other-cost">
        <label>小計</label>
        <label class="other-price"> ${{ total }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import CartItems from "./../components/CartItems";

const dummydata = {
  productinfo: [
    {
      id: 1,
      name: "破壞補丁牛仔褲",
      image: "https://i.imgur.com/Urur13v.png",
      count: 1,
      price: 3999,
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      image: "https://i.imgur.com/mGiavMu.png",
      count: 1,
      price: 1299,
    },
  ],
};

export default {
  name: "ShoppingCart",
  components: {
    CartItems,
  },

  props: {
    deliveryFee: Number,
  },

  data() {
    return {
      productinfo: [],
    };
  },
  created() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      const { productinfo } = dummydata;
      this.productinfo = productinfo;
    },
  },
  computed: {
    // 購物車裡的品項
    productsInCart() {
      return (
        this.productinfo
          // 算出每個產品的小計
          .map((p) => {
            p.sum = p.count * p.price;
            return p;
          })
      );
    },

    // 目前購買的金額
    itemstotal() {
      return this.productsInCart.reduce((sum, p) => sum + p.sum, 0);
    },
    total() {
      return this.itemstotal + this.deliveryFee;
    }
  },
};
</script>


<style scoped>
.container-shopping-cart {
  border: 1px solid #f0f0f5;
  border-radius: 8px;
  padding: 18px 16px;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.other-cost {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f5;
  padding: 16px;
}

.other-price {
  font-weight: bold;
  font-size: 14px;
}
</style>
