<template>
  <div class="input-group d-flex flex-column mt-3  mb-3 w-75">
    <label for="coinInput" class="fs-5">Введите пару в формате: BTC-USDT</label>
    <div class="d-flex align-items-end " style="height: 52px;">
      <input
          id="coinInput"
          type="text"
          class="form-control mt-2"
          placeholder="Пользовательская криптовалютная пара"
          v-model="coinInput"
          v-focus
          @keyup.enter.prevent="getCryptoCoin"
          @input="$emit('coinValue',coinInput)"
      />

      <button
          class="btn btn-secondary btn-outline-secondary text-white text-uppercase"
          @click="getCryptoCoin"
      >Подтвердить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-user-coin-comp",
  data() {
    return {
      coinInput: ''
    }
  },
  emits: ['getCryptoCoin', 'coinValue'],
  methods: {
    getCryptoCoin() {
      this.$emit('getCryptoCoin')
      this.coinInput = '';
    }
  }
}
</script>

<style scoped>

</style>
