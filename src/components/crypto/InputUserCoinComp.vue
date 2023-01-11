<template>
  <div class="input-group d-flex flex-column mt-3  mb-4 w-75">
    <label for="coinInput" class="fs-5">Enter a crypto pair in the format: BTCUSDT</label>
    <div class="d-flex align-items-end" style="height: 52px;">
      <input
          id="coinInput"
          type="text"
          class="form-control mt-2  position-relative"
          placeholder="Custom cryptocurrency pair"
          v-model="coinInput"
          @keyup.enter.prevent="getCryptoCoin"
          @input="$emit('coinValue',coinInput)"
          :class="{error:
          (v$.coinInput.$dirty && v$.coinInput.required.$invalid) ||
          (v$.coinInput.$dirty && v$.coinInput.alpha.$invalid)
          }"
      />

      <button
          class="btn btn-secondary btn-outline-secondary text-white text-uppercase"
          @click="getCryptoCoin"
      >Confirm
      </button>
    </div>
    <small
        class="text-danger text-uppercase mt-1"
        style="position: absolute; top: 80px;"
        v-if="v$.coinInput.$dirty && v$.coinInput.required.$invalid"
    >The field is not filled in!
    </small>
    <small
        class="text-danger text-uppercase mt-1"
        style="position: absolute; top: 80px;"
        v-if="v$.coinInput.$dirty && v$.coinInput.alpha.$invalid"
    >The field must contain only Latin letters!
    </small>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, alpha } from '@vuelidate/validators'


export default {
  name: "input-user-coin-comp",
  emits: ['getCryptoCoin', 'coinValue'],
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      coinInput: '',
    }
  },
  validations() {
    return {
      coinInput: {required, alpha}
    }
  },
  methods: {
    getCryptoCoin() {
      if (this.v$.$invalid) {
        this.v$.$touch(); //,_Активизирует валидацию
        return;
      }
      this.$emit('getCryptoCoin')
      this.coinInput = '';
    }
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
