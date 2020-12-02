<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-flex sm3> <v-text-field v-model="filter" /> </v-flex>
    </v-layout>
    <v-layout row>
      <v-switch v-model="switchValue"></v-switch>
    </v-layout>
    <v-layout>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Id</th>
              <th class="text-center">Title</th>
              <th class="text-center">User</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in listeFiltree" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>
                <User :userId="post.userId" v-on:close-popup="toggleSwitch()" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlbumsRestService from '@/services/AlbumsApiServices';
import { AlbumInterface } from '@/Interfaces/AlbumInterface';
import User from '@/components/users/User.vue';

@Component({
  components: {
    User
  }
})
export default class AlbumsList extends Vue {
  private listeAlbums: AlbumInterface[];
  private filter: string;
  private switchValue: boolean;

  public constructor() {
    super();
    this.listeAlbums = [];
    this.filter = '';
    this.switchValue = false;
  }

  async mounted() {
    this.listeAlbums = await AlbumsRestService.getAllAlbums();
  }

  public toggleSwitch() {
    this.switchValue = !this.switchValue;
  }

  get listeFiltree() {
    if (this.filter) {
      return this.listeAlbums.filter((album) => album.userId.toString() === this.filter);
    }
    return this.listeAlbums;
  }
}
</script>

<style></style>
