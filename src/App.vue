<template>
  <div class="container border-box">
    <NavbarComp />
    <div class="height100vh">
    <router-view/>
    </div>
    <FooterComp />
  </div>
</template>
<script>
import NavbarComp from "@/components/app/NavbarComp.vue";
import FooterComp from "@/components/app/FooterComp.vue";

export default {
  name: 'navbar-comp',
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>
<style>
.height100vh {
  min-height: 75vh;
  padding: 1em;
  margin: 1em;
}
.border-box {
  padding: 25px;
  margin: 25px auto;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
