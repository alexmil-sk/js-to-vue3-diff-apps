<template>
  <AppBtn class="" @actionRu="langRu" @actionEn="langEn" @actionSk="langSk" />
  <div class="container-md">
    <h1 class="ff_oi">{{$lang('guessNum.mainTitle')}}</h1>
    <div class="w-50">
      <h4 class="mt-5 ff_nunito fw-bolder">{{$lang('guessNum.inputLabel')}}</h4>
      <div class="mt-5 w-50">
        <div class="mt-4">
          <label for="userNum" class="form-label fw-bolder ff_nunito fs-5"
            >{{ chooseText }}
            <span
              id="guestHint"
              :style="{ display: isDisabledInput ? 'none' : null }"
              v-tooltip="$lang('guessNum.numberCannotBeLess')"
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
            :placeholder="$lang('guessNum.placeholder')"
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
						{{ $lang('guessNum.answer') }}
						</button>
          <span
            id="guest"
            v-tooltip="$lang('guessNum.answerTooltip')"
            class="btnHintAnswer"
          >
            <img src="@/img/svg/question-circle.svg" alt="question" />
          </span>
        </span>
        <span class="absolute">
          <button
            @click="repeat"
            :disabled="isBtnRepeat"
            class="btn btn-success mt-4 ms-2 fs-6 text-uppercase"
          >
            {{ userAnswer ? $lang('guessNum.clear') : $lang('guessNum.repeat') }}
          </button>
          <span
            id="guest"
            v-tooltip="$lang('guessNum.clearTheForm')"
            class="btnHintReset"
          >
            <img src="@/img/svg/question-circle.svg" alt="question" />
          </span>
        </span>
        <span class="absolute">
          <button
            @click="breakGame"
            :disabled="isBtnExit"
            class="btn btn-danger mt-4 ms-2 fs-6 text-uppercase"
          >
            {{ $lang('guessNum.exit')}}
          </button>
          <span
            id="guest"
            v-tooltip="$lang('guessNum.correctAnswer')"
            class="btnHintReset"
          >
            <img src="@/img/svg/question-circle.svg" alt="question" />
          </span>
        </span>
      </div>
      <div class="mt-4" v-if="isDisabledInput || answerText">
        <h4 class="ff_roboto">{{ answerText }}</h4>
        <h4 class="ff_roboto">{{ finishText }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guess-num-comp",
  data() {
    return {
      userAnswer: null,
      answer: parseInt((Math.random() * 100).toFixed()),
      tryCount: 0,
      maxTryCount: 7,
      chooseText: "",
      answerText: "",
      finishText: "",
      isDisabledInput: false,
      isBtnRepeat: true,
      isBtnAnswer: true,
			isBtnExit: true,
    };
  },
  inject: ["translate"],
  mounted() {
    this.chooseText =  this.$lang('guessNum.attempts') + `: ( ${
      this.maxTryCount - parseInt(this.tryCount)
    } ) ` + this.$lang('guessNum.from') + ' ' + this.maxTryCount;
  },
	methods: {
		langEn() {
      this.translate("en");
      this.$forceUpdate();
    },
    langRu() {
      this.translate("ru");
      this.$forceUpdate();
    },
    langSk() {
      this.translate("sk");
      this.$forceUpdate();
    },
    getUserAnswer(e) {
      if (parseInt(this.userAnswer) < 0) {
        this.answerText = this.$lang('guessNum.negative');
        this.isDisabledInput = true;
        this.isBtnAnswer = true;
        this.isBtnExit = false;
        this.isBtnRepeat = true;
      } else if (parseInt(this.userAnswer) > 100) {
        this.answerText = this.$lang('guessNum.moreHundred');
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
    breakGame() {
      this.userAnswer = null;
      this.chooseText = this.$lang('guessNum.exitСompleted');
      this.answerText = this.$lang('guessNum.correctAnswerWas') + `: ( ${this.answer} )`;
      this.isDisabledInput = true;
      this.isBtnRepeat = false;
      this.isBtnAnswer = true;
      this.isBtnExit = true;
      this.answer = parseInt((Math.random() * 100).toFixed());
    },

    repeat() {
      this.userAnswer = null;
      this.answerText = "";
      this.tryCount = 0;
      this.chooseText = this.$lang('guessNum.attempts') + `: ( ${
        this.maxTryCount - parseInt(this.tryCount)
      } ) ` + this.$lang('guessNum.from') + ' ' + this.maxTryCount;
      this.isDisabledInput = false;
      this.isBtnAnswer = true;
      this.isBtnRepeat = true;
      this.isBtnExit = true;
    },
    getNumber() {
      this.tryCount++;
      if (parseInt(this.userAnswer) === this.answer) {
        this.answerText = this.$lang('guessNum.сongratulations');
        this.isDisabledInput = true;
        this.isBtnAnswer = true;
        this.isBtnExit = true;
        this.answer = parseInt((Math.random() * 100).toFixed());
      } else if (this.tryCount - this.maxTryCount === 0) {
        this.answerText = this.$lang('guessNum.yourNumber') + ' ' + this.userAnswer;
      } else if (parseInt(this.userAnswer) > this.answer) {
        this.answerText = this.$lang('guessNum.yourNumber') + ` ( ${this.userAnswer} ) ` +  this.$lang('guessNum.tooBig') +  '.';
        this.isBtnExit = false;
        this.isBtnAnswer = true;
        this.isBtnRepeat = true;
        this.chooseText = this.$lang('guessNum.attempts') +  `: ( ${
          this.maxTryCount - parseInt(this.tryCount)
        } ) from ${this.maxTryCount}`;
      } else if (parseInt(this.userAnswer) < this.answer) {
        this.answerText = this.$lang('guessNum.yourNumber') + ` ( ${this.userAnswer} ) ` + this.$lang('guessNum.tooSmall') + '.';
        this.isBtnExit = false;
        this.isBtnAnswer = true;
        this.isBtnRepeat = true;
        this.chooseText = this.$lang('guessNum.attempts') + `:  ( ${
          this.maxTryCount - parseInt(this.tryCount)
        } )` + this.$lang('guessNum.from') + ' ' + this.maxTryCount;
      }
      this.userAnswer = null;
    },
  },
  watch: {
    tryCount() {
      if (this.tryCount - this.maxTryCount === 0) {
        this.finishText = this.$lang('guessNum.unfortunately') + `: ( ${this.answer} )`;
        this.isDisabledInput = true;
        this.isBtnAnswer = true;
        this.isBtnExit = true;
        this.isBtnRepeat = false;
        this.answer = parseInt((Math.random() * 100).toFixed());
      }
    },
  },
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
  width: 150px !important;
}
#guestHint {
  cursor: pointer;
}
</style>
