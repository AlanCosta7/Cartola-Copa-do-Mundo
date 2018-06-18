<template>
        <div id="541">
            <v-card>
              <div class="container">
                    <v-flex>
                            <v-alert
                                v-model="alert1"
                                type="warning"
                                dismissible>
                                Você precisa convocar 11 jogadores
                            </v-alert>
                        </v-flex>
                        <v-flex>
                            <v-alert
                                v-model="alert2"
                                type="info"
                                dismissible>
                                Sua seleção está convocada
                            </v-alert>
                        </v-flex>
                    <v-btn
                        @click.native="hidden = !hidden"
                        fixed
                        dark
                        fab
                        bottom
                        right
                        color="green">
                    <v-icon>assignment</v-icon>
                    </v-btn>
                    <div id="tabela" class="row">
                      <div class="col-sm">
                          <div>
                            <v-data-table xs
                            :headers="headers"
                            :items="listaPlay"
                            hide-actions
                            >
                            <template slot="items" slot-scope="props">   
                                <td><img :src=props.item.foto alt="" class="img"></td>
                                <td>{{props.item.jogador}}</td>
                                <td class="hidden-xs-only"><img :src=props.item.bandeira alt="bandeira" class=""></td>
                                <td class="hidden-xs-only">{{props.item.posicao}}</td>
                                <td>{{props.item.pontos1}}</td>
                                 <!--   <td><v-btn round color="error" dark @click="remover(props.item)" icon flat><v-icon>remove_circle</v-icon></v-btn>
                                    </td> -->
                                </template>
                            </v-data-table>
                           <!-- <v-btn round color="info" dark @click="salvarConvocacao(item, index)">Salvar</v-btn> -->
                        </div>
                      </div>    
                      <div class="col-sm" v-show="!hidden">
                        <div id="campo" class="hidden-xs-only">
                            <img src="../../assets/campofutebol.svg" alt="" width="400">
                            <div id="agoleiro">
                                    <img :src=listaNulla[0].foto alt="" class="img">
                                    <tr>{{listaNulla[0].posicao}}</tr>
                                    <img :src=listaNulla[0].bandeira alt="" class="bandeira">
                                </div> 
                                <div id="czagueiro1">
                                    <img :src=listaNulla[1].foto alt="" class="img">
                                    <tr>{{listaNulla[1].posicao}}</tr>
                                    <img :src=listaNulla[1].bandeira alt="" class="bandeira">
                                </div>
                                <div id="czagueiro2">
                                    <img :src=listaNulla[2].foto alt="" class="img">
                                    <tr>{{listaNulla[2].posicao}}</tr>
                                    <img :src=listaNulla[2].bandeira alt="" class="bandeira">
                                </div>  
                                <div id="czagueiro3">
                                    <img :src=listaNulla[3].foto alt="" class="img">
                                    <tr>{{listaNulla[3].posicao}}</tr>
                                    <img :src=listaNulla[3].bandeira alt="" class="bandeira">
                                </div>  
                                <div id="flateral1">
                                    <img :src=listaNulla[4].foto alt="" class="img">
                                    <tr>{{listaNulla[4].posicao}}</tr>
                                    <img :src=listaNulla[4].bandeira alt="" class="bandeira">
                                </div> 
                                <div id="flateral2">
                                    <img :src=listaNulla[5].foto alt="" class="img">
                                    <tr>{{listaNulla[5].posicao}}</tr>
                                    <img :src=listaNulla[5].bandeira alt="" class="bandeira">
                                </div> 
                                <div id="dmeia1">
                                    <img :src=listaNulla[6].foto alt="" class="img">
                                    <tr>{{listaNulla[6].posicao}}</tr>
                                    <img :src=listaNulla[6].bandeira alt="" class="bandeira">
                                </div> 
                                <div id="dmeia2">
                                    <img :src=listaNulla[7].foto alt="" class="img">
                                    <tr>{{listaNulla[7].posicao}}</tr>
                                    <img :src=listaNulla[7].bandeira alt="" class="bandeira">
                                </div>
                                <div id="dmeia3">
                                    <img :src=listaNulla[8].foto alt="" class="img">
                                    <tr>{{listaNulla[8].posicao}}</tr>
                                    <img :src=listaNulla[8].bandeira alt="" class="bandeira">
                                </div>  
                                <div id="dmeia4">
                                    <img :src=listaNulla[9].foto alt="" class="img">
                                    <tr>{{listaNulla[9].posicao}}</tr>
                                    <img :src=listaNulla[9].bandeira alt="" class="bandeira">
                                </div>  
                                <div id="aatacante1">
                                    <img :src=listaNulla[11].foto alt="" class="img">
                                    <tr>{{listaNulla[11].posicao}}</tr>
                                    <img :src=listaNulla[11].bandeira alt="" class="bandeira">
                                </div>
                        </div>
                    </div>
                    </div>
              </div>
            </v-card>  
            <div>
                <div class="container" id="geral">
                    <v-card-title>
                        Jogadores
                            <v-spacer></v-spacer>
                            <v-text-field
                            append-icon="search"
                            label="Pesquisar"
                            single-line
                            v-model="search"
                            ></v-text-field>
                            </v-card-title>
                            <v-data-table
                            :headers="headers"
                            :items="listFirebase"
                            :search="search"   
                            hide-actions
                            > 
                            <template slot="items" slot-scope="props">  
                                    <td><img :src=props.item.foto alt="" class="image"></td>
                                    <td>{{props.item.jogador}}</td>
                                    <td class="hidden-xs-only"><img :src=props.item.bandeira alt="bandeira" class=""></td>
                                    <td class="hidden-xs-only">{{props.item.posicao}}</td>
                                    <td>{{props.item.pontos1}}</td>
                                   <!-- <td><v-btn v-bind:disabled="props.item.status" round color="success" dark @click="convocar(props.item['.key'], props.item)" icon flat><v-icon>add_circle</v-icon></v-btn>
                                    </td> -->
                                </template>
                        <v-alert slot="no-results" :value="true" color="error" icon="warning">
                                Sua busca para "{{ search }}" não teve resultado.
                        </v-alert>
                    </v-data-table>
                </div>
            </div>
          </div>
