<template>
        <div id="343">
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
                        color="green" 
                        class="hidden-xs-only">
                        <v-icon>assignment</v-icon>
                    </v-btn>
                    <div id="tabela" class="row">
                      <div class="col-sm">
                          <div>
                            <v-data-table xs
                            :headers="headers"
                            :items="listKey"
                            hide-actions
                            >
                            <template slot="items" slot-scope="props">   
                                <td><img :src=props.item.foto alt="" class="img"></td>
                                <td>{{props.item.jogador}}</td>
                                <td class="hidden-xs-only"><img :src=props.item.bandeira alt="bandeira" class=""></td>
                                <td class="hidden-xs-only">{{props.item.posicao}}</td>
                                <td>{{props.item.pontos1}}</td>
                                <td><v-btn round color="error" dark @click="remover(props.item)" icon flat><v-icon>remove_circle</v-icon></v-btn>
                                    </td> -->
                                </template>
                            </v-data-table>
                                <v-btn round color="info" dark @click="salvarConvocacao(item, index)">Salvar</v-btn> -->
                        </div>
                      </div>    
                      <div class="col-sm" v-show="!hidden">
                        <div id="campo" xs class="hidden-xs-only">
                            <img src="../../assets/campofutebol.svg" alt="" width="400">

                            <div id="agoleiro">
                                <img :src=listaNulla[0].foto alt="" class="img">
                                <tr>{{listaNulla[0].posicao}}</tr>
                                <img :src=listaNulla[0].bandeira alt="" class="bandeira">
                            </div> 
                            <div id="azagueiro1">
                                <img :src=listaNulla[1].foto alt="" class="img">
                                <tr>{{listaNulla[1].posicao}}</tr>
                                <img :src=listaNulla[1].bandeira alt="" class="bandeira">
                            </div>
                            <div id="azagueiro2">
                                <img :src=listaNulla[2].foto alt="" class="img">
                                <tr>{{listaNulla[2].posicao}}</tr>
                                <img :src=listaNulla[2].bandeira alt="" class="bandeira">
                            </div>  
                            <div id="azagueiro3">
                                <img :src=listaNulla[3].foto alt="" class="img">
                                <tr>{{listaNulla[3].posicao}}</tr>
                                <img :src=listaNulla[3].bandeira alt="" class="bandeira">
                            </div>  
                            <div id="bmeia1">
                                <img :src=listaNulla[6].foto alt="" class="img">
                                <tr>{{listaNulla[6].posicao}}</tr>
                                <img :src=listaNulla[6].bandeira alt="" class="bandeira">
                            </div> 
                            <div id="bmeia2">
                                <img :src=listaNulla[7].foto alt="" class="img">
                                <tr>{{listaNulla[7].posicao}}</tr>
                                <img :src=listaNulla[7].bandeira alt="" class="bandeira">
                            </div> 
                            <div id="bmeia3">
                                <img :src=listaNulla[8].foto alt="" class="img">
                                <tr>{{listaNulla[8].posicao}}</tr>
                                <img :src=listaNulla[8].bandeira alt="" class="bandeira">
                            </div> 
                            <div id="bmeia4">
                                <img :src=listaNulla[9].foto alt="" class="img">
                                <tr>{{listaNulla[9].posicao}}</tr>
                                <img :src=listaNulla[9].bandeira alt="" class="bandeira">
                            </div>
                            <div id="catacante1">
                                <img :src=listaNulla[11].foto alt="" class="img">
                                <tr>{{listaNulla[11].posicao}}</tr>
                                <img :src=listaNulla[11].bandeira alt="" class="bandeira">
                            </div>  
                            <div id="catacante2">
                                <img :src=listaNulla[12].foto alt="" class="img">
                                <tr>{{listaNulla[12].posicao}}</tr>
                                <img :src=listaNulla[12].bandeira alt="" class="bandeira">
                            </div>  
                            <div id="catacante3">
                                <img :src=listaNulla[13].foto alt="" class="img">
                                <tr>{{listaNulla[13].posicao}}</tr>
                                <img :src=listaNulla[13].bandeira alt="" class="bandeira">
                            </div>
                        </div>
                    </div>
                    </div>
              </div>
            </v-card>  

            <div>

                    <v-dialog v-model="dialog" max-width="500px">
                            <v-card>
                              <v-card-title>
                                <span class="headline">Editar</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container grid-list-md>
                                  <v-layout wrap>
                                    <v-flex xs12 sm6 md4>
                                      <v-text-field v-model="editedItem.foto" label="Fotografia"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.jogador" label="Nome"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.bandeira" label="Bandeira"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.assistencia" label="assistencia"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.cartaoamarelo" label="cartaoamarelo"></v-text-field>
                                    </v-flex>        
                                    <v-flex xs12 sm6 md4>                      
                                        <v-text-field v-model="editedItem.cartaovermelho" label="cartaovermelho"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>              
                                        <v-text-field v-model="editedItem.chutesbloqueados" label="chutesbloqueados"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>                 
                                        <v-text-field v-model="editedItem.chutesgol" label="chutesgol"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>                  
                                        <v-text-field v-model="editedItem.defesadepenalti" label="defesadepenalti"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>               
                                        <v-text-field v-model="editedItem.defesadificil" label="defesadificil"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>             
                                        <v-text-field v-model="editedItem.faltacometida" label="faltacometida"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>               
                                        <v-text-field v-model="editedItem.faltasofrida" label="faltasofrida"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>            
                                        <v-text-field v-model="editedItem.finalizacao" label="finalizacao"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>                    
                                        <v-text-field v-model="editedItem.gol" label="gol"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>                  
                                        <v-text-field v-model="editedItem.golcontra" label="golcontra"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>                  
                                        <v-text-field v-model="editedItem.golssofrido" label="golssofrido"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>                  
                                        <v-text-field v-model="editedItem.impedimento" label="impedimento"></v-text-field>
                                    </v-flex>           
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.jogossemsofrergol" label="jogossemsofrergol"></v-text-field>
                                    </v-flex>            
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.passeerrado" label="passeerrado"></v-text-field>
                                    </v-flex>           
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.penaltiperdido" label="penaltiperdido"></v-text-field>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>

                <div class="container" id="geral">
                    <v-flex>
                        <v-btn @click="pontos">
                            atualizar
                        </v-btn>
                    </v-flex>
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
                            class="elevation-1"
                            hide-actions
                            > 
                            <template slot="items" slot-scope="props">  
                                <!--    <td><img :src=props.item.foto alt="" class="image"></td>
                                    <td>{{props.item.jogador}}</td>
                                    <td class="hidden-xs-only"><img :src=props.item.bandeira alt="bandeira" class=""></td>
                                    <td class="hidden-xs-only">{{props.item.posicao}}</td>
                                    <td>{{pontos1}}</td> -->
                            <td><img :src=props.item.foto alt="fotografia" class="image"></td>
                                <td>{{props.item.jogador}}</td>    
                                <td>{{props.item.selecao}}</td>    
                                <td><img :src=props.item.bandeira alt="bandeira" class=""></td>
                                <td>{{props.item.posicao}}</td>
                                <td>{{props.item.assistencia}}</td>
                                <td>{{props.item.faltasofrida}}</td>
                                <td>{{props.item.chutesgol}}</td>
                                <td>{{props.item.finalizacao}}</td>
                                <td>{{props.item.gol}}</td>
                                <td>{{props.item.impedimento}}</td>
                                <td>{{props.item.passeerrado}}</td>
                                <td>{{props.item.penaltiperdido}}</td>
                                <td>{{props.item.cartaoamarelo}}</td>
                                <td>{{props.item.cartaovermelho}}</td>
                                <td>{{props.item.defesadepenalti}}</td>
                                <td>{{props.item.defesadificil}}</td>
                                <td>{{props.item.faltacometida}}</td>
                                <td>{{props.item.golcontra}}</td>
                                <td>{{props.item.golssofrido}}</td>
                                <td>{{props.item.jogossemsofrergol}}</td>
                                <td>{{props.item.chutesbloqueados}}</td>
                                <td>{{props.item.pontos1}}</td>
                                <v-btn icon class="mx-0" @click="editItem(props.item)">
                                    <v-icon color="teal">edit</v-icon>
                                </v-btn> 
                                <td><v-btn v-bind:disabled="props.item.status" round color="success" dark @click="convocar(props.item['.key'], props.item)" icon flat><v-icon>add_circle</v-icon></v-btn>
                                </td>
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
           dialog: false,  
           alert1: false,
           alert2: false,
           hidden: false,
           editedIndex: -1,
           editedItem: {foto: '', jogador: '', selecao: '', bandeira: '', posicao: '', assistencia:'', cartaoamarelo:'', chutesbloqueados:'', chutesgol:'', defesadepenalti:'', defesadificil:'', faltacometida:'', faltasofrida:'', finalizacao:'', gol:'', golcontra:'', golssofrido:'', impedimento:'', jogossemsofrergol:'', passeerrado:'', penaltiperdido:''},
            index: '',
            item: '',
            listFirebase: this.$store.state.listFirebase,
            listPlay: this.$store.state.listPlay,
            listKey: this.$store.state.listKey,
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
              { text: 'Seleção', align: 'left', value: 'selecao'},   
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
        mounted () {
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
        },
        created () { 
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
                        }
                } else if (listPlay[i].posicao === 'lateral') {
                    listaL.push(listPlay[i])
                        if (listaL.length > 0) {
                        listaNulla[4] = listaL[0] 
                        } if (listaL.length > 1) {
                        listaNulla[4] = listaL[0] 
                        } if (listaL.length > 2) {
                        listaNulla[5] = listaL[1]                                                                        
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
        watch: {
            dialog (val) {
                val || this.close()
            }
        },
        methods: {
            save () {
                if (this.editedIndex > -1) {
                    var listFirebase = this.listFirebase
                  Object.assign(listFirebase[this.editedIndex], this.editedItem)
                  listFirebase[this.editedIndex].pontos1 = (listFirebase[this.editedIndex].assistencia*5) + (listFirebase[this.editedIndex].cartaoamarelo*-2) + (listFirebase[this.editedIndex].cartaovermelho*-5) + (listFirebase[this.editedIndex].chutesbloqueados*1.5) + (listFirebase[this.editedIndex].chutesgol*3) + (listFirebase[this.editedIndex].defesadepenalti*7) + (listFirebase[this.editedIndex].defesadificil*3) + (listFirebase[this.editedIndex].faltacometida*-0.5) + (listFirebase[this.editedIndex].faltasofrida*0.5) + (listFirebase[this.editedIndex].finalizacao*0.8) + (listFirebase[this.editedIndex].gol*8) + (listFirebase[this.editedIndex].golcontra*-5) + (listFirebase[this.editedIndex].golssofrido*-2) + (listFirebase[this.editedIndex].impedimento*-0.5) + (listFirebase[this.editedIndex].jogossemsofrergol*5) + (listFirebase[this.editedIndex].passeerrado*-0.3) + (listFirebase[this.editedIndex].penaltiperdido*-4) 
                var lista = listFirebase
                namesRef.set(lista)
                } else {
                }
                this.close()  
            },
          editItem (item) {
            this.editedIndex = this.listFirebase.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
          },
          close () {
            this.dialog = false
            setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            }, 300)
          },
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
            if(listPlay[index].jogador === listFirebase[this.editedIndex].jogador) {
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
                if(listaNulla[w].jogador === listPlay[index].jogador) {
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
        }
        }
      }
