<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Id</th>
              <th class="text-center">Title</th>
              <th class="text-center">Body</th>
              <th class="text-center">User</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in listePosts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.body }}</td>
              <td>
                <User :userId="post.userId" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { PostInterface } from '@/Interfaces/PostInterface'
import Component from 'vue-class-component'
import { Prop, Vue } from 'vue-property-decorator'
import PostApiService from '@/services/PostApiServices'
import User from '@/components/users/User.vue'

@Component({ components: { User } })
export default class PostsList extends Vue {
  private listePosts: PostInterface[]

  constructor() {
    super()
    this.listePosts = []
  }

  async mounted() {
    this.listePosts = await PostApiService.getAllPosts()
  }
}
</script>

<style></style>
