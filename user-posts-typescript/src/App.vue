<template>
  <div id="app">
    <TheHeader
      caption="Посты пользователей"
      :username="currentUserName"
    />
    <TheSidebar
      :users="users"
      :current-user-id="currentUserId"
      @set-user="setUser"
    />
    <TheContent
      :user="currentUser"
      :posts="userPosts"
    />
  </div>
</template>
<script src="./App.ts" lang="ts"></script>
<style src="./App.scss" lang="scss"></style>
