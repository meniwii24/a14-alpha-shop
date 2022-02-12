<template>
  <div class="shopping-cart-card">
    <div class="item-card" v-for="product in productinfo" :key="product.id">
      <div class="item-info">
        <div class="product-img">
          <img :src="product.image" alt="product" class="pd-img" />
        </div>
        <div class="product-info">
          <div class="product-title">
            {{ product.name }}
          </div>
          <div class="count">
            <button @click="handleSub(product)" class="circle">-</button>
            <div class="count-num">{{ product.count }}</div>
            <button @click="handlePlus(product)" class="circle">+</button>
          </div>
        </div>
      </div>
      <div class="pd-price">${{ product.price * product.count }}</div>
    </div>
    
  </div>
</template>

<style scoped>
.shopping-cart-card {
  display: flex;
  flex-direction: column;
  padding: 5px 0;
}

.item-card {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}

.item-info {
  display: flex;
}

.pd-img {
  width: 100px;
}

.product-info {
  padding-left: 1rem;
}

.product-title {
  display: flex;
}

.count {
  display: flex;
  padding: 1rem 0;
  justify-content: flex-end;
}

.circle {
  background: #f0f0f5;
  width: 27px;
  height: 27px;
  border: #f0f0f5;
  border-radius: 50%;
}

.count-num {
  border: 0px;
  width: 53px;
  margin: 0 3px;
  text-align: center;
}

.pd-price {
  font-weight: bold;
  text-align: right;
  font-size: 16px;
}


</style>

<script>
export default {
  props: {
    productinfo: {
      type: Array,
      require: true,
    },
  },

  methods: {
    handlePlus: function (product) {
      console.log(product);
      product.count++;
    },
    handleSub: function (product) {
      console.log(product);
      if (product.count > 1) {
        product.count--;
      }
    },
  },
  
};
</script>
