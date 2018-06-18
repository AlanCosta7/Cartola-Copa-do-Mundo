<template>
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
                                    <v-text-field v-model="editedItem.jogador" label="Nome"></v-text-field>
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

            <div class="container">
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
                                <td>{{props.item.jogador}}</td>
                                <td>{{props.item.selecao}}</td>
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
                                <td class="justify-center layout px-0"><v-btn icon @click="editItem(props.item)">
                                <v-icon color="teal">edit</v-icon>
                                </v-btn></td>
                        </template>
                    <v-alert slot="no-results" :value="true" color="error" icon="warning">
                            Sua busca para "{{ search }}" não teve resultado.
                    </v-alert>
                </v-data-table>
            </div>
    </div>
</template>

<script>
    /* eslint-disable */
    
    export default {
        data () {
            return {
           dialog: false, 
           editedIndex: -1,
           editedItem: {jogador: '', assistencia:'', cartaoamarelo:'', chutesbloqueados:'', chutesgol:'', defesadepenalti:'', defesadificil:'', faltacometida:'', faltasofrida:'', finalizacao:'', gol:'', golcontra:'', golssofrido:'', impedimento:'', jogossemsofrergol:'', passeerrado:'', penaltiperdido:''},
           index: '',
           item: '',
           listFirebase: this.$store.state.listFirebase,
           headers: [
                {text: 'Jogador', value: 'Nome'},            
                {text: 'Seleção', value: 'Seleção'},
                {text: 'Posição', value: 'Posição'},  
                {text:'A', value: 'Assistencia'},
                {text: 'FS', value: 'Falta Sofrida'},
                {text: 'CG', value: 'Chutes a Gol'},
                {text: 'F', value: 'Finalizações'},
                {text: 'G', value: 'Gol'},
                {text: 'I', value: 'Impedimento'},
                {text: 'PE', value: 'Passe Errado'},
                {text: 'PP', value: 'Pênalti Perdido'},
                { text: '', sortable: false, value: 'Foto'},             
                { text: 'Jogador', value: 'Nome'},            
                { text: 'Seleção', value: 'Seleção'},
                { text: 'Posição', value: 'Posição'},
                { text: 'CA', value: 'Cartão Amarelo'},
                { text: 'CV', value: 'Cartão Vermelho'},
                { text: 'DP', value: 'Defesa de Pênalti'},
                { text: 'DD', value: 'Defesa Difícil'},
                { text: 'FC', value: 'Falta Cometida'},
                { text: 'GC', value: 'Gol Contra'},
                { text: 'GS', value: 'Gol Sofrido'},
                { text: 'JS', value: 'Jogos Sem Sofrer Gol'},
                { text: 'CB', value: 'Chutes Bloqueados'},
                {text: 'Pts', value: 'Pontos'}
            ]
        }},
            watch: {
            dialog (val) {
                val || this.close()
            }
            },
            methods: {
            save () {
                if (this.editedIndex > -1) {
                  Object.assign(this.listFirebase[this.editedIndex], this.editedItem)
                  var lista = this.listFirebase
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
          }
        }    
    }