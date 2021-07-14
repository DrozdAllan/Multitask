import Vue from 'vue'
import Vuex from 'vuex'
import {usersCollection} from "@/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [],
		loggedTasks: [],
		loggedIn: false,
		nickname: "",
	},
	getters: {
		getTasks(state) {
			return state.tasks;
		},
		getLoggedTasks(state) {
			return state.loggedTasks;
		},
		getLoggedIn(state) {
			return state.loggedIn;
		},
		getNickname(state) {
			return state.nickname;
		}
	},
	mutations: {
		uploadTask(state, payload) {
			state.tasks.push(payload);
		},
		pushTask(state, payload) {
			state.tasks = payload;
		},
		setLoggedIn(state, payload) {
			state.loggedIn = payload;
		},
		setName(state, payload) {
			state.nickname = payload;
		},
		setLoggedTasks(state, payload) {
			state.loggedTasks = payload;
		}
	},
	actions: {
		addTask({commit}, {taskName, taskDetails, taskDate, taskTime}) {
			let startTime = '';
			if (taskTime === '') {
				startTime = taskDate;
			} else {
				startTime = taskDate + ' ' + taskTime;
			}
			if (this.state.loggedIn === false) {
				const Task = {
					name: taskName,
					details: taskDetails,
					start: startTime,
					color: 'indigo'
				};
				commit("uploadTask", Task);
			} else {
				usersCollection.doc(this.state.nickname).collection('tasks').add({
					start: startTime,
					name: taskName,
					details: taskDetails,
					color: 'indigo'
				});
				console.log('collection tasks updated !');
			}
		},
		deleteTask({commit}, {taskName}) {
			const oldTasks = this.state.tasks;

			const result = oldTasks.filter(task => task.name !== taskName);

			commit("pushTask", result);
		},
		login({commit}, {logName}) {
			const tasks = [];
			usersCollection.doc(logName).collection('tasks').onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					tasks.push(change.doc.data());
				});
			});
			commit('setLoggedIn', true);
			commit('setName', logName);
			commit('setLoggedTasks', tasks);
		}
	},
	modules: {}
})
