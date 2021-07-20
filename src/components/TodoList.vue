<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn v-if="stepper === false" color="blue white--text" @click="stepper = true">New task</v-btn>

        <v-alert
                v-model="taskSuccess"
                border="bottom"
                color="pink darken-1"
                dark
                dismissible
        >
          Task added with success !
        </v-alert>
        <v-stepper v-if="stepper" v-model="e1">
          <v-stepper-header>
            <v-stepper-step
                    :complete="e1 > 1"
                    step="1"
            >
              Add a new Task
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                    :complete="e1 > 2"
                    step="2"
            >
              Define the new Task
            </v-stepper-step>

            <v-divider></v-divider>

          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form ref="form1"
                      v-model="validForm1" lazy-validation>
                <v-text-field
                        label="Name of the new task"
                        v-model="taskName"
                        :rules="taskNameRules"
                ></v-text-field>
                <v-text-field
                        label="Description of the new task (optional)"
                        v-model="taskDetails"
                ></v-text-field>
              </v-form>
              <v-btn
                      color="primary"
                      @click="verifyForm1(), $vuetify.goTo('#goToClock', { duration: '1500', easing: 'easeInOutQuad'})"
              >
                Continue
              </v-btn>

              <v-btn text @click="stepper = false, taskName = '', taskDetails = ''">
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">

              <v-row>

                <v-col>
                  <v-date-picker
                          v-model="taskDate"
                          show-current
                  ></v-date-picker>

                </v-col>

                <v-col v-if="allDay === false">
                  <v-time-picker
                          format="24hr"
                          scrollable
                          v-model="taskTime"
                  ></v-time-picker>
                </v-col>
              </v-row>
              <v-switch
                      v-model="allDay"
                      @click="taskTime = ''"
                      label="This task is for a whole day"
              ></v-switch>

              <v-btn
                      color="primary"
                      @click="addTask()"
                      :disabled="!validForm1">
                Validate
              </v-btn>

              <v-btn text @click="e1 = 1, taskTime = '', taskDate = ''">
                Cancel
              </v-btn>
              <v-card v-if="errorDate">
                <v-card-text>
                  You have to select a date
                </v-card-text>
              </v-card>
              <v-card v-if="errorTime">
                <v-card-text>
                  If you unchecked "this task is for a whole day" you have to select a time
                </v-card-text>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

	import {usersCollection} from "@/firebase";

	export default {
		name: 'TodoList',
		data() {
			return {
				allDay: true,
				stepper: false,
				taskSuccess: false,
				e1: 1,
				taskName: "",
				taskDetails: "",
				taskDate: "",
				taskTime: "",
				errorDate: false,
				errorTime: false,
				validForm1: true,
				taskNameRules:
					[
						v => !!v || 'Name is required',
					],
			}
		},
		methods:
			{
				verifyForm1() {
					if (this.$refs.form1.validate()) {
						this.e1 = 2;
					}
				}
				,
				addTask() {
					if (this.taskDate === "") {
						console.log('date vide');
						this.errorDate = true;
					} else if (this.allDay === false && this.taskTime === "") {
						console.log('hour checked but no hour selected');
						this.errorTime = true;
					} else {

						let startTime = '';
						if (this.taskTime === '') {
							startTime = this.taskDate;
						} else {
							startTime = this.taskDate + ' ' + this.taskTime;
						}

						const taskName = this.taskName;
						const taskDetails = this.taskDetails;

						this.$store.dispatch("addTask", {taskName, taskDetails, startTime});

						this.errorDate = false;
						this.errorTime = false;
						this.stepper = false;
						this.e1 = 1;
						this.taskName = "";
						this.taskDetails = "";
						this.taskDate = "";
						this.taskTime = "";
						this.taskSuccess = true;
					}
				}
			}
		,
	}
</script>