<template>
  <button
      class="btn btn-secondary w-25 ms-2 mr-2"
      style="min-height: 100%; margin-top: 32px"
      :class="isDownloadedChart ? 'bg-danger' : 'bg-success'"
      @click="$emit('downloadChart')"
  >
    <img src="@/img/svg/cloud-download-fill.svg" alt="cloud-download-fill.svg" v-if="isDownloadedChart"/>
    <img src="@/img/svg/cloud-download.svg" alt="cloud-download.svg" v-else/>
  </button>

  <button
      class="btn btn-secondary w-25 ms-2 mr-2"
      style="min-height: 100%; margin-top: 32px"
      :class="isOpenedChart ? 'bg-danger' : 'bg-warning'"
      @click="$emit('openWindowChart')"
  >
    <img src="@/img/svg/zoom-out.svg" alt="zoom-out.svg" v-if="isOpenedChart"/>
    <img src="@/img/svg/zoom-in.svg" alt="zoom-in.svg" v-else/>
  </button>

  <button
      class="btn btn-secondary w-25 ms-2 mr-2"
      style="min-height: 100%; margin-top: 32px;"
      :class="isDownloadedGlass ? 'bg-danger' : 'bg-success'"
      @click="$emit('getTradesGlass')"
  >
    <img src="@/img/svg/cart-dash.svg" alt="cart-dash.svg" v-if="isDownloadedGlass"/>
    <img src="@/img/svg/cart-plus.svg" alt="cart-plus.svg" v-else/>

  </button>
</template>

<script>
export default {
  name: "manual-buttons-comp",
  props: ['isDownloadedChart', 'isOpenedChart', 'isDownloadedGlass'],
  emits: ['downloadChart', 'openWindowChart', 'getTradesGlass']
}
</script>

<style scoped>

</style>
