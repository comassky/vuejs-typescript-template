<template>
  <v-layout>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on" @click="searchUser()"> {{ userId }} </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2"> Privacy Policy </v-card-title>
        <v-card-text>{{ user }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { UserInterface } from '@/Interfaces/UserInterface';
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';
import UserApiServices from '@/services/UserApiServices';

@Component
export default class User extends Vue {
  @Prop()
  readonly userId!: number;

  private dialog: boolean;
  private user: UserInterface;

  public constructor() {
    super();
    this.user = {} as UserInterface;
    this.dialog = false;
  }

  public async searchUser() {
    this.user = await UserApiServices.getOneUser(this.userId);
    this.dialog = true;
  }
}
</script>

<style></style>
