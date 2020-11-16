<template>
  <ul
    v-if="userPosts && userPosts.length"
    class="list"
  >
    <li
      v-for="(post, index) in userPosts"
      :key="index"
      class="item"
    >
      <div
        class="post"
        v-if="post.id === currentPostId"
      >
        <h2 class="title">
          {{ post.title }}
        </h2>
        <pre class="body">{{ post.body }}</pre>
      </div>
      <router-link
        v-else
        :to="`/users/${currentUser.username}/posts/${post.id}`"
        class="title"
      >
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <div v-else>
    <div v-if="currentUser">
      У пользователя нет постов
    </div>
    <div v-else>
      Пользователь не найден
    </div>
  </div>
</template>
<script src="./UserPosts.ts" lang="ts"></script>
<style src="./UserPosts.scss" lang="scss" scoped></style>
