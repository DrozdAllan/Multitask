import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: []
	},
	getters: {
		getTasks(state) {
			return state.tasks;
		}
	},
	mutations: {
		uploadTask(state, payload) {
			state.tasks.push(payload);
		},
		pushTask(state, payload) {
			state.tasks = payload;
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
			const Task = {
				name: taskName,
				details: taskDetails,
				start: startTime,
				color: 'indigo'
			};
			commit("uploadTask", Task);
		},
		deleteTask({commit}, {taskName}) {
			const oldTasks = this.state.tasks;

			const result = oldTasks.filter(task => task.name !== taskName);

			commit("pushTask", result);
		}
	},
	modules: {}
})
