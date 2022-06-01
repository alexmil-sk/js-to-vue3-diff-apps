
export default {
  state: {
    riddles: {
      riddle1: {
        quest: 'Какой стол не имеет ног?',
        answer: ['парта', 'кульман']
      },
      riddle2: {
        quest: 'Маленький, серенький на слона похож. Кто это?',
        answer: ['слоник', 'слоненок']
      },
      riddle3: {
        quest: 'У семерых братьев по сестре. Сколько всего сестер?',
        answer: ['1', 'одна']
      },
      riddle4: {
        quest: 'На руках десять пальцев. Сколько пальцев на десяти руках?',
        answer: ['50', 'пятьдесят']
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
