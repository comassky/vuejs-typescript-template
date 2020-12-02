<template>
  <v-container>
    <AlbumsList />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlbumsList from '@/components/albums/AlbumsList.vue';

@Component({
  components: {
    AlbumsList
  }
})
export default class AlbumsView extends Vue {}
</script>
