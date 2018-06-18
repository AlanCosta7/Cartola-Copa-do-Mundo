<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="text-md-center">Perfil</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <v-container>
                        <form @submit.prevent="onPerfil">
                            <v-layout row>
                                <v-flex xs12>
                                  <v-text-field
                                    name="time"
                                    label="Crie um nome para sua seleção"
                                    id="time"
                                    v-model="time"
                                    type="text"
                                    required>
                                  </v-text-field>
                                </v-flex>
                              </v-layout>
                              <v-layout row>
                                <v-flex xs12>
                                  <v-text-field
                                    name="name"
                                    label="Seu nome"
                                    id="name"
                                    v-model="name"
                                    type="text"
                                    required>
                                  </v-text-field>
                                </v-flex>
                              </v-layout>
                              <v-layout row>
                                <v-flex xs12>
                                  <v-btn type="submit" color="info">Salvar</v-btn>
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
        name: this.$store.state.usuario.name,
        time: this.$store.state.usuario.time,
      }
    },
        computed: {
          usuario () {
            return this.$store.getters.usuario
          },
          error () {
           return this.$store.getters.error
          },
          loading () {
          return this.$store.getters.loading
        }
        },
        watch: {
          usuario (value) {
            if (value !== null && value !== undefined) {
              this.$router.push('/dashboard')
            }
          }
        },  
        methods: {
            onPerfil () {
            this.$store.dispatch('onperfil', {name: this.name, 
                time: this.time})
            },
            onDismissed () {
            this.$store.dispatch('clearError')
            }
        }
  }
</script> 