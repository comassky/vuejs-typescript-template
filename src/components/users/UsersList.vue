<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import UserServiceApi from '@/services/UserApiServices';
import { UserInterface } from '@/Interfaces/UserInterface';

@Component({
  filters: {
    capitalize(value: string) {
      return value.toUpperCase();
    }
  }
})
export default class UsersList extends Vue {
  @Prop() readonly message: string[] | undefined;

  private users: UserInterface[];
  private filter: string;

  constructor() {
    super();
    this.users = [];
    this.filter = '';
  }

  async mounted() {
    this.users = await UserServiceApi.getAllUsers();
  }

  get listeTriee() {
    if (this.filter) {
      return this.users.filter((user) => {
        return user.id.toString() === this.filter;
      });
    }
    return this.users;
  }

  @Watch('users')
  usersUpdated(newValue: string) {
    console.log('Mon tableau user a bougé, nouvelle taille = ' + newValue);
  }

  @Emit()
  public addUser(): void {
    const userToAdd: UserInterface = {
      id: this.users.length + 1,
      name: 'Hadrien',
      username: 'hjacquot',
      adress: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        website: '',
        phone: ''
      }
    };
    this.users.push(userToAdd);
  }

  get nombreUsers(): number {
    return this.users.length;
  }
}
</script>
<template>
  <v-container>
    <v-text-field v-model="filter" />
    {{ message }}
    <v-btn @click="addUser()">Ajouter</v-btn>
    {{ nombreUsers }}
    <h1 v-for="user in listeTriee" :key="user.id">
      {{ user.name | capitalize }}
    </h1>
  </v-container>
</template>
<style></style>
