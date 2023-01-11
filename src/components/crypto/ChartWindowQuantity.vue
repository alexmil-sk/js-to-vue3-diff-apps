<template>
  <select
      class="form-select w-25 mt-4 "
      style="margin: 0 auto;"
      aria-label="select example"
      v-model="selectValue"
      @change="$emit('selectChartsQuantity', selectValue)"
  >
    <option selected>{{selectValue}}</option>
    <option
        v-for="item in 20"
				:key="item"
				>
      {{item}}
    </option>

  </select>
</template>

<script>
export default {
  name: "chart-window-quantity",
  emits: ['selectChartsQuantity'],
  data() {
    return {
      selectValue: 'Select the number of graphs',
    }
  }
}

</script>

<style scoped>

</style>
