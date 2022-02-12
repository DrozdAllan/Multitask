<template>
  <v-container class="text-center">
    <v-row>
      <v-spacer class="hidden-sm-and-down" />
      <v-col v-if="!loggedIn">
        {{ $t("message") }}
        <br />
        <v-col class="pb-0 mb-0" cols="12">
          <v-text-field
            dense
            outlined
            @keyup.enter="logIn"
            color="green"
            :hint="$t('hint')"
            class="text-center"
            :label="$t('label')"
            v-model="logName"
          ></v-text-field>
        </v-col>
        <v-btn @click="logIn" class="multi" color="white--text">{{
          $t("login")
        }}</v-btn>
      </v-col>
      <v-col v-else>
        <span class="text-h6 text-md-h4">Hello {{ nickname }} !</span>
      </v-col>
      <v-spacer class="hidden-sm-and-down" />
    </v-row>

    <v-row
      :class="[
        darkMode ? 'border-gradient-first-black' : 'border-gradient-first',
      ]"
    >
      <v-col cols="12">
        <Calendar />
      </v-col>
      <v-col cols="12" id="goToClock">
        <todo-list />
      </v-col>
    </v-row>

    <v-row
      class="my-15"
      :class="[darkMode ? 'border-gradient-black' : 'border-gradient']"
    >
      <v-col>
        <timer />
      </v-col>
      <v-divider vertical />
      <v-col>
        <weather />
      </v-col>
      <v-divider vertical />
      <v-col>
        <chrono />
      </v-col>
    </v-row>

    <v-row
      class="my-10"
      :class="[
        darkMode ? 'border-gradient-world-black' : 'border-gradient-world',
      ]"
    >
      <v-col>
        <world />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoList from "../components/TodoList";
import Calendar from "../components/Calendar";
import Weather from "../components/Weather";
import Timer from "../components/Timer";
import Chrono from "../components/Chrono";
import World from "@/components/World";

export default {
  name: "Home",
  components: {
    World,
    Chrono,
    Timer,
    Weather,
    Calendar,
    TodoList,
  },
  data() {
    return {
      logName: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.getLoggedIn;
    },
    nickname() {
      return this.$store.getters.getNickname;
    },
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
  methods: {
    logIn() {
      const logName = this.logName;
      this.$store.dispatch("login", { logName });
    },
  },
};
</script>

<style scoped>
.multi {
  background: linear-gradient(
    to right,
    #2196f3,
    #00bcd4,
    #009688,
    #4caf50,
    #8bc34a
  );
}

.border-gradient-first {
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 30px;
  background-image: linear-gradient(white, white),
    linear-gradient(to bottom, #2196f3, #1e88e5);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.border-gradient-first-black {
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 30px;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(to bottom, #2196f3, #1e88e5);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.border-gradient {
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 30px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #00bcd4, #009688, #4caf50);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.border-gradient-black {
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 30px;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(to right, #00bcd4, #009688, #4caf50);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.border-gradient-world {
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 30px;
  background-image: linear-gradient(white, white),
    linear-gradient(to bottom, #8bc34a, #7cb342);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.border-gradient-world-black {
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 30px;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(to bottom, #8bc34a, #7cb342);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
