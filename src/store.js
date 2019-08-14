import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        players: [{
                Name: 'One',
                Symbol: 'O',
                Active: true
            },
            {
                Name: 'Two',
                Symbol: 'X',
                Active: false
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
        ]
    },
    mutations: {
        changePlayer() {
            this.state.players.forEach(player => {
                player.Active = !player.Active;
            });
        }
    },
    actions: {
        writeMark(state, settings) {
            const view = this;
            view.state.board.forEach(function (cell) {
                if (cell.id == settings.cell) {
                    if (cell.mark != "") return;
                    cell.mark = settings.player.Symbol;
                    view.commit('changePlayer');
                }
            });
        }
    }
});

export default store;