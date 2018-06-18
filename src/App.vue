<template>
  <v-app id="app" dark class="app">
      <v-navigation-drawer
      fixed
      temporary
      v-model="drawer">
      <v-list>
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        v-if="userIsAuthenticated"
        @click="onLogout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Sair</v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="red accent-4" height="80px">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/dashboard" tag="span" style="cursor: pointer"><img src="./assets/icon.png" height="60">
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
        v-if="userIsAuthenticated"
        flat
        @click="onLogout">
        <v-icon left dark>exit_to_app</v-icon>
        Sair
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
          <main fluid fill-heightr>
              <v-card height="130px" flat row>
              <div v-if="userIsAuthenticated" class="container">        
                <p class="text-xs-center">Pontos:</p><h1 class="text-xs-center success--text">{{pontos}}</h1><br>
              </div>
              <v-spacer></v-spacer>
              <div v-if="userIsAuthenticated" class="container infuser hidden-xs-only">
                  <cc-users></cc-users>
              </div>
              </v-card>
              <router-view></router-view>
             </main>
    <v-footer app fixed height="60px" row>
        <span>&copy; 2018</span>
        <span><a href="https://www.facebook.com/CartolaCopa2018/"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" class="facebook" alt="facebook" height="40px"></a></span>
        <span><a href="https://www.instagram.com/cartola_copadomundo"><img src="https://image.flaticon.com/icons/svg/179/179328.svg" class="instagram" alt="instagram" height="40px"></a></span>
    </v-footer>
  </v-app>
</template>

<script>
  /* eslint-disable */
import CcUsers from './components/User/Main'

export default {
  data () {
      return {
        drawer: false,
      }
    },
    components: {
      CcUsers
    },
    computed: {
      pontos () {
        return this.$store.getters.usuario.pontos
      },
      alert () {
        return true
      },
      menuItems () {
        let menuItems = [
          {icon: 'lock_open', title: 'Cadastro', link: '/cadastro'},
          {icon: 'face', title: 'Entrar', link: '/'}
        ]
        if (this.userIsAuthenticated == true) {
          menuItems = [
          {icon: 'dashboard', title: 'Dashboard', link: '/dashboard'},
          {icon: 'assignment_ind', title: 'Escalar', link: '/escalar'},
          {icon: 'verified_user', title: 'Seleção', link: '/selecao'},
          {icon: 'view_list', title: 'Ranking', link: '/ranking'},
          {icon: 'person', title: 'Perfil', link: '/profile'},
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        this.$store.dispatch('carregarUsuario') 
        this.$store.dispatch('listFirebase')
       return this.$store.getters.user != null && this.$store.getters.user !== undefined
      }
    },       
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    },
  }
</script>
<style lang="stylus">
    @import './stylus/main';

    .app {
      max-width: 100%;
      height: auto;
    }
    .infuser{
      top: 12%;
      position: absolute;
    }
    .instagram {
      position: absolute;
      left: 50%;
      bottom: 8%
    }
    .facebook {
      position: absolute;
      left: 35%;
      bottom: 8%
    }
</style>