/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { userRef } from "../helpers/firebase/firebaseconfig.js" 
import { namesRef } from "../helpers/firebase/firebaseconfig.js" 

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      email: '',
      uid: ''
    },
    usuario: {
      name: '',
      email: '',
      uid: '',
      time: '',
      pontos:'',
      e2: ''
    },
    pontos: '',
    alert: '',
    listFirebase: [],
    listKey: [],
    listPlay: [], 
      esquema: '',
      loading: false,
      error: null
  },
  mutations: {
    setUser (state, payload) {
        state.user = payload
      },  
    setAlert (state, payload) {
        state.alert = payload
      },
    setPontos (state, payload) {
        state.pontos = payload
      },
    setEsquema (state, payload) {
        state.esquema = payload
      },
    setUsuario (state, payload) {
      state.usuario = payload
    },
    setListFirebase (state, listFirebase) {
        state.listFirebase.push(listFirebase)
        },
    setListPlay (state, listPlay) {
        state.listPlay.push(listPlay)
      },    
    setListKey (state, listKey) {
      state.listKey.push(listKey)
      },
    setLoading (state, payload) {
        state.loading = payload
      },
    setError (state, payload) {
        state.error = payload
      },
    clearError (state) {
        state.error = null
      }
  },
  actions: {
    posicao ({getters, commit}) {
      var listPlay = getters.listPlay 
      var listFirebase = getters.listFirebase
      var gol = 0
      var zag = 0
      var lat = 0
      var mei = 0
      var ata = 0
      var esquema = getters.esquema
      if (esquema === '343') {
        var gg = 1
        var zz = 3
        var ll = 0
        var aa = 3
        var mm = 4
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol >= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  var mygoleiro = listFirebase[g]
                  mygoleiro.status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          } 
        }
      } else if (esquema === '352') {
        var gg = 1
        var zz = 3
        var ll = 0
        var aa = 2
        var mm = 5
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol <= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  listFirebase[g].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          }
        }
      } else if (esquema === '433') {
        var gg = 1
        var zz = 4
        var ll = 0
        var aa = 3
        var mm = 3
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol >= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  listFirebase[g].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          }
        }
      } else if (esquema === '442') {
        var gg = 1
        var zz = 4
        var ll = 0
        var aa = 2
        var mm = 4
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol >= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  listFirebase[g].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          }
        }
      } else if (esquema === '451') {
        var gg = 1
        var zz = 4
        var ll = 0
        var aa = 1
        var mm = 5
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol >= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  listFirebase[g].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          }
        }
      } else if (esquema === '532') {
        var gg = 1
        var zz = 5
        var ll = 0
        var aa = 2
        var mm = 3
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol >= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  listFirebase[g].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          }
        }
      } else if (esquema === '541') {
        var gg = 1
        var zz = 5
        var ll = 0
        var aa = 1
        var mm = 4
        for(var i = 0; i < listPlay.length; i++){
          if (listPlay[i].posicao == "goleiro") {
            gol++
            if (gol >= gg) {
              for (var g = 0; g < listFirebase.length; g++) {
                if (listFirebase[g].posicao == "goleiro") {
                  listFirebase[g].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "zagueiro") {
            zag++
            if (zag >= zz) {
              for (var z = 0; z < listFirebase.length; z++) {
                if (listFirebase[z].posicao == "zagueiro") {
                  listFirebase[z].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "lateral") {
            lat++
            if (lat >= ll) {
              for (var l = 0; l < listFirebase.length; l++) {
                if (listFirebase[l].posicao == "lateral") {
                  listFirebase[l].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "meia") {
            mei++
            if (mei >= mm) {
              for (var m = 0; m < listFirebase.length; m++) {
                if (listFirebase[m].posicao == "meia") {
                  listFirebase[m].status = true
                } 
              } 
            } 
          } else if (listPlay[i].posicao == "atacante") {
            ata++
            if (ata >= aa) {
              for (var a = 0; a < listFirebase.length; a++) {
                if (listFirebase[a].posicao == "atacante") {
                  listFirebase[a].status = true
                } 
              } 
            } 
          }
        }
      } else {
        console.log(ErrorEvent)
      }
    },
    carregar ({commit, getters})  {
      const user = getters.user
      const listPlay = getters.listPlay
      const listFirebase = getters.listFirebase
      var uid = user.uid
      firebase.database().ref('/user/' + uid + '/convocados' + '/listPlay/').on('value', function(snapshot) {
                    var listaC = snapshot.val()
                    listPlay.length = 0
                    for(var a = 0; a < listaC.length; a++){
                      commit('setListPlay', listaC[a])
                    } 
                  })       
    },
    listFirebase ({commit, getters}) {
      const listFirebase = getters.listFirebase
      firebase.database().ref('jogadores').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]; })
        listFirebase.length = 0
        for (var j = 0; j < arr.length; j++) {
          commit('setListFirebase', arr[j])
          }
           commit('setLoading', false)
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code)
        })
     },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              email: user.email,
              uid: user.uid,
            }
            commit('setUser', newUser)
            var msg = 'Cadastro realizado com sucesso'
            commit('setAlert', msg)
            window.localStorage.setItem('user', JSON.stringify({email: newUser.email, uid: newUser.uid }))  
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
     },
    signUserIn ({commit, getters}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              email: user.email,
              uid: user.uid,
            }
            commit('setUser', newUser)
            window.localStorage.setItem('user', JSON.stringify({email: newUser.email, uid: newUser.uid}))  
            var user = getters.user
            var useruid = user.uid
            var userlogado = firebase.database().ref('/user/' + useruid + '/perfil').on('value', function(snapshot) {
            var item = snapshot.val()
            commit('setUsuario', item) 
            window.localStorage.setItem('usuario', JSON.stringify(item))
            })
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    cadastPlay ({commit}, payload) {
      firebase.database().ref('jogadores').push(payload)
    },
    onperfil ({commit, getters}, payload){
      const user = getters.user
      var uid = user.uid
      userRef.child(uid).update({perfil: 
            {email: user.email, 
            uid: user.uid,
            name: payload.name, 
            time: payload.time}
      })
      commit('setUsuario', {email: user.email, 
        uid: user.uid,
        name: payload.name, 
        time: payload.time})
      var usuario = getters.usuario  
      window.localStorage.setItem('usuario', usuario )  
    },
    carregarUsuario ({commit, getters}) {
      var userLocal = window.localStorage.getItem('user') 
      var usuarioLocal = window.localStorage.getItem('usuario') 
      commit('setUser', JSON.parse(userLocal))
      commit('setUsuario', JSON.parse(usuarioLocal)) 
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      commit('setUsuario', null)
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('usuario')
      commit('setAlert', null)
    }, 
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
      user (state) {
        return state.user
      },
      alert (state) {
        return state.alert
      },
      usuario (state) {
        return state.usuario
      },
      pontos (state) {
        return state.pontos
      },
      listFirebase (state) {
        return state.listFirebase
      },
      listPlay (state) {
        return state.listPlay
      },     
      listKey (state) {
        return state.listKey
      },
      loading (state) {
        return state.loading
      },
      esquema (state) {
        return state.esquema
      },
      error (state) {
        return state.error
      }
  }
})