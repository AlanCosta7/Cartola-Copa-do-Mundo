<template>
    <v-container>
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
              <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
          </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
              <v-toolbar>
                  <v-toolbar-title class="text-md-center">Login</v-toolbar-title>
              </v-toolbar>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignin">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="E-mail"
                        id="email"
                        v-model="email"
                        type="email"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Senha"
                        id="password"
                        v-model="password"
                        type="password"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn color="info" type="submit" :disabled="loading" :loading="loading">
                        Entrar
                        <span slot="loader" class="custom-loader">
                            <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              Ainda não cadastrou sua seleção?
              <v-btn @click="cadastro" color="warning">
                Criar conta
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
    </v-container>
  </template>
  
  <script>
    /* eslint-disable */
    export default {
      data () {
        return {
          email: '',
          password: ''
        }
      },
      computed: {
        user () {
          return this.$store.getters.user
        },
        error () {
        return this.$store.getters.error
        },
        loading () {
          return this.$store.getters.loading
        }
      },
      watch: {
        user (value) {
          if (value !== null && value !== undefined) {
            this.$router.push('/dashboard')
          }
        }
      },
      methods: {
        onSignin () {  
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password}) 
        var msg = 'Login realizado com sucesso'
        this.$store.commit('setAlert', msg)
      },
      cadastro () {
        this.$router.push('/cadastro')
      },
        onDismissed () {
        this.$store.dispatch('clearError')
        }
      }
    }
  </script>