<template>
  <div class="container-fluid  navbar sp-evenly  navbar-dark bg-dark text-info text-center">
    <span class="text-warning">{{date}}</span>
    <div>
      <a href="https://geekbrains.ru/" target=" _blank" class="text-light text-decoration-none">Copyright ©
      </a>
      <span class="text-uppercase">GeekBrains</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer-comp',
  data() {
    return {
      date: '',
    }
  },
  methods: {
  },
  mounted() {
    setInterval(() => {
      this.date = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'full',
        timeStyle: 'long'
      }).format(new Date())
    }, 1000)

  }
}
</script>

<style scoped>
.sp-evenly {
  justify-content: space-evenly;
}
</style>
