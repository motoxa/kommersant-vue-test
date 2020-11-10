<template>
  <div class="sidebar">
    <h2 class="caption">Пользователи</h2>
    <UserList
      :users="users"
      :current-user-id="currentUserId"
      @set-user="setUser"
    />
  </div>
</template>
<script src="./TheSidebar.ts" lang="ts"></script>
<style src="./TheSidebar.scss" lang="scss" scoped></style>
