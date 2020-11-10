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
  </div>
</template>
<script src="./TheContent.ts" lang="ts"></script>
<style src="./TheContent.scss" lang="scss" scoped></style>
