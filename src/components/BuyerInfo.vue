<template>
  <div class="form-panel">
    <!-- stepper -->
    <Stepper />
    <!-- form -->
    <Form />
  </div>
</template>

<style>
.form-panel {
  margin: 32px 0;
}
</style>

<script>
// import Navbar from './../components/Navbar.vue'
import Stepper from "./../components/Stepper";
import Form from "./../components/Form";


export default {
  name: "BuyerInfo",
  components: {
    Stepper,
    Form,
  },
}
</script>

