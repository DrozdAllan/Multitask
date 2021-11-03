<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet>
          <v-toolbar
                  flat
          >
            <v-btn
                    outlined
                    :x-small="$vuetify.breakpoint.mobile"
                    color="blue"
                    @click="setToday"
            >
              <v-icon :small="$vuetify.breakpoint.mobile">mdi-calendar-sync</v-icon>
            </v-btn>
            <v-btn
                    fab
                    text
                    :x-small="$vuetify.breakpoint.mobile"
                    color="blue"
                    @click="prev"
            >
              <v-icon :small="$vuetify.breakpoint.mobile">
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn
                    fab
                    text
                    :x-small="$vuetify.breakpoint.mobile"
                    color="blue"
                    @click="next"
            >
              <v-icon :small="$vuetify.breakpoint.mobile">
                mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar" class="blue--text" :style="{ fontSize: fontSize + 'px' }">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu
                    bottom
                    right
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                        outlined
                        :x-small="$vuetify.breakpoint.mobile"
                        color="blue"
                        v-bind="attrs"
                        v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title class="blue--text">{{ $t("day") }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title class="blue--text">{{ $t("week") }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title class="blue--text">{{ $t("month") }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title class="blue--text">{{ $t("4 days") }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="400">
          <v-calendar
                  ref="calendar"
                  v-model="focus"
                  :locale="$root.$i18n.locale"
                  color="primary"
                  :events="events"
                  :type="type"
                  @click:event="showEvent"
                  @click:more="viewDay"
                  @click:date="viewDay"
          ></v-calendar>
          <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
          >
            <v-card
                    color="blue"
                    min-width="350px"
                    flat
            >
              <v-toolbar
                      :color="selectedEvent.color"
                      dark
              >
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="deleteTask(selectedEvent.name)">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span class="white--text" v-html="selectedEvent.details"></span>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

	export default {
		data() {
			return {
				focus: '',
				type: 'month',
				typeToLabel: {
					month: 'Month',
					week: 'Week',
					day: 'Day',
					'4day': '4 Days',
				},
				selectedEvent: {},
				selectedElement: null,
				selectedOpen: false,
			}
		},
		mounted() {
			this.$refs.calendar.checkChange();
		},
		computed: {
			events() {
				return this.$store.getters.getTasks;
			},
			fontSize() {
				if (this.$vuetify.breakpoint.mobile) {
					return 15
				} else {
					return 30
				}
			}
		},
		methods: {
			deleteTask(taskName) {
				this.$store.dispatch("deleteTask", {taskName});
			},
			viewDay({date}) {
				this.focus = date
				this.type = 'day'
			},
			setToday() {
				this.type = 'month';
			},
			prev() {
				this.$refs.calendar.prev()
			},
			next() {
				this.$refs.calendar.next()
			},
			showEvent({nativeEvent, event}) {
				const open = () => {
					this.selectedEvent = event
					this.selectedElement = nativeEvent.target
					requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
				}

				if (this.selectedOpen) {
					this.selectedOpen = false
					requestAnimationFrame(() => requestAnimationFrame(() => open()))
				} else {
					open()
				}

				nativeEvent.stopPropagation()
			},
		},
	}
</script>