</script>

<style>
    #agoleiro{
        position: absolute;
        bottom: 7%;
        left: 12.5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #azagueiro1{
        position: absolute;
        bottom: 24%;
        left: 3rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #azagueiro2{
        position: absolute;
        bottom: 24%;
        left: 12.5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #azagueiro3{
        position: absolute;
        bottom: 24%;
        left: 22rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #bmeia1{
        position: absolute;
        bottom: 42%;
        left: 2rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #bmeia2{
        position: absolute;
        bottom: 42%;
        left: 9rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #bmeia3{
        position: absolute;
        bottom: 42%;
        left: 16rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #bmeia4{
        position: absolute;
        bottom: 42%;
        left: 23rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #catacante1 {
        position: absolute;
        bottom: 25rem;
        left: 3rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #catacante2 {
        position: absolute;
        bottom: 25rem;
        left: 12.5rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    #catacante3 {
        position: absolute;
        bottom: 25rem;
        left: 22rem;
        color: black;
        font-weight: bold;
        font-size: 1.25em
    }
    .img{
        background-color: #ddd;
        border-radius: 100%;
        object-fit: cover;
        width: 3em;
        height: 3em;
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
    #campo {
        position: relative;
        height: 550px;
  }
 th, td {
    tab-size: 50em; 
    text-align: left;   
}
</style>