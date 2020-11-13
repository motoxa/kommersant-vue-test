<template>
  <ul class="list">
    <li
      v-for="(post, index) in posts"
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
      <a
        href="#"
        class="title"
        v-else
        @click.prevent="setPost(post.id)"
      >
        {{ post.title }}
      </a>
    </li>
  </ul>
</template>
<script src="./UserPosts.ts" lang="ts"></script>
<style src="./UserPosts.scss" lang="scss" scoped></style>
