<template>
  <v-container>
    <v-switch v-model="switchValue"></v-switch>
    <UsersList :message="tableau" v-on:add-user="usersUpdated()" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsersList from '@/components/users/UsersList.vue';

@Component({
  components: { UsersList }
})
export default class UsersView extends Vue {
  private tableau: string[];
  private switchValue: boolean;

  constructor() {
    super();
    this.tableau = ['Hadrien', 'Test', 'VueJs'];
    this.switchValue = false;
  }

  public usersUpdated() {
    this.switchValue = !this.switchValue;
  }
}
</script>
