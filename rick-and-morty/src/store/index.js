import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({ commit }) {
      const urlBase = "https://rickandmortyapi.com/api"
      try {
        const response = await fetch(urlBase + '/character')
        const data = await response.json()
        console.log(data)
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
