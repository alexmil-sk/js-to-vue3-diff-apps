<template>
  <div class="content">
    <div class="contentWrap">
      <div class="content">
        <div class="center">
          <h1>Игра "Угадай число"</h1>
          <div class="box" id="gameField">
            <p id="info">Угадайте число от 0 до 100 (7 попыток).</p>
            <input type="text" id="userAnswer">
            <br>
            <a href="#" onclick="guess()" id="button">Начать</a>
            <a href="#" onclick="breakGame()" class="breakButton" id="quit">Выйти</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuessNumComp.vue",
  data() {
    return {
      answer: parseInt(Math.random() * 100),
      tryCount: 0,
      maxTryCount: 7,
    }
  },
  methods: {
    breakGame() {
      write("Выход выполнен!<br>Правильным ответом было число " + this.answer);
      hide("button");
      hide("userAnswer");
      hide("quit");
    },

    readInt() {
      let number = document.getElementById("userAnswer").value;
      return parseInt(number);
    },

    write(text) {
      document.getElementById("info").innerHTML = text;
    },

    hide(id) {
      document.getElementById(id).style.visibility = "hidden";
    },

    guess() {
      this.tryCount++;
      let userAnswer = readInt();
      if (userAnswer == this.answer) {
        write("<strong>Поздравляю!!!Вы угадали!</strong>");
        hide("button");
        hide("userAnswer");
        hide("quit");
      } else if (tryCount == maxTryCount) {
        write("К сожалению, попыток больше не осталось.<br>Правильным ответом было число " + answer);
        hide("button");
        hide("userAnswer");
        hide("quit");
      } else if (userAnswer > answer) {
        write("Ваше число <strong>" + userAnswer + "</strong> слишком <strong>большое</strong>.Попробуйте еще раз.");
      } else if (userAnswer < answer) {
        write("Ваше число <strong>" + userAnswer + "</strong> слишком <strong>маленькое</strong>.Попробуйте еще раз.");
      } else {
        write("Вы <strong>не ввели</strong> число!.Попробуйте еще раз.");
      }
    }
  }




}


</script>

<style scoped>

</style>
