<template>
  <div id="app">
    <Header
      caption="Посты пользователей"
      :username="currentUserName"
    />
    <router-view
      :users="users"
      :current-user="currentUser"
    />
  </div>
</template>
<script src="./App.ts" lang="ts"></script>
<style src="./App.scss" lang="scss"></style>
