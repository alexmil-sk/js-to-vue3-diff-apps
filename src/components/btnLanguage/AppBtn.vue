<template>
  <div class="position-absolute top-0 end-0 d-flex flex-column m-4">
    <button type="button" class="btn btn-success m-1" @click="$emit('actionEn')">EN</button>
    <button type="button" class="btn btn-danger m-1" @click="$emit('actionRu')">RU</button>
    <button type="button" class="btn btn-warning m-1" @click="$emit('actionSk')">SK</button>
  </div>
</template>

<script>
export default {
	name: 'AppBtn',
};
</script>

<style scoped lang="css">
</style>