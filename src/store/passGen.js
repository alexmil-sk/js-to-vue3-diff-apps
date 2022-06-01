export default {
    state: {
        numberArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        latinArraySmall: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'],
        latinArrayBig: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        specialSymbols: ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'],
    },
    mutations: {

    },
    getters: {
        numberArray: s => s.numberArray,
        latinArraySmall: s => s.latinArraySmall,
        latinArrayBig: s => s.latinArrayBig,
        specialSymbols: s => s.specialSymbols,
        sumArray (s) {
            return [...s.latinArraySmall, ...s.latinArrayBig, ...s.specialSymbols, ...s.numberArray]
        }
    },
}
