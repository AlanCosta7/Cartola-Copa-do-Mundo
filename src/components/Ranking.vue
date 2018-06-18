<template>
    <div class="container">
        <div>
            <div class="col-sm">
                <div>
                    <div id="tabelaa" class="row">
                        <div class="col-sm">
                            <div><br><br>
                                <h1 class="success--text">Ranking Pro</h1>

                                <v-layout row justify-center>
                                    <v-dialog v-model="dialog" persistent max-width="500px">
                                      <v-btn slot="activator" color="orange darken-3" round dark>Seja PRO</v-btn>
                                      <v-card>
                                        <v-card-title>
                                          <span class="headline">Seja PRO</span>
                                        </v-card-title>
                                        <v-card-text>
                                          <v-container grid-list-md>
                                            <v-layout wrap>
                                              <v-flex>
                                                <div>
                                                    <h4>Dispute prêmios personalizados da Copa do Mundo 2018.</h4> <br><br> 
                                                    <div class="orange--text" style="font-size:2em">Valor: R$ 10,00</div><br><br>
                                                    Obs.: Após o Pagamento seu perfil receberá o selo PRO no prazo de 24h 
                                                </div><br><br>
                                                <div>
                                                  <!-- INICIO FORMULARIO BOTAO PAGSEGURO -->
                                            <form action="https://pagseguro.uol.com.br/checkout/v2/cart.html?action=add" method="post" onsubmit="PagSeguroLightbox(this); return false;">
                                                <!-- NÃO EDITE OS COMANDOS DAS LINHAS ABAIXO -->
                                                <input type="hidden" name="itemCode" value="15FDE117DCDC7D6224CFAFAB59AC8C4B" />
                                                <input type="hidden" name="iot" value="button" />
                                                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/pagamentos/95x45-pagar-azul.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                                                </form>
                                                <!-- FINAL FORMULARIO BOTAO PAGSEGURO -->
                                                </div>
                                              </v-flex>  
                                            </v-layout>
                                          </v-container>
                                        </v-card-text>
                                        <v-card-actions>
                                          <v-spacer></v-spacer>
                                          <v-btn color="blue darken-1" flat @click.native="dialog = false">Fechar</v-btn>
                                        </v-card-actions>
                                      </v-card>
                                    </v-dialog>
                                  </v-layout>

                                <v-data-table xs
                                    :headers="headers"
                                    :items="proUsuarios"
                                    hide-actions
                                    >
                                        <template slot="items" slot-scope="props">   
                                          <td class="hidden-xs-only">{{props.item.name}}</td>
                                          <td>{{props.item.time}}</td>
                                          <td>{{props.item.pontos}}</td>
                                          </td>
                                        </template>
                                </v-data-table>  
                            </div>
                        </div>    
                    </div><br><br>
                    <div id="tabela" class="row">
                        <div class="col-sm">
                            <div>
                                <h3>Ranking Geral</h3>
                                <v-data-table xs
                                    :headers="headers"
                                    :items="rabkUsuarios"
                                    hide-actions
                                    >
                                        <template slot="items" slot-scope="props">   
                                          <td class="hidden-xs-only">{{props.item.name}}</td>
                                          <td>{{props.item.time}}</td>
                                          <td>{{props.item.pontos}}</td>
                                          </td>
                                        </template>
                                </v-data-table>  
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src="https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js"></script>

<script>
/* eslint-disable */
import * as firebase from 'firebase'
    export default {
        data () {
            return {
                dialog: false,
                headers: [
                    {text: "Nome", class:"hidden-xs-only"},
                    {text: "Seleção"},
                    {text: "Pontos"}
                ],
                item: '',
                rabkUsuarios: [],
                proUsuarios: [],               
                convocadosUsuarios: [], 
                listPlay: this.$store.getters.listPlay,
                listFirebase: this.$store.getters.listFirebase,
                listKey: this.$store.getters.listKey
            }
        },
        created() {
                var rabkUsuarios = this.rabkUsuarios
                var proUsuarios = this.proUsuarios
                firebase.database().ref('user').on('value', function(snapshot) {
                    var item = snapshot.val()
                    var listaUsuarios = Object.keys(item).map(function (key) { return item[key]; })
                    for (var i = 0; i < listaUsuarios.length; i++) {
                        if (listaUsuarios[i].perfil != null) {
                            rabkUsuarios.push(listaUsuarios[i].perfil)
                        }
                    }
                    for (var j = 0; j < listaUsuarios.length; j++) {
                        if (listaUsuarios[j].pro == true) {
                            proUsuarios.push(listaUsuarios[j].perfil)
                        }
                    }
                })
            },
            mounted () {
                    var listFirebase = this.listFirebase
                    var convocadosUsuarios = this.convocadosUsuarios
                    firebase.database().ref('user').on('value', function(snapshot) {
                    var item = snapshot.val()
                    var listaUsuarios = Object.keys(item).map(function (key) { return item[key]; })
                    for (var i = 0; i < listaUsuarios.length; i++) {
                        if (listaUsuarios[i].convocados != null) {
                            convocadosUsuarios.push(listaUsuarios[i].convocados.listPlay)
                            for (var j = 0; j < convocadosUsuarios.length; j++) {
                                for (var k = 0; k < convocadosUsuarios[j].length; k++) {
                                    for (var w = 0; w < listFirebase.length; w++) {
                                        if (convocadosUsuarios[j][k].jogador === listFirebase[w].jogador) {
                                           // console.log(convocadosUsuarios[j])
                                           var conv = convocadosUsuarios[j][k] 
                                           var list = listFirebase[w]
                                           conv.update(list) 
                                        }
                                    }
                                }
                              }    
                            }
                    }
                    })
                  /*  var listPlay = this.listPlay
                    var listFirebase = this.listFirebase
                    var listKey = this.listKey
                    listKey.length = 0
                    for (var i = 0; i < listPlay.length; i++) {
                        for (var j = 0; j < listFirebase.length; j++) {
                        if (listPlay[i].jogador === listFirebase[j].jogador) {
                        listFirebase[j].status = true
                        this.$store.commit('setListKey', listFirebase[j])
                        }
                        }
                    }
                    var ptusuario = listKey[0].pontos1 + listKey[1].pontos1 + listKey[2].pontos1 + listKey[3].pontos1 + listKey[4].pontos1 + listKey[5].pontos1 + listKey[6].pontos1 + listKey[7].pontos1 + listKey[8].pontos1 + listKey[9].pontos1 + listKey[10].pontos1
                    var user = this.$store.getters.user
                    var uid = user.uid
                    userRef.child(uid).child('perfil').update({pontos: ptusuario})
       */
                } 
            }
</script>
        
<style>


</style>