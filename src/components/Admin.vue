<template>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
              <v-toolbar>
                  <v-toolbar-title class="text-md-center">Cadastrar Jogadores</v-toolbar-title>
              </v-toolbar>
            <v-card-text>
              <v-container>
                <form @submit.prevent="cadastrarPlay">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="nome"
                        label="Nome"
                        id="nome"
                        v-model="nome"
                        required
                        ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="foto"
                        label="foto"
                        id="foto"
                        v-model="foto"
                        ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                            <v-select
                              :items="posicaos"
                              v-model="a1"
                              label="Posição"
                              single-line
                              autocomplete
                              required
                            ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                            <v-select
                              :items="pais"
                              v-model="a2"
                              label="Bandeira"
                              single-line
                              append-icon="map"
                              autocomplete
                              required
                            ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit" color="info">Cadastrar</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
  
<script>
/* eslint-disable */
  export default {
      data () {
        return {
          a1: null,
          a2: null,
          pais: [
            'RÚSSIA', 'ARÁBIA SAUDITA', 'EGITO', 'URUGUAI', 'PORTUGAL', 
            'ESPANHA', 'MARROCOS', 'IRÃ', 'FRANÇA', 'AUSTRÁLIA', 'PERU', 
            'DINAMARCA', 'ARGENTINA', 'ISLÂNDIA', 'CROÁCIA', 'NIGÉRIA', 
            'BRASIL', 'SUÍÇA', 'COSTA RICA', 'SERVIA', 'ALEMANHA', 
            'MÉXICO', 'SUÉCIA', 'COREIA DO SUL', 'BELGICA', 'PANAMÁ', 
            'TUNÍSIA', 'INGLATERRA', 'POLÔNIA', 'SENEGAL', 'COLÔMBIA', 'JAPÃO'
          ],
          posicaos: [
               'goleiro', 'lateral', 'zagueiro', 'meia', 'atacante'
          ], 
          nome: '',
          foto: '',  
        }
      },
      methods: {
        cadastrarPlay () { 
          this.$store.dispatch('cadastPlay', {
            jogador: this.nome,
            foto: this.foto,
            posicao: this.a1,
            selecao: this.a2,       
            assistencia : 0,
            cartaoamarelo : 0,
            cartaovermelho : 0,
            defesadepenalti : 0,
            defesadificil: 0,
            faltacometida: 0,
            faltasofrida: 0,
            finalizacao: 0,
            chutesgol: 0,
            gol: 0,
            golcontra: 0,
            golssofrido: 0,
            impedimento: 0,
            jogossemsofrergol: 0,
            passeerrado: 0,
            penaltiperdido: 0,
            chutesbloqueados: 0,
            pontos1: 0,
            pontos2: 0,
            pontos3: 0,
            pontos8: 0,
            pontos4: 0,
            pontossemi: 0,
            pontosfinal: 0,
            status: false,    
          })
        }
      }
    }
</script>