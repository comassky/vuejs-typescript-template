<template>
  <v-container>
    <PostsList></PostsList>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PostsView extends Vue {}
</script>
