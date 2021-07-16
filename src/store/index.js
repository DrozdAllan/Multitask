import Vue from 'vue'
import Vuex from 'vuex'
import {usersCollection} from "@/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [],
		loggedIn: false,
		nickname: "",
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
	},
	actions: {
		addLocalTask({commit}, {taskName, taskDetails, startTime}) {
			const Task = {
				name: taskName,
				details: taskDetails,
				start: startTime,
				color: 'indigo'
			};
			commit("pushTask", Task);

		},
		deleteLocalTask({commit}, {taskName}) {
			const oldTasks = this.state.tasks;
			const result = oldTasks.filter(task => task.name !== taskName);
			commit("uploadTask", result);
		},
		login({commit}, {logName}) {
			let events = [];
			// usersCollection.doc(logName).collection('tasks').get().then((querySnapshot) => {
			// 	querySnapshot.forEach((doc) => {
			// 		events.push(doc.data());
			// 	})
			// }); PAS BON => il faut refresh
			// usersCollection.doc(logName).collection('tasks').onSnapshot((querySnapshot) => {
			// 	querySnapshot.forEach((doc) => {
			// 		events.push(doc.data());
			// 	});
			// }); PAS BON => les data sont multipliées après chaque event
			usersCollection.doc(logName).collection('tasks').onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === "added") {
						console.log("New task: ", change.doc.data());
						events.push(change.doc.data());
					}
					if (change.type === "modified") {
						console.log("Modified task: ", change.doc.data());
					}
					if (change.type === "removed") {
						console.log("Removed task: ", change.doc.data());
						events = events.filter(task => task.name !== change.doc.data().name)
					}
				})
			})
			commit('uploadTask', events);
			commit('setLoggedIn', true);
			commit('setName', logName);
		}
	},
	modules: {}
})
