<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Id</th>
              <th class="text-center">Name</th>
              <th class="text-center">UserName</th>
              <th class="text-center">Photos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in listeUsers" :key="user.id">
              <td>{{ user.user.id }}</td>
              <td>{{ user.user.name }}</td>
              <td>{{ user.user.username }}</td>
              <td>{{ user.nombrePhoto }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import UserApiService from '@/services/UserApiServices';
import { UserInterface } from '@/Interfaces/UserInterface';
import AlbumsApiService from '@/services/AlbumsApiServices';
import { AlbumInterface } from '@/Interfaces/AlbumInterface';
import PhotosApiServices from '@/services/PhotosApiServices';
import { PhotoInterface } from '@/Interfaces/PhotoInterface';

@Component({ components: {} })
export default class UsersList extends Vue {
  private listeUsers: { user: UserInterface; nombrePhoto: number }[];

  constructor() {
    super();
    this.listeUsers = [];
  }

  async mounted() {
    const users = await UserApiService.getAllUsers();
    users.forEach((user) => {
      this.listeUsers.push({
        user: user,
        nombrePhoto: 0
      });
      this.recuperationNombrePhotosByUser(user.id);
    });
  }

  private async recuperationNombrePhotosByUser(idUser: number) {
    // Récupération des albums d'un user
    const albums: AlbumInterface[] = await AlbumsApiService.getAllAlbumsOfUser(idUser);

    // On cherche le user
    const index = this.listeUsers.findIndex((user) => user.user.id === idUser);

    // On récupère les photos pour chaque albums
    albums.forEach(async (album) => {
      const photos: PhotoInterface[] = await PhotosApiServices.getAllPhotosOfAlbum(album.id);
      this.listeUsers[index].nombrePhoto += photos.length;
    });
  }
}
</script>

<style></style>
