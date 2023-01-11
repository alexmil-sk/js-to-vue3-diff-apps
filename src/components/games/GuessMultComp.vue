<template>
  <div class="container-md">
    <h1 class="ff_oi">Guess the Number game for two players</h1>
    <div class="w-50">
      <h4 class="mt-5 ff_nunito fw-bolder">Player-1 and Player-2, guess the number from 0 to 100.</h4>
      <p
          class="ff_jura fs-4 mt-5"

      ><span :class="playerNumber === 1 ? 'bg-info' : 'bg-warning'">{{moveText}}</span></p>
      <div class="mt-5 w-50">
        <div class="mt-4">
          <label
              for="userNum"
              class="form-label fw-bolder ff_nunito fs-5"
          >{{chooseText}}
            <span
                id="guestHint"
                :style="{display: isDisabledInput ? 'none' : null}"
                v-tooltip="'The number cannot be less than 0 and more than 100'"
            >
            <img
                src="@/img/svg/question-circle-fill.svg"
                alt="question-fill"
            />
          </span>
          </label>
          <input
              type="number"
              v-model.number="userAnswer"
              @input="getUserAnswer"
              @keyup.enter="getNumber"
              class="mt-1 form-control ff_roboto"
              min="0"
              max="100"
              placeholder="Enter a number"
              :disabled="isDisabledInput"
              v-focus
          />
        </div>
      </div>
      <div>
        <span class="absolute">
          <button
              class="btn btn-primary mt-4 fs-6 text-uppercase"
              @click="getNumber"
              :disabled="isBtnAnswer"
          >
            <img src="@/img/svg/pencil-square.svg" alt="pencil-square" />
          Answer
          </button>
            <span
                id="guest"
                v-tooltip="'Check the correctness of the answer'"
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
              @click="repeat"
              :disabled="isBtnRepeat"
              class="btn btn-success mt-4 ms-2 fs-6 text-uppercase"

          >
            {{userAnswer ? 'Clear' : 'Repeat'}}
          </button>
          <span
              id="guest"
              v-tooltip="'Clear the form / New round'"
              class="btnHintReset"
          >
          <img
              src="@/img/svg/question-circle.svg"
              alt="question"
          />
          </span>
        </span>
        <span class="absolute">
          <button
              @click="breakGame"
              :disabled="isBtnExit"
              class="btn btn-danger mt-4 ms-2 fs-6 text-uppercase"

          >
            Exit
          </button>
          <span
              id="guest"
              v-tooltip="'Find out the correct answer'"
              class="btnHintReset"
          >
          <img
              src="@/img/svg/question-circle.svg"
              alt="question"
          />
          </span>
        </span>
      </div>
      <div class="mt-4" v-if="isDisabledInput || answerText">
        <h4 class="ff_roboto">{{answerText}}</h4>
        <h4 class="ff_roboto">{{finishText}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuessMultComp.vue",
  data() {
    return {
      answer: parseInt((Math.random() * 100).toFixed()),
      userAnswer: null,
      chooseText: '',
      answerText: '',
      finishText: '',
      tryCount: 0,
      maxTryCount: 14,
      playerNumber: 1,
      moveText: 'Player-1 starts first',
      isDisabledInput: false,
      isBtnRepeat: true,
      isBtnAnswer: true,
      isBtnExit: true,
    }
  },
  mounted() {
    this.chooseText = `Everyone has attempts: ( ${Math.floor((this.maxTryCount - this.tryCount) / 2) } ) from ${Math.floor(this.maxTryCount  / 2)  }`;
  },
  methods: {
    getUserAnswer(e) {
      if (parseInt(this.userAnswer) < 0) {
        this.answerText = 'The value cannot be negative!';
        this.isDisabledInput = true;
        this.isBtnAnswer = true;
        this.isBtnExit = false;
        this.isBtnRepeat = true;
      } else if (parseInt(this.userAnswer) > 100) {
        this.answerText = 'The value cannot be more than 100!';
        this.isDisabledInput = true;
        this.isBtnAnswer = true;
        this.isBtnExit = false;
        this.isBtnRepeat = true;
      } else {
        this.userAnswer = e.target.value;
        this.isBtnAnswer = false;
        this.isBtnRepeat = false;
        this.isBtnExit = false;
      }
    },
    repeat() {
      this.userAnswer = null;
      this.answerText = '';
      this.moveText = `Goes first Player-${this.playerNumber = 1}`;
      this.tryCount = 0;
      this.chooseText = `Everyone has attempts: ( ${Math.floor((this.maxTryCount - this.tryCount) / 2) } ) from ${Math.floor(this.maxTryCount  / 2)  }`;
      this.isDisabledInput = false;
      this.isBtnAnswer = true;
      this.isBtnRepeat = true;
      this.isBtnExit = true;

    },
    breakGame() {
      this.chooseText = 'The exit is completed!';
      this.answerText = `The correct answer was a number: ( ${this.answer} )`;
      this.moveText = `Goes first Player-${this.playerNumber = 1}`;
      this.userAnswer = null;
      this.isDisabledInput = true;
      this.isBtnRepeat = false;
      this.isBtnAnswer = true;
      this.isBtnExit = true;
      this.answer = parseInt((Math.random() * 100).toFixed());
    },

   //getNumber() {
   //  if (parseInt(this.userAnswer) === this.answer) {
   //    this.answerText = 'Поздравляю!!! Вы угадали!';
   //    this.isDisabledInput = true;
   //    this.isBtnAnswer = true;
   //    this.isBtnExit = true;
   //    this.answer = parseInt((Math.random() * 100).toFixed());

   //  } else if (this.tryCount - this.maxTryCount === 0) {
   //    this.answerText = `Ваше число ${this.userAnswer}`
   //  } else if (parseInt(this.userAnswer) > this.answer) {
   //    this.answerText = `Ваше число ${this.userAnswer} слишком большое.`;
   //    this.tryCount++;
   //    this.isBtnExit = false;
   //    this.isBtnAnswer = true;
   //    this.isBtnRepeat = true;
   //    this.chooseText = `Вы имеете попыток: ( ${this.maxTryCount - parseInt(this.tryCount)} ) из ${this.maxTryCount}`;
   //  } else if (parseInt(this.userAnswer) < this.answer) {
   //    this.answerText = `Ваше число ( ${this.userAnswer} ) слишком маленькое.`;
   //    this.tryCount++;
   //    this.isBtnExit = false;
   //    this.isBtnAnswer = true;
   //    this.isBtnRepeat = true;
   //    this.chooseText = `Вы имеете попыток: ( ${this.maxTryCount - parseInt(this.tryCount)} ) из ${this.maxTryCount}`
   //  }
   //  this.userAnswer = null;
   //},



  getNumber() {
    this.tryCount++;
    if (parseInt(this.userAnswer) === this.answer) {
      this.answerText = `Congratulations, Player-( ${this.playerNumber} ) !!! You guessed it!`;
          this.isDisabledInput = true;
          this.isBtnAnswer = true;
          this.isBtnExit = true;
          this.answer = parseInt((Math.random() * 100).toFixed());

    } else if (this.tryCount - this.maxTryCount === 0) {
      this.answerText = `Your number, Player-${this.playerNumber}, ( ${this.userAnswer} )`;

    } else if (parseInt(this.userAnswer) > this.answer) {
      this.answerText = `Your number, Player-${this.playerNumber}, ( ${this.userAnswer} ), too big. It's the next player's turn...`;
          this.isBtnExit = false;
          this.isBtnAnswer = true;
          this.isBtnRepeat = true;

      this.chooseText = `Player-${this.playerNumber} attempts: ( ${Math.floor((this.maxTryCount - this.tryCount) / 2) } ) from ( ${Math.floor(this.maxTryCount / 2) } )`;

    } else if (parseInt(this.userAnswer) < this.answer) {
      this.answerText = `Your number, Player-${this.playerNumber}, ( ${this.userAnswer} ) too small. It's the next player's turn...`;
          this.isBtnExit = false;
          this.isBtnAnswer = true;
          this.isBtnRepeat = true;

      this.chooseText = `Player-${this.playerNumber} attempts: ( ${Math.floor((this.maxTryCount - this.tryCount) / 2) } ) from ( ${Math.floor(this.maxTryCount / 2) } )`;
    }
      this.userAnswer = null;

    if (this.playerNumber === 1) {
      this.playerNumber = 2;
    } else {
      this.playerNumber = 1;
    }

    this.moveText = "The next move is yours: Player-" + this.playerNumber;
  },


  },


    watch: {
      tryCount() {
        // if(this.tryCount - this.maxTryCount === 0) {
        if((this.maxTryCount - this.tryCount) / 2 === 0) {
          this.finishText = `Unfortunately, there are no more attempts left. The correct answer was a number: ( ${this.answer} )`;
          this.isDisabledInput = true;
          this.isBtnAnswer = true;
          this.isBtnExit = true;
          this.isBtnRepeat = false;
          this.answer = parseInt((Math.random() * 100).toFixed());
        }
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
#guestHint {
  cursor: pointer;
}
</style>
