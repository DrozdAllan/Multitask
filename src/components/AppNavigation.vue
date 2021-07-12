<template>
 <span>
    <v-navigation-drawer
            app
            :mini-variant.sync="mini"
            v-model="drawer"
    >
      <v-list>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title class="title text-center noirrose--text">
              <v-icon>mdi-home</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="pl-15"
            ><span class="noirrose--text">Accueil</span></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-show="isConnected" link to="/account">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Compte</v-list-item-title>
        </v-list-item>
        <v-list-item v-show="isConnected" link @click="deco">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Déconnexion</v-list-item-title>
        </v-list-item>
        <v-list-item v-show="!isConnected" link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Connexion</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cart">
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Panier</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="redirectCategory('mode')">
          <v-list-item-icon>
            <v-icon color="rose">mdi-glasses</v-icon>
            <!--            $vuetify.icons.sacamainfilled-->
          </v-list-item-icon>
          <v-list-item-title>Accessoires mode</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="redirectCategory('home')">
          <v-list-item-icon>
            <v-icon color="rose">mdi-home-lightbulb-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>À la maison</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isAdmin" link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dense shrink-on-scroll>
      <v-container class="px-0 py-2">
        <v-row align="center">
          <v-col cols="2" class="px-0"
          ><v-app-bar-nav-icon
                  color="rose"
                  class="hidden-md-and-up"
                  @click="drawer = !drawer"
          ></v-app-bar-nav-icon
          ></v-col>
          <v-col cols="8" class="pa-0  text-center">
            <router-link to="/" class="lanya-title text-decoration-none rose--text"
            >Lanya</router-link
            ></v-col
          >
          <v-col cols="2" class="pb-5">
            <v-chip class="pa-1 px-md-3" color="rose noirrose--text" link outlined>
              <v-icon class="rose--text">mdi-instagram</v-icon>
              <span v-if="!$vuetify.breakpoint.mobile" class="px-3">Lanya</span>
            </v-chip></v-col
          >
        </v-row>
      </v-container>
    </v-app-bar>
  </span>
</template>

<script>
	export default {
		name: "AppNavigation",
		data() {
			return {
				mini: true,
				drawer: true,
				user: null,
				Category: "",
			};
		},
		computed: {
			isConnected() {
				return this.$store.getters.isConnected;
			},
			isAdmin() {
				return this.$store.getters.isAdmin;
			},
			bp() {
				return this.$vuetify.breakpoint.name;
			},
		},
		methods: {
			deco() {
				this.$store.dispatch("userDisconnect");
			},
			redirectCategory(cat) {
				this.$store.dispatch("redirectCategory", {cat});
			},
		},
	}
</script>