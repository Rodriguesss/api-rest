/* VUEX: não coloquei por causa de alguns erros e também pois estou em aprendizado com essa tecnologia,
problemas: post - envia obj nulo para api.
put - para a v-model pegar os dados editados apos uma edição precisaria dos getters porem eles ja tem o valor do obj inicial antes da edição como são imutaveis precisaria de uma solução, não consegui pensar em uma.
getall / getone - funcionando
delete - não implementado */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const GET_TODOS_PRODUTOS = 'GET_TODOS_PRODUTOS'
export const GET_PRODUTO = 'GET_PRODUTO'

export default new Vuex.Store({
  state: {
    produtos: [],
    produto: {}
  },
  getters: {
    getterTodosProdutos: (state) => {
      return state.produtos
    },
    getterProduto: (state) => {
      return state.produto
    }
  },
  mutations: {
    GET_TODOS_PRODUTOS (state, value) {
      state.produtos = value
    },
    GET_PRODUTO (state, value) {
      state.produto = value
    }
  },
  actions: {
    actionTodosProdutos ({ commit }, res) {
      return axios.get('http://localhost:5000/api/produto')
        .then(res => {
          commit(GET_TODOS_PRODUTOS, res.data)
          console.log(res)
          return Promise.resolve(res)
        })
        .catch((e) => {
          return Promise.reject(e)
        })
    },
    actionProduto ({ commit }, id) {
      return axios.get(`http://localhost:5000/api/produto/${id}`)
        .then(res => {
          commit(GET_PRODUTO, res.data)
          console.log(res)
          return Promise.resolve(res)
        })
        .catch((e) => {
          return Promise.reject(e)
        })
    },
    actionCadastraProduto ({ context, state }, obj) {
      return axios.post('http://localhost:5000/api/produto')
        .then(res => {
          console.log(obj)
          console.log(res)
          return Promise.resolve(res)
        })
        .catch((e) => {
          return Promise.reject(e)
        })
    },
    actionEditaProduto ({ commit }, id, obj) {
      return axios.put(`http://localhost:5000/api/produto/${id}`, `${obj}`)
        .then(res => {
          commit(GET_PRODUTO, res.data)
          console.log(res)
          return Promise.resolve(res)
        })
        .catch((e) => {
          return Promise.reject(e)
        })
    }
  }
})
