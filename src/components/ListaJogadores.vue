<template>
        <div id="listajogadores">
            <v-card >
              <div class="container">
                    <v-flex>
                      <v-alert
                        v-model="alerta"
                        type="success"
                        transition="scale-transition"
                        dismissible>
                        Sua seleção foi desconvocada
                      </v-alert>
                  </v-flex>
                    <v-layout row>
                       <!-- <v-flex xs md3 v-if="userIsConvocadoBtn">
                          <v-btn round dark @click="desconvocar" color="red">Desconvocar Todos</v-btn>
                        </v-flex> -->
                        <v-spacer></v-spacer>
                        <v-flex xs md3 v-if="userIsConvocado">
                            <h3>Esquema Tático</h3>
                                <v-select
                                  :items="esquema"
                                  v-model="esqt"
                                  label="selecione"
                                  single-line
                                  auto
                                ></v-select>
                        </v-flex>
                        <v-flex xs md3 v-if="!userIsConvocado">
                            <h3>Esquema Tático {{esqt}}</h3>
                        </v-flex>
                    </v-layout>
              </div>
            </v-card>
            <div>
                <div v-if="esquemaTatico343">
                  <cc-343></cc-343>
                </div>
                <div v-else-if="esquemaTatico352">
                  <cc-352></cc-352>
                </div>
                <div v-else-if="esquemaTatico433">
                  <cc-433></cc-433>
                </div>
                <div v-else-if="esquemaTatico442">
                  <cc-442></cc-442>
                </div>
                <div v-else-if="esquemaTatico451">
                  <cc-451></cc-451>
                </div>
                <div v-else-if="esquemaTatico532">
                  <cc-532></cc-532>
                </div>
                <div v-else-if="esquemaTatico541">
                  <cc-541></cc-541>
                </div>
            </div><br><br><br><br>     
        </div>            
</template>

<script>
    /* eslint-disable */
    import { namesRef } from "../helpers/firebase/firebaseconfig.js"
    import { userRef } from "../helpers/firebase/firebaseconfig.js"
    import Cc343 from '../components/Esquema/343'
    import Cc352 from '../components/Esquema/352'
    import Cc433 from '../components/Esquema/433'    
    import Cc442 from '../components/Esquema/442'
    import Cc451 from '../components/Esquema/451'
    import Cc532 from '../components/Esquema/532'
    import Cc541 from '../components/Esquema/541'

    export default {
        data () {
          return {
            alerta: false,
            listPlay: this.$store.getters.listPlay,
            listKey: this.$store.getters.listKey,
            esquema: [
              '343', '352', '433', '442', '451', '532', '541'
            ],
            esqt: this.$store.getters.usuario.esquema,
          }
        },
        components: {
        Cc343, Cc352, Cc433, Cc442, Cc451, Cc532, Cc541
        },
        mounted () {
          this.$store.commit('setEsquema', this.esqt) 
        },
        updated () {
          this.$store.dispatch('posicao') 
          this.$store.commit('setEsquema', this.esqt) 
          },           
        computed: {
          esquemaTatico343 (){
            if(this.$store.getters.esquema === "343"){
            return true
            } else {
              return false
            }
          },
          esquemaTatico352 (){
            if(this.$store.getters.esquema === "352"){
            return true
            } else {
              return false
            }
          },
          esquemaTatico433 (){
            if(this.$store.getters.esquema === "433"){
            return true
            } else {
              return false
            }
          },
          esquemaTatico442 (){
            if(this.$store.getters.esquema === "442"){
            return true
            } else {
              return false
            }
          },
          esquemaTatico451 (){
            if(this.$store.getters.esquema === "451"){
            return true
            } else {
              return false
            }
          },
          esquemaTatico532 (){
            if(this.$store.getters.esquema === "532"){
            return true
            } else {
              return false
            }
          },
          esquemaTatico541 (){
            if(this.$store.getters.esquema === "541"){
            return true
            } else {
              return false
            }
          },
          userIsConvocado () {
            if (this.listPlay.length == 0) {
             return true
            } else {
              return false
            }
          },
          userIsConvocadoBtn () {
            if (this.listPlay.length == 11) {
             return true
            } else {
              return false
            }
          }
        },
        methods: {
        desconvocar () { 
          var user = this.$store.state.user
          var uid = user.uid
          userRef.child(uid).child('convocados').remove()
          .then((data) => {console.log(data)})
          .catch((error) => {console.log(error)})
          this.alerta = true
          userRef.child(uid).child('perfil').update({esquema: ''})
          this.$router.push('/dashboard')
        },
      }
    }
    </script>

<style>
  #gerall{
    width: 550px;
    height: 630px;
  }
  template{
    position: relative 
  }
  .img{
    background-color: #ddd;
    border-radius: 100%;
    object-fit: cover;
    width: 3em;
    height: 3em;
  }
</style>