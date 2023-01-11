<template>
<div class="container-md">
      <div>
        <h1 class="ff_oi">The game "Guess the riddles"</h1>
        <form @submit.prevent="getAnswers" class="w-50 mt-5 p-3">
            <div class="mt-4">
              <label
                  for="q1"
                  class="form-label fw-bolder ff_nunito fs-4"
                  :class="{'text-danger': wrongAnswer1}"
              >{{riddles.riddle1.quest}}</label>
              <input
                  type="text"
                  v-model="answer1"
                  @input="getAnswer1"
                  class="mt-1 form-control ff_roboto"
                  id="q1"
                  placeholder="Вопрос 1"
                  :disabled="isResult"
                  v-focus
              />
            </div>
            <div class="mt-4">
              <label
                  for="q2"
                  class="form-label fw-bolder ff_nunito fs-4"
                  :class="{'text-danger': wrongAnswer2}"
              >{{riddles.riddle2.quest}}</label>
              <input
                  type="text"
                  v-model="answer2"
                  @input="getAnswer2"
                  class="mt-1 form-control ff_roboto"
                  id="q2"
                  placeholder="Вопрос 2"
                  :disabled="isResult"
              />
            </div>
            <div class="mt-4">
              <label
                  for="q3"
                  class="form-label fw-bolder ff_nunito fs-4"
                  :class="{'text-danger': wrongAnswer3}"
              >{{riddles.riddle3.quest}}</label>
                <input
                    type="text"
                    v-model="answer3"
                    @input="getAnswer3"
                    class="mt-1 form-control ff_roboto"
                    id="q3"
                    placeholder="Вопрос 3"
                    :disabled="isResult"
                />
            </div>
            <div class="mt-4">
              <label
                  for="q4"
                  class="form-label fw-bolder ff_nunito fs-4"
                  :class="{'text-danger': wrongAnswer4}"
              >{{riddles.riddle4.quest}}</label>
                <input
                    type="text"
                    v-model="answer4"
                    @input="getAnswer4"
                    class="mt-1 form-control ff_roboto"
                    id="q4"
                    placeholder="Вопрос 4"
                    :disabled="isResult"
                />
            </div>
              <span class="absolute">
                <button
                    class="btn btn-primary mt-4 fs-6 text-uppercase"
                    type="submit"
                    :disabled="isBtnAnswer"
                >
                <img src="@/img/svg/pencil-square.svg" alt="pencil-square" />
                Answer</button>
                  <span
                    id="guest"
                    v-tooltip="'Проверить правильность ответов'"
                    class="btnHintAnswer"
                  >
                    <img
                      src="@/img/svg/question-circle.svg"
                      alt="question"
                    />
                  </span>
              </span>
              <span class="absolute">
                <button
                    @click="reset"
                    :disabled="isBtnClear"
                    class="btn btn-danger mt-4 ms-2 fs-6 text-uppercase"

                >
                  Clear
                </button>
                <span
                    id="guest"
                    v-tooltip="'Очистить форму'"
                    class="btnHintReset"
                >
                <img
                  src="@/img/svg/question-circle.svg"
                  alt="question"
                />
                </span>
              </span>
          </form>
        <div :style="{display: isResult ? null : 'none'}" v-if="isResult">
          <h3>You answered the number of questions correctly: {{ result }}</h3>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "riddles-comp",
  data() {
    return {
      answers: [],
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      wrongAnswer1: false,
      wrongAnswer2: false,
      wrongAnswer3: false,
      wrongAnswer4: false,
      result: null,
      isResult: false,
      isBtnAnswer: true,
      isBtnClear: true
    }

  },
  computed: {
    ...mapGetters(['riddles'])
  },
  methods: {
    getAnswer1(e) {
      this.answer1 = e.target.value;
      if(this.answer1 !== '') {
        this.isBtnAnswer = false;
        this.isBtnClear = false;
        this.wrongAnswer1 = false;
      }
      if(this.answer1 === this.riddles.riddle1.answer[0] || this.answer1 === this.riddles.riddle1.answer[1]) {
        this.answers.push(this.answer1);
      }
    },
    getAnswer2(e) {
      this.answer2 = e.target.value;
      if(this.answer2 !== '') {
        this.isBtnAnswer = false;
        this.isBtnClear = false;
      }
      if(this.answer2 === this.riddles.riddle2.answer[0] || this.answer2 === this.riddles.riddle2.answer[1]) {
        this.answers.push(this.answer2);
      }
    },
    getAnswer3(e) {
      this.answer3 = e.target.value;
      if(this.answer3 !== '') {
        this.isBtnAnswer = false;
        this.isBtnClear = false;
      }
      if(this.answer3 === this.riddles.riddle3.answer[0] || this.answer3 === this.riddles.riddle3.answer[1]) {
        this.answers.push(this.answer3);
      }
    },
    getAnswer4(e) {
      this.answer4 = e.target.value;
      if(this.answer4 !== '') {
        this.isBtnAnswer = false;
        this.isBtnClear = false;
      }
      if(this.answer4 === this.riddles.riddle4.answer[0] || this.answer4 === this.riddles.riddle4.answer[1]) {
        this.answers.push(this.answer4);
      }
    },
    getAnswers() {
      this.result = this.answers.length;
      this.isResult = true;
      this.isBtnAnswer = true;

      this.wrongAnswer1 = !(this.answer1 === '' || this.answer1 === this.riddles.riddle1.answer[0] || this.answer1 === this.riddles.riddle1.answer[1]);
      this.wrongAnswer2 = !(this.answer2 === '' || this.answer2 === this.riddles.riddle2.answer[0] || this.answer2 === this.riddles.riddle2.answer[1]);
      this.wrongAnswer3 = !(this.answer3 === '' || this.answer3 === this.riddles.riddle3.answer[0] || this.answer3 === this.riddles.riddle3.answer[1]);
      this.wrongAnswer4 = !(this.answer4 === '' || this.answer4 === this.riddles.riddle4.answer[0] || this.answer4 === this.riddles.riddle4.answer[1]);
    },
    reset() {
      this.answers = [];

      this.answer1 = '';
      this.answer2 = '';
      this.answer3 = '';
      this.answer4 = '';

      this.wrongAnswer1 = false;
      this.wrongAnswer2 = false;
      this.wrongAnswer3 = false;
      this.wrongAnswer4 = false;

      this.isResult = false;
      this.isBtnAnswer = true;
      this.isBtnClear = true;
    }
  }
};

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
