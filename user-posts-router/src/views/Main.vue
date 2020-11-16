<template>
  <div class="sidebar">
    <h2 class="caption">Пользователи</h2>
    <UserList
      :users="users"
      :current-user="currentUser"
    />
  </div>
</template>
<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss" scoped></style>
