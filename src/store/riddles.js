
export default {
  state: {
    riddles: {
      riddle1: {
        quest: 'Which table has no legs?',
        answer: ['desk', 'drawing board']
      },
      riddle2: {
        quest: 'Small, gray looks like an elephant. Who is it?',
        answer: ['elephant', 'baby elephant']
      },
      riddle3: {
        quest: 'Seven brothers have a sister. How many sisters are there in total?',
        answer: ['1', 'one']
      },
      riddle4: {
        quest: 'There are ten fingers on the hands. How many fingers are there on ten hands?',
        answer: ['50', 'fifty']
      },
    }
  },
  getters: {
    riddles: s => s.riddles
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
