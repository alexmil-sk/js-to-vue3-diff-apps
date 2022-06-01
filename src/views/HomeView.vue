<template>
  <div class="container-md d-flex">

    <h1 class="ff_nunito fs-1 fw-bold">Личный сайт студента GeekBrains University</h1>


    <div class="text-center">
      <div class="mb-3">
        <img src="@/img/selfi.png" alt="MyFoto" />
      </div>
      <div class="text-start">
        <h3>Добрый день, меня зовут Алексей!</h3>
          <p class="fs-4">Я - начинающий программист. Cовсем недавно встал на этот путь, но уже успел написать свой первый сайт-портфолио.</p>
        <p class="fs-4">В этом мне помогла учеба на факультете Frontend образовательного IT-портала GeekBrains.</p>
        <p class="fs-4">На этом сайте вы сможете поиграть в игры, а также использовать различные приложение, которые я написал в процессе обучение</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ff_roboto {
  font-family: Roboto, sans-serif;
  font-weight: 100;
}
.ff_nunito {
  font-family: Nunito, sans-serif;
  font-weight: 400;
}
.absolute {
  position: relative;
}
.btnHintAnswer {
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 10;
  cursor: pointer;
}
.btnHintReset {
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 10;
  cursor: pointer;
}
.btn {
  width: 150px!important;
}
</style>
