<template>
  <div class="sidebar">
    <h2 class="caption">Пользователи</h2>
    <router-link :to="{name: 'Posts'}">This is the link to posts</router-link>
    <UserList
      :users="users"
      :current-user-id="currentUserId"
      @set-user="setUser"
    />
  </div>
</template>
<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss" scoped></style>
