<template>
  <div
    class="content"
    v-if="user"
  >
    <h2 class="caption">
      Посты пользователя <strong>{{ user.username }}</strong> ({{ user.name }})
    </h2>
    <UserPosts :posts="posts"/>
  </div>
  <div class="content" v-else>
    <h2 class="caption">Выберите пользователя, чтобы увидеть его посты</h2>
    <router-link :to="{name: 'Main'}">This is the link to Main</router-link>
  </div>
</template>
<script src="./Posts.ts" lang="ts"></script>
<style src="./Posts.scss" lang="scss" scoped></style>
