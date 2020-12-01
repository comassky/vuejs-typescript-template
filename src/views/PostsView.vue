<template>
  <v-container>
    <PostsList></PostsList>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostsList from '@/components/posts/PostsList.vue'
import { component } from 'vue/types/umd'

@Component({ components: { PostsList } })
export default class PostsView extends Vue {}
</script>
