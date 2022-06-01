<template>
  <div class="container-fluid  navbar sp-evenly  navbar-dark bg-dark text-info text-center">
    <span class="text-warning text-uppercase fs-5">{{date}}</span>
    <div>
      <span class="text-light fs-5">Copyright ©
      </span>
      <a href="https://geekbrains.ru/" target=" _blank" class="text-uppercase text-decoration-none text-warning ms-3">
        <span>
          <img src="@/img/svg/logo.svg" alt="logo"
          />
        </span>
      </a>
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
