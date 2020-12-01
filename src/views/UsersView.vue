<template>
  <v-container>
    <UsersList />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UsersView extends Vue {}
</script>
