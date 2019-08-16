import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        players: [{
                Name: 'Jogador Um',
                Symbol: 'O',
                Active: true,
                Wins: 0,
                WonLastRound: false
            },
            {
                Name: 'Jogador Dois',
                Symbol: 'X',
                Active: false,
                Wins: 0,
                WonLastRound: false
            },
        ],
        board: [{
                id: "1",
                mark: ''
            },
            {
                id: "2",
                mark: ''
            },
            {
                id: "3",
                mark: ''
            },
            {
                id: "4",
                mark: ''
            }, {
                id: "5",
                mark: ''
            }, {
                id: "6",
                mark: ''
            }, {
                id: "7",
                mark: ''
            }, {
                id: "8",
                mark: ''
            }, {
                id: "9",
                mark: ''
            }
        ],
        winConditions: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9], // rows
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9], // columns
            [1, 5, 9],
            [3, 5, 7] // diagonals
        ],
        ties: 0,
        moves: 0,
        win: false,
        tied: false
    },
    mutations: {
        changePlayer() {
            this.state.players.forEach(player => {
                player.Active = !player.Active;
            });
        },
        resetBoard() {
            this.state.board.forEach(function (cell) {
                cell.mark = "";
            });
            this.state.players.forEach(function (player) {
                player.WonLastRound = false;
            });

            document.querySelectorAll('.cell').forEach(function (cell) {
                cell.classList.remove('win');
            })

            this.state.win = false;
            this.state.tied = false;
            this.state.moves = 0;
        }
    },
    actions: {
        writeMark(state, settings) {
            const view = this;
            view.state.board.forEach(function (cell) {
                if (cell.id == settings.cell) {
                    if (cell.mark != "") return;
                    cell.mark = settings.player.Symbol;
                    view.state.moves++;
                    view.commit('changePlayer');
                    view.dispatch('checkIfWin', settings)
                }
            });
        },
        checkIfWin(state, payload) {
            const view = this;

            const checkEmptyCells = view.state.board.filter(function (cel) {
                return cel.mark == "";
            });

            view.state.winConditions.forEach(function (cond) {
                const firstEle = view.state.board.find(function (elem) {
                    return elem.id == cond[0]
                });
                const secondEle = view.state.board.find(function (elem) {
                    return elem.id == cond[1]
                });
                const thirdEle = view.state.board.find(function (elem) {
                    return elem.id == cond[2]
                });

                if (firstEle.mark != '' && firstEle.mark == secondEle.mark && firstEle.mark == thirdEle.mark) {
                    //Teste
                    document.getElementById(firstEle.id).classList.add("win");
                    document.getElementById(secondEle.id).classList.add("win");
                    document.getElementById(thirdEle.id).classList.add("win");

                    payload.player.Wins++;
                    payload.player.WonLastRound = true;
                    view.state.win = true;
                    //view.commit('resetBoard');
                    return;
                }
            });
            if (checkEmptyCells.length == 0 && view.state.moves >= 9 && view.state.win == false) {
                view.state.tied = true;
                view.state.ties++;
                //view.commit('resetBoard');
                return;
            }

        }
    }
});

export default store;