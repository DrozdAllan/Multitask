import Vue from 'vue'
import Vuex from 'vuex'
import {usersCollection} from "@/firebase";
import Vuetify from "../plugins/vuetify";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [],
		loggedIn: false,
		nickname: "",
		darkMode: false,
	},
	getters: {
		getTasks(state) {
			return state.tasks;
		},
		getLoggedIn(state) {
			return state.loggedIn;
		},
		getNickname(state) {
			return state.nickname;
		},
		getDarkMode(state) {
			return state.darkMode;
		}
	},
	mutations: {
		pushTask(state, payload) {
			state.tasks.push(payload);
		},
		uploadTask(state, payload) {
			state.tasks = payload;
		},
		setLoggedIn(state, payload) {
			state.loggedIn = payload;
		},
		setName(state, payload) {
			state.nickname = payload;
		},
		toggleDarkMode(state) {
			Vuetify.framework.theme.dark = !Vuetify.framework.theme.dark;
			state.darkMode = !state.darkMode;
		}
	},
	actions: {
		addTask({commit}, {taskName, taskDetails, startTime}) {
			// add only the task locally ANYWAY
			const Task = {
				name: taskName,
				details: taskDetails,
				start: startTime,
				color: 'indigo'
			};
			commit("pushTask", Task);
			if (this.state.loggedIn === true) {
				// add the task to firebase if connected
				usersCollection.doc(this.state.nickname).collection('tasks').add({
					start: startTime,
					name: taskName,
					details: taskDetails,
					color: 'indigo'
				});
				console.log('collection tasks updated on firestore !');
			}
		},
		deleteTask({commit}, {taskName}) {
			// delete only the task ANYWAY
			const oldTasks = this.state.tasks;
			const result = oldTasks.filter(task => task.name !== taskName);
			commit("uploadTask", result);
			if (this.state.loggedIn === true) {
				// delete the task to firebase if connected
				const query = usersCollection.doc(this.state.nickname).collection('tasks').where('name', '==', taskName);
				query.get().then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						doc.ref.delete();
					});
				}).catch((error) => {
					console.log('error : ', error);
				})
			}
		},
		login({commit}, {logName}) {
			let events = [];
			usersCollection.doc(logName).collection('tasks').get().then((snapshot) => {
				snapshot.forEach((doc) => {
					events.push(doc.data());
				});
			});
			commit('uploadTask', events);
			commit('setLoggedIn', true);
			commit('setName', logName);
		},
	},
	modules: {}
})