</template>
<script>
    /* eslint-disable */
    import { namesRef } from "../../helpers/firebase/firebaseconfig.js"
    import { userRef } from "../../helpers/firebase/firebaseconfig.js"
    
    export default {
        data () {
          return {
            alert1: false,
            alert2: false,
            hidden: false,
            index: '',
            item: '',
            listFirebase: this.$store.state.listFirebase,
            listPlay: this.$store.state.listPlay,
            listaPlay: [],
            lista: [
                {jogador: '0',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'goleiro'},
                
                {jogador: '1',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '2',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '3',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '4',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
            
                {jogador: '5',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '6',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '7',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
                
                {jogador: '8',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '9',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '10',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '11',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'atacante'},
            
                {jogador: '12',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'atacante'},
            
                {jogador: '13',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'atacante'}],
            listaNulla: [
                {jogador: '0',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'goleiro'},
                
                {jogador: '1',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '2',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '3',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '4',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
            
                {jogador: '5',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'zagueiro'},
                
                {jogador: '6',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '7',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
                
                {jogador: '8',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '9',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '10',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'meia'},
            
                {jogador: '11',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'atacante'},
            
                {jogador: '12',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'atacante'},
            
                {jogador: '13',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMfjgIW5-DCdisO8Mbsi2tvAa-y6qgDH5jS-jeozEFDo3vza8BA',
                posicao: 'atacante'}],
             search: '',
            headers: [
            { text: '', sortable: false, align: 'left', value: 'img'},
              { text: 'Jogador', align: 'left', value: 'jogador'},
              { text: 'Bandeira', align: 'left', value: 'bandeira', class:"hidden-xs-only"},
              { text: 'Posição', align: 'left', value: 'posicao', class: "hidden-xs-only" },
              { text: 'Pts', align: 'left', value: 'pontos'},              
            ],
          }
        },
        updated () {
          this.$store.dispatch('posicao')
          var listFirebase = this.listFirebase
          var listPlay = this.listPlay
          for (var i = 0; i < listPlay.length; i++) {
            for (var k = 0; k < listFirebase.length; k++) {
                if (listPlay[i].jogador === listFirebase[k].jogador) {
                    listFirebase[k].status = true
                }
            }
          }  
        },
        beforeCreate () {
          var listFirebase = this.listFirebase
          var listPlay = this.listPlay
          var listaPlay = this.listaPlay
          for (var i = 0; i < listPlay.length; i++) {
            for (var k = 0; k < listFirebase.length; k++) {
                if (listPlay[i].jogador === listFirebase[k].jogador) {
                    listFirebase[k].status = true
                    listaPlay.push(listFirebase[k]) 
                }
            }
          }
            for (var j = 0; j < listFirebase.length; j++) {
                  listFirebase[j].pontos1 = (listFirebase[j].assistencia*5) + (listFirebase[j].cartaoamarelo*-2) + (listFirebase[j].cartaovermelho*-5) + (listFirebase[j].chutesbloqueados*1.5) + (listFirebase[j].chutesgol*3) + (listFirebase[j].defesadepenalti*7) + (listFirebase[j].defesadificil*3) + (listFirebase[j].faltacometida*-0.5) + (listFirebase[j].faltasofrida*0.5) + (listFirebase[j].finalizacao*0.8) + (listFirebase[j].gol*8) + (listFirebase[j].golcontra*-5) + (listFirebase[j].golssofrido*-2) + (listFirebase[j].impedimento*-0.5) + (listFirebase[j].jogossemsofrergol*5) + (listFirebase[j].passeerrado*-0.3) + (listFirebase[j].penaltiperdido*-4)        
                }  
        },
        created () {
          var listPlay = this.listPlay
              var listaNull = this.listaNull
              var listaNulla = this.listaNulla
              var listaZ = []
              var listaM = []
              var listaA = []
              for (var i = 0; i < listPlay.length; i++) {
                  if (listPlay[i].posicao === 'goleiro') {
                      listaNulla[0] = listPlay[i]
                  } else if (listPlay[i].posicao === 'zagueiro') {
                    listaZ.push(listPlay[i])
                    if (listaZ.length > 0) {
                        listaNulla[1] = listaZ[0]
                    } if (listaZ.length > 1) {
                        listaNulla[2] = listaZ[1]
                    }  if (listaZ.length > 2) {
                        listaNulla[3] = listaZ[2] 
                        }                                      
                  } else if (listPlay[i].posicao === 'meia') {
                      listaM.push(listPlay[i])
                      if (listaM.length > 0) {
                      listaNulla[6] = listaM[0] 
                      } if (listaM.length > 1) {
                      listaNulla[7] = listaM[1]
                      } if (listaM.length > 2) {
                      listaNulla[8] = listaM[2]
                      } if (listaM.length > 3) {
                      listaNulla[9] = listaM[3]
                      } if (listaM.length > 4) {
                      listaNulla[10] = listaM[4]
                    }
                } else if (listPlay[i].posicao === 'atacante') {
                      listaA.push(listPlay[i])
                      if (listaA.length > 0) {
                      listaNulla[11] = listaA[0] 
                      } if (listaA.length > 1) {
                      listaNulla[12] = listaA[1]
                      } if (listaA.length > 2) {
                      listaNulla[13] = listaA[2]
                      }
                } else {
                    listaNulla = lista       
                }
            }
        },
         methods: {
            salvarConvocacao(item){
            var esq = this.$store.state.esquema
            var user = this.$store.state.user
            var uid = user.uid
            const listPlay = this.listPlay
            if (listPlay.length === 11) {
            userRef.child(uid).child('convocados').set({listPlay})
            this.alert2 = true
          } else {
            this.alert1 = true
          }
          userRef.child(uid).child('perfil').update({esquema: esq})
          },
          remover (item) {
          const listPlay = this.listPlay
          const index = this.listPlay.indexOf(item)
          var listFirebase = this.listFirebase
          var listaNulla = this.listaNulla
          var lista = this.lista
          for(var j = 0; j < listFirebase.length; j++){            
            if(listPlay[index].jogador == listFirebase[j].jogador) {
            listFirebase[j].status = false
            } else if (listFirebase[j].posicao == "goleiro") {
              listFirebase[j].status = false
            } else if (listFirebase[j].posicao == "zagueiro") {
              listFirebase[j].status = false
            } else if (listFirebase[j].posicao == "lateral") {
              listFirebase[j].status = false
            } else if (listFirebase[j].posicao == "meia") {
              listFirebase[j].status = false
            } else if (listFirebase[j].posicao == "atacante") {
              listFirebase[j].status = false
            } else {
              console.log(erro)
            }
          }
            for(var w = 0; w < listaNulla.length; w++){            
                if(listaNulla[w].jogador == listPlay[index].jogador) {
                    listaNulla[w] = lista[w]
                }
            }
            listPlay.splice(index, 1)
          },
          convocar(key, item) {
            this.$store.commit('setListPlay',
            { jogador: item.jogador,
                selecao: item.selecao,
                posicao: item.posicao,
                bandeira: item.bandeira,
                foto: item.foto,
                status: true,
                pontos1: item.pontos1})
                var listPlay = this.listPlay
              var listaNull = this.listaNull
              var listaNulla = this.listaNulla
              var listaZ = []
              var listaL = []
              var listaM = []
              var listaA = []
              for (var i = 0; i < listPlay.length; i++) {
                  if (listPlay[i].posicao === 'goleiro') {
                      listaNulla[0] = listPlay[i]
                  } else if (listPlay[i].posicao === 'zagueiro') {
                    listaZ.push(listPlay[i])
                    if (listaZ.length > 0) {
                        listaNulla[1] = listaZ[0]
                    } if (listaZ.length > 1) {
                        listaNulla[2] = listaZ[1]
                    }  if (listaZ.length > 2) {
                        listaNulla[3] = listaZ[2] 
                    } if (listaZ.length > 3) {
                        listaNulla[4] = listaZ[3]
                    }  if (listaZ.length > 4) {
                        listaNulla[5] = listaZ[4] 
                        }
                } else if (listPlay[i].posicao === 'lateral') {
                    listaL.push(listPlay[i])
                        if (listaL.length > 0) {
                        listaNulla[20] = listaL[0] 
                        } if (listaL.length > 1) {
                        listaNulla[21] = listaL[0] 
                        } if (listaL.length > 2) {
                        listaNulla[22] = listaL[1]                                                                        
                    }                                        
                  } else if (listPlay[i].posicao === 'meia') {
                      listaM.push(listPlay[i])
                      if (listaM.length > 0) {
                      listaNulla[6] = listaM[0] 
                      } if (listaM.length > 1) {
                      listaNulla[7] = listaM[1]
                      } if (listaM.length > 2) {
                      listaNulla[8] = listaM[2]
                      } if (listaM.length > 3) {
                      listaNulla[9] = listaM[3]
                      } if (listaM.length > 4) {
                      listaNulla[10] = listaM[4]
                    }
                } else if (listPlay[i].posicao === 'atacante') {
                      listaA.push(listPlay[i])
                      if (listaA.length > 0) {
                      listaNulla[11] = listaA[0] 
                      } if (listaA.length > 1) {
                      listaNulla[12] = listaA[1]
                      } if (listaA.length > 2) {
                      listaNulla[13] = listaA[2]
                      }
                } else {
                    listaNulla = lista       
                }
            }
        }
        }
      }
</script>

<style> 

.img{
    background-color: #ddd;
    border-radius: 100%;
    object-fit: cover;
    width: 3em;
    height: 3em;
}
#agoleiro{
        position: absolute;
        bottom: 7%;
        left: 12.5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #czagueiro1{
        position: absolute;
        bottom: 7rem;
        left: 5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #czagueiro2{
        position: absolute;
        bottom: 9rem;
        left: 12.5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #czagueiro3{
        position: absolute;
        bottom: 7rem;
        left: 20rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
#flateral1{
    position: absolute;
    bottom: 12rem;
    left: 2rem;
    color: black;
    font-weight: bold;
    font-size: 1.25em
}
#flateral2{
    position: absolute;
    bottom: 12rem;
    left: 23rem;
    color: black;
    font-weight: bold;
    font-size: 1.25em
}
    #dmeia1{
        position: absolute;
        bottom: 19rem;
        left: 2rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #dmeia2{
        position: absolute;
        bottom: 17rem;
        left: 9rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #dmeia3{
        position: absolute;
        bottom: 17rem;
        left: 16rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #dmeia4{
        position: absolute;
        bottom: 19rem;
        left: 23rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #aatacante1 {
        position: absolute;
        bottom: 25rem;
        left: 12.5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    th {
     padding-left: 5%;
    text-align: left;   
}
#campo {
        position: relative;
        height: 550px;
}
.bandeira {
        height: 40px;
        position: absolute;
        top: 35%;
        left: 40%;
    }
    .image{
        background-color: #ddd;
        border-radius: 100%;
        object-fit: cover;
        width: 6em;
        height: 6em;
    }
</style>