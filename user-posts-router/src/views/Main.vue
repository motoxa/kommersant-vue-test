<template>
  <div class="sidebar">
    <h2 class="caption">Пользователи</h2>
    <!--params: {testVaiable: 'alala'}} should not be used because Posts.vue would receive that variable only if
    routing done through that link-->
    <router-link :to="{name: 'Posts', params: {testVaiable: 'alala'}}">
      This is the link to posts
    </router-link>
    <UserList
      :users="users"
      :current-user-id="currentUserId"
      @set-user="setUser"
    />
  </div>
</template>
<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss" scoped></style>
