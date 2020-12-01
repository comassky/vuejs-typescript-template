<template>
  <v-container>
    <UsersList />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UsersList from '@/components/users/UsersList.vue'

@Component({
  components: {
    UsersList
  }
})
export default class UsersView extends Vue {}
</script>
