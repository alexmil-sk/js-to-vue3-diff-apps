<template>
  <div class="container-md">
    <div class="contentWrap">
      <div class="content">
        <div class="center">
          <h1 class="ff_oi">Генератор паролей</h1>
          <div class="box" id="gameField">
            <h4 class="mt-5 ff_nunito fw-bolder">В пароле будут использованы:</h4>
              <ul class="ff_jura">
                <li>буквы латинского алфавита (a-z, A-Z);</li>
                <li>специальные символы (!,@,#,$,%,&,?,-,+,=,~)</li>
                <li>числа (0-9)</li>
              </ul>

            <div class="mt-5 width380">
              <label for="userNum" class="form-label fw-bolder ff_nunito">{{chooseText}}</label>
              <div class="input-group input-group-default ">
                <input
                    id="userNum"
                    type="number"
                    class="form-control ff_roboto"
                    width="200px"
                    placeholder="Введите двузначное число"
                    v-model="userNum"
                    v-focus
                    @input="inputChange"
                    :disabled="isDisabledInput"
                >
                <button
                    class="btn btn-success"
                    type="button"
                    @click="generatePassword"
                    :disabled="isDisabledBtnGen"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                    v-tooltip="chooseText"

                >Старт</button>
                <button
                    class="btn btn-danger"
                    type="button"
                    @click="clear"
                    :disabled="isDisabledBtnReset"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                    v-tooltip="chooseText"
                >Сброс</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenPswComp.vue",
  data() {
    return {
      numberArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      latinArraySmall: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'],
      latinArrayBig: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      specialSymbols: ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'],
      //sumArray: [].concat(this.latinArraySmall, this.latinArrayBig, this.specialSymbols, this.numberArray),
      text: '',
      userNum: null,
      chooseText: 'Выберите количество символов в пароле:',
      isDisabledBtnReset: true,
      isDisabledBtnGen: true,
      isDisabledInput: false,
    }
  },
  methods: {
    getRandomNumber(max) {
    return Math.round(Math.random() * max)
    },

    generateText(array, userLength) {
      for (let i = 0; i < userLength; i++) {
    let n = this.getRandomNumber(array.length - 1);
    this.text += array[n];
    }
      return this.text;
    },

    inputChange(e) {
      this.userNum = e.target.value;
      this.isDisabledBtnGen = false;
      this.isDisabledBtnReset = false;
      return this.userNum;
    },

    generatePassword() {
      const sumArray = [].concat(this.latinArraySmall, this.latinArrayBig, this.specialSymbols, this.numberArray);
    if (this.userNum) {
    this.chooseText =`Ваш пароль: ${this.generateText(sumArray, this.userNum)}`;
    } else {
      this.chooseText = "Вы не ввели число! Попробуйте еще раз.";
    }
    this.userNum = null;
      this.isDisabledBtnGen = true;
      this.isDisabledInput = true;
    },

    clear() {
    this.chooseText = 'Выберите количество символов в пароле: ';
    this.isDisabledBtnReset = this.isDisabledBtnGen = true;
    this.isDisabledInput = false;
    this.userNum = null;
    this.text = '';
    }
  },

}
</script>

<style scoped>
.width380 {
  width: 380px;
}
.ff_oi {
  font-family: Oi, sans-serif;
  font-weight: 400;
}
.ff_roboto {
  font-family: Roboto, sans-serif;
  font-weight: 100;
}
.ff_jura {
  font-family: Jura, sans-serif;
  font-weight: 300;
}
.ff_nunito {
  font-family: Nunito, sans-serif;
  font-weight: 400;
}

</style>
