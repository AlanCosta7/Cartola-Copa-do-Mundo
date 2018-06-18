<template>
    <v-container>
            <v-flex>
                    <v-alert
                      v-model="alert"
                      type="success"
                      transition="scale-transition"
                      dismissible>
                      {{alert}}
                    </v-alert>
            </v-flex>
            <br><br>
        <v-flex row>
            <div class='text-center'>
                
            <h3><v-icon color='warning' size='80px'>restore</v-icon>A Convocação para a segunda fase abre dia 16 de junho para usuários PRO</h3>
            </div><br><br>
            <v-spacer></v-spacer>
            <div>
                    <v-layout justify-center>
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

            </div>
        </v-flex><br><br>
        <v-layout>
            <v-flex xs12 sm10 offset-sm1>
              <v-card>
                <v-toolbar>
                    <v-toolbar-title class="text-md-center">Regras:</v-toolbar-title>
                </v-toolbar>
                    <v-card-text>
                        <v-container>
                           <v-flex>
                               <h3>
                                  1. Defina o Esquema Tático do seu time. <br><br>
                                  2. Escolha 11 jogadores para formar sua seleção.<br><br>
                                  3. A FIFA considera os laterais como defensores, por isso há apenas três categorias de jogadores. Zagueiros, Meias e Atacantes.<br><br>
                                  4. A convocação é um evento único, então capricha aí porque esse será seu time até a final da Copa do Mundo.<br><br>
                                  5. Usuários PRO podem mexer no time até as oitavas de final.<br>
                                   Dia 16/06/2018 abre a convocação para segunda rodada e fecha dia 19/06/2018<br>
                                   Dia 23/06/2018 abre a convocação para a terceira rodada e fecha dia 25/06/2018<br>
                                   Dia 28/06/2018 abre a convocação para as oitavas de final e fecha dia 30/06/2018 que será o time definitivo até a final.<br>
                                   6. Apenas Usuários PRO participam do Ranking Pro. <br><br>
                                   7. As 3 melhores seleções PRO serão premiadas com uma caneca personalizada.<br><br>
                                   
                               </h3>
                           </v-flex>
                        </v-container>
                    </v-card-text>
                    </v-card> <br><br>
                    
                <v-flex xs12 sm10 offset-sm1>
                    <v-card>
                            <v-toolbar>
                                    <v-toolbar-title>Pontuação:</v-toolbar-title>
                                </v-toolbar>
                                    <v-card-text>
                                        <v-container>
                                           <v-flex>
                                               <table style="width:100%">
                                                   <tr style="font-size:2em">
                                                   <th>Scouts de ataque</th>
                                                   <th>Scouts de defesa</th>
                                                   </tr>
                                                   <tr>
                                                       <td>Gol  <p class="green--text">8.0 pts</p></td>
                                                       <td>Jogo sem sofrer gols  <p class="green--text">5.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Assistência  <p class="green--text">5.0 pts</p></td>
                                                       <td>Defesa de pênalti <p class="green--text">7.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Chute a gol <p class="green--text">3.0 pts</p></td>
                                                       <td>Defesa difícil * <p class="green--text">3.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Finalizações <p class="green--text">0.8 pts</p></td>
                                                       <td>Chute Bloqueado <p class="green--text">1.5 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Falta sofrida <p class="green--text">0.5 pts</p></td>
                                                       <td>Gol contra <p class="red--text">-5.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Penalti perdido <p class="red--text">-4.0 pts</p></td>
                                                       <td>Cartão vermelho <p class="red--text">-5.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Impedimento <p class="red--text">-0.5 pts</p></td>
                                                       <td>Cartão amarelo <p class="red--text">-2.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td>Passe errado <p class="red--text">-0.3 pts</p></td>
                                                       <td>Gol sofrido * <p class="red--text">-2.0 pts</p></td>
                                                   </tr>
                                                   <tr>
                                                       <td></td>
                                                       <td>Falta cometida <p class="red--text">-0.5 pts</p></td>
                                                   </tr>
                                                   * scouts exclusivos de goleiro
                                               </table>
                                           </v-flex>
                                        </v-container>
                                    </v-card-text>    
                        </v-card>
                    </v-flex><br>
                    <v-card>
                    <v-toolbar>
                            <v-toolbar-title>Prêmio:</v-toolbar-title>
                        </v-toolbar>
                            <v-card-text>
                                <v-container xs>
                                   <v-flex class="text-center">
                                    <div><h4>Caneca personalizada da seleção brasileira</h4></div><br>
                                    <div><img height="200em" src="https://img.elo7.com.br/product/main/1F51E76/caneca-selecao-brasielira-canecas.jpg" alt="">
                                    <img height="200em" src="https://img.elo7.com.br/product/zoom/1F60D52/caneca-selecao-brasileira-2-estampa.jpg" alt=""></div><br><br>
                                   </v-flex>
                                </v-container>
                            </v-card-text>    
              </v-card><br><br><br>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script type="text/javascript" src="https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js"></script>

<script>
/* eslint-disable */
import { userRef } from "../helpers/firebase/firebaseconfig.js"

    export default {
        data () {
          return {
              alert: this.$store.getters.alert,
              dialog: false,
              time: this.$store.getters.usuario.time,
              pontos: this.$store.getters.usuario.pontos,
              listPlay: this.$store.getters.listPlay,
              listFirebase: this.$store.getters.listFirebase,
              listKey: this.$store.getters.listKey
          }
        },
        destroyed () {
            this.$store.commit('setAlert', null)
        },
        created () {
            this.$store.dispatch('carregar') 
          var listPlay = this.listPlay
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
        }

    }
</script>

<style>
    td {
      font-size:1.5em
    }
    h3 {
        font-size:1.5em
    }
</style>