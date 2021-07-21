import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import frenchFlag from "@/assets/FlagIcons/frenchFlag.vue";
import englishFlag from "@/assets/FlagIcons/englishFlag.vue";
import germanFlag from "@/assets/FlagIcons/germanFlag";
import japaneseFlag from "@/assets/FlagIcons/japaneseFlag";
import russianFlag from "@/assets/FlagIcons/russianFlag";
import spanishFlag from "@/assets/FlagIcons/spanishFlag";


Vue.use(Vuetify);


export default new Vuetify({
	icons: {
		values: {
			frenchFlag: {
				component: frenchFlag,
			},
			englishFlag: {
				component: englishFlag,
			},
			germanFlag: {
				component: germanFlag,
			},
			japaneseFlag: {
				component: japaneseFlag,
			},
			russianFlag: {
				component: russianFlag,
			},
			spanishFlag: {
				component: spanishFlag,
			},
		},
	},
});
