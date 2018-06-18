<template>
    <div id="tabela" class="container">
            <v-card>
                <div><br><br>
                    <v-layout row wrap>
                        <div class="text-center container">
                            <div class="text-xs-center"><h1>{{time}}</h1></div>
                            <div class="text-xs-center"><h2>Pontuação:</h2></div>
                            <v-container fluid row class="text-xs-center">
                                <div class="text-xs-center container">
                                </div>
                                <div class="text-xs-center container hidden-xs-only">
                                    <div v-show="show" class="text-xs-center"><h3>Ataque</h3></div>
                                    <v-switch
                                        class="text-xs-center seta"
                                        v-on:click="show = !show" 
                                        v-model="show"
                                        color="orange darken-3"
                                    ></v-switch>
                                    <div v-show="!show" class="text-xs-center"><h3>Defesa</h3></div>
                                </div>
                            </v-container>
                        </div>
                    </v-layout>
                </div>
            </v-card>
            <div>
                <div>
                    <v-data-table 
                        :headers="headersA"
                        v-show="show"
                        :items="listKey"
                        hide-actions 
                        class="elevation-1 tab1"
                        >
                        <template slot="items" slot-scope="props">   
                        <td><img :src=props.item.foto alt="" class="img"></td>
                        <td>{{props.item.jogador}}</td>
                        <td class="hidden-xs-only">{{props.item.selecao}}</td>
                        <td class="hidden-xs-only">{{props.item.posicao}}</td>
                        <td class="hidden-xs-only">{{props.item.assistencia}}</td>
                        <td class="hidden-xs-only">{{props.item.faltasofrida}}</td>
                        <td class="hidden-xs-only">{{props.item.chutesgol}}</td>
                        <td class="hidden-xs-only">{{props.item.finalizacao}}</td>
                        <td class="hidden-xs-only">{{props.item.gol}}</td>
                        <td class="hidden-xs-only">{{props.item.impedimento}}</td>
                        <td class="hidden-xs-only">{{props.item.passeerrado}}</td>
                        <td class="hidden-xs-only">{{props.item.penaltiperdido}}</td>
                        <td>{{props.item.pontos1}}</td>
                    </template>
                    </v-data-table>
                    <v-data-table 
                    :headers="headersB"
                    v-show="!show"
                    :items="listKey"
                    hide-actions
                    class="elevation-1 tab1"    
                    >
                    <template slot="items" slot-scope="props">
                    <td><img :src=props.item.foto alt="" class="img"></td>
                        <td>{{props.item.jogador}}</td>
                        <td class="hidden-xs-only">{{props.item.selecao}}</td>
                        <td class="hidden-xs-only">{{props.item.posicao}}</td>
                        <td class="hidden-xs-only">{{props.item.cartaoamarelo}}</td>
                        <td class="hidden-xs-only">{{props.item.cartaovermelho}}</td>
                        <td class="hidden-xs-only">{{props.item.defesadepenalti}}</td>
                        <td class="hidden-xs-only">{{props.item.defesadificil}}</td>
                        <td class="hidden-xs-only">{{props.item.faltacometida}}</td>
                        <td class="hidden-xs-only">{{props.item.golcontra}}</td>
                        <td class="hidden-xs-only">{{props.item.golssofrido}}</td>
                        <td class="hidden-xs-only">{{props.item.jogossemsofrergol}}</td>
                        <td class="hidden-xs-only">{{props.item.chutesbloqueados}}</td>
                        <td>{{props.item.pontos1}}</td>
                    </template>
                    </v-data-table><br><br>
                </div><br>
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
            </div><br>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    data () {
        return {
        headersA: [
                {text: '', sortable: false, value: 'Foto'},
                {text: 'Jogador', value: 'Nome'},            
                {text: 'Seleção', value: 'Seleção', class:"hidden-xs-only"},
                {text: 'Posição', value: 'Posição', class:"hidden-xs-only"},  
                {text:'A', value: 'Assistencia', class:"hidden-xs-only"},
                {text: 'FS', value: 'Falta Sofrida', class:"hidden-xs-only"},
                {text: 'CG', value: 'Chutes a Gol', class:"hidden-xs-only"},
                {text: 'F', value: 'Finalizações', class:"hidden-xs-only"},
                {text: 'G', value: 'Gol', class:"hidden-xs-only"},
                {text: 'I', value: 'Impedimento', class:"hidden-xs-only"},
                {text: 'PE', value: 'Passe Errado', class:"hidden-xs-only"},
                {text: 'PP', value: 'Pênalti Perdido', class:"hidden-xs-only"},
                {text: 'Pts', value: 'Pontos'},
        ],
        headersB: [
            { text: '', sortable: false, value: 'Foto'},             
            { text: 'Jogador', value: 'Nome'},            
            { text: 'Seleção', value: 'Seleção', class:"hidden-xs-only"},
            { text: 'Posição', value: 'Posição', class:"hidden-xs-only"},
            { text: 'CA', value: 'Cartão Amarelo', class:"hidden-xs-only"},
            { text: 'CV', value: 'Cartão Vermelho', class:"hidden-xs-only"},
            { text: 'DP', value: 'Defesa de Pênalti', class:"hidden-xs-only"},
            { text: 'DD', value: 'Defesa Difícil', class:"hidden-xs-only"},
            { text: 'FC', value: 'Falta Cometida', class:"hidden-xs-only"},
            { text: 'GC', value: 'Gol Contra', class:"hidden-xs-only"},
            { text: 'GS', value: 'Gol Sofrido', class:"hidden-xs-only"},
            { text: 'JS', value: 'Jogos Sem Sofrer Gol', class:"hidden-xs-only"},
            { text: 'CB', value: 'Chutes Bloqueados', class:"hidden-xs-only"},
            {text: 'Pts', value: 'Pontos'}
        ],
        headers: [
              { text: '', sortable: false, align: 'left', value: 'img'},
              { text: 'Jogador', align: 'left', value: 'jogador'},
              { text: 'Bandeira', align: 'left', value: 'bandeira', class:"hidden-xs-only"},
              { text: 'Posição', align: 'left', value: 'posicao', class: "hidden-xs-only" },
              { text: 'Pts', align: 'left', value: 'pontos'},   
            ], 
        show: true,
        time: this.$store.getters.usuario.time,
        value: '',
        index: '',
        item: '',
        listFirebase: this.$store.getters.listFirebase,
        listKey: this.$store.getters.listKey
        }
    }
} 
</script>

<style>
    .img {
        background-color: #ddd;
        border-radius: 100%;
        object-fit: cover;
        width: 3em;
        height: 3em;
    }
    #tab1 {
        font-size: 1.5em
    }
    th, td {
        padding: 1em;
    }
    .tabShow {
        font-size: 1.75em
    }
    .seta{
        left: 50%
    }
    .image{
        background-color: #ddd;
        border-radius: 100%;
        object-fit: cover;
        width: 6em;
        height: 6em;
    }
</style>