<template>
  <div class="content">
    <div class="contentWrap">
      <div class="content">
        <div class="center">
          <h1>Игра "Угадай число" для двух игроков</h1>
          <div class="box" id="gameField">
            <p id="info">Игрок 1 и Игрок 2, угадайте число от 0 до 100.<br>Первым ходит Игрок 1.<br>У каждого по 7
              попыток.</p>
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
  name: "GuessMultComp.vue",
  data() {
    return {
      answer: parseInt(Math.random() * 100),
      tryCount: 0,
      maxTryCount: 14,
      playerNumber: 1
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

    enter(text) {
      document.getElementById("button").innerHTML = text;
    },

    hide(id) {
      document.getElementById(id).style.visibility = "hidden";
    },

    guess() {
      this.tryCount++;
      let userAnswer = readInt();
      enter("Ввод");
      write("Ходит Игрок " + this.playerNumber);
      if (userAnswer == this.answer) {
        write("<strong>Поздравляю, Игрок " + this.playerNumber + "!!! Вы угадали!</strong>");
        hide("button");
        hide("userAnswer");
        hide("quit");
      } else if (this.tryCount == this.maxTryCount) {
        write("К сожалению, попыток больше не осталось.<br>Правильным ответом было число " + answer);
        hide("button");
        hide("userAnswer");
        hide("quit");
      } else if (userAnswer > this.answer) {
        write("Ваше число, Игрок " + this.playerNumber + ", <strong>" + userAnswer +
            "</strong> слишком <strong>большое</strong>.<br>У Игрока " + this.playerNumber + " осталось попыток: " + Math
                .floor((this.maxTryCount - this.tryCount) / 2) + ".<br>Очередь следующего игрока...");
      } else if (userAnswer < this.answer) {
        write("Ваше число, Игрок " + this.playerNumber + ", <strong>" + userAnswer +
            "</strong> слишком <strong>маленькое</strong>.<br>У Игрока " + this.playerNumber + " осталось попыток: " + Math
                .floor((this.maxTryCount - this.tryCount) / 2) + ".<br>Очередь следующего игрока...");
      } else {
        write("Вы <strong>не ввели</strong> число Игрок " + this.playerNumber + "!.<br>У Игрока " + this.playerNumber +
            " осталось попыток: " + Math.floor((this.maxTryCount - this.tryCount) / 2) + "<br>Очередь следующего игрока...");
      }
      if (this.playerNumber == 1)
        this.playerNumber = 2;
      else
        this.playerNumber = 1;
    }
  }
}

</script>

<style scoped>

</style>
