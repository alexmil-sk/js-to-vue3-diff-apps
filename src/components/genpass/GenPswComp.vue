<template>
  <div class="container-md">
    <h1 class="ff_oi">Генератор паролей</h1>
    <div class="w-750">
      <h4 class="mt-5 ff_nunito fw-bolder">В пароле будут использованы:</h4>
        <ul class="ff_jura fs-4">
          <li>буквы латинского алфавита (a-z, A-Z);</li>
          <li>специальные символы (!,@,#,$,%,&,?,-,+,=,~)</li>
          <li>числа (0-9)</li>
        </ul>
      <div class="mt-5 w-50">
        <label
            for="userNum"
            class="form-label fw-bolder ff_nunito fs-5"
        >{{chooseText}}
          <span :style="{display: isDisabledInput ? 'none' : null}" id="guestHint" v-tooltip="'Число должно быть двузначным'">
            <img
                src="@/img/svg/question-circle-fill.svg"
                alt="question-fill"
            />
          </span>
        </label>
        <div class="input-group input-group-default w-100">
          <input
              id="userNum"
              type="number"
              class="form-control ff_roboto"
              width="200px"
              placeholder="Введите двузначное число"
              v-model="userNum"
              v-focus
              @keyup.enter="generatePassword"
              @input="inputChange"
              :disabled="isDisabledInput"
          >
          <button
              class="btn btn-success w-25 text-uppercase fs-5"
              type="button"
              @click="generatePassword"
              :disabled="isDisabledBtnGen"
          >Старт</button>
          <span id="guest" v-tooltip="'Запуск генерации пароля'" class="btnHintStart">
            <img
                src="@/img/svg/question-circle.svg"
                alt="question"
            />
          </span>
          <button
              class="btn btn-danger w-25 text-uppercase fs-5"
              type="button"
              @click="clear"
              :disabled="isDisabledBtnReset"
          >Сброс
          </button>
          <span id="guest" v-tooltip="'Сброс пароля'" class="btnHintReset">
            <img
                src="@/img/svg/question-circle.svg"
                alt="question"
            />
          </span>
        </div>
      </div>
      <p class="fs-4 text-primary">{{passText}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "gen-psw-comp",
  data() {
    return {
      text: '',
      userNum: null,
      passText: '',
      chooseText: 'Выберите количество символов в пароле:',
      isDisabledBtnReset: true,
      isDisabledBtnGen: true,
      isDisabledInput: false,
      isToastShow: true
    }
  },
  computed: {
    ...mapGetters(['numberArray', 'latinArraySmall', 'latinArrayBig', 'specialSymbols', 'sumArray']),
  },
  mounted() {
  },
  methods: {
    getRandomNumber(max) {
      return Math.round(Math.random() * max)
    },

    generateText(array, passLength) {
      for (let i = 0; i < passLength; i++) {
          let n = this.getRandomNumber(array.length - 1);
          this.text += array[n];
      }
      return this.text;
    },

    inputChange(e) {
      this.userNum = e.target.value;
      if (this.userNum <= 99) {
        this.isDisabledBtnGen = false;
        this.isDisabledBtnReset = false;
      } else {
          this.isDisabledBtnGen = true;
      }
    },

    generatePassword() {
      this.chooseText ='Ваш пароль:'
      this.passText = `${this.generateText(this.sumArray, this.userNum)}`;
      this.userNum = null;
      this.isDisabledBtnGen = true;
      this.isDisabledInput = true;
    },

    clear() {
      this.chooseText = 'Выберите количество символов в пароле: ';
      this.passText = '';
      this.isDisabledBtnReset = this.isDisabledBtnGen = true;
      this.isDisabledInput = false;
      this.userNum = null;
      this.text = '';
    }
  },

}
</script>

<style scoped>

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
.btn {
  position: relative;
}
.btnHintReset {
  position: absolute;
  right: 3px;
  top: -4px;
  z-index: 10;
}
.btnHintStart {
  position: absolute;
  right: 154px;
  top: -4px;
  z-index: 10;
}
#guest {
cursor: pointer;
}

</style>
