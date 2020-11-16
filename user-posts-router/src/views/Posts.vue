<template>
  <div class="content">
    <div class="breadcrumbs">
      <router-link to="/">
        Назад к списку пользователей
      </router-link>
    </div>
    <h2
      v-if="currentUser"
      class="caption"
    >
      Посты пользователя <strong>{{ currentUser.username }}</strong> ({{ currentUser.name }})
    </h2>
    <UserPosts
      :current-user="currentUser"
    />
  </div>
</template>
<script src="./Posts.ts" lang="ts"></script>
<style src="./Posts.scss" lang="scss" scoped></style>
