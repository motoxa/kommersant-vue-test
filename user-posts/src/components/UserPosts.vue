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
        <pre class="body">
          {{ post.body }}
        </pre>
      </div>
      <a
        href="#"
        class="title"
        v-else
        @click.prevent="currentPostId = post.id"
      >
        {{ post.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserPosts',
  props: {
    posts: Array,
  },
  data() {
    return {
      currentPostId: 0,
    };
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  margin-bottom: 10px;
}

.post {
  font: 14px/1.2 sans-serif;
}

.title {
  margin: 0 0 10px;
  font: bold 15px/1.2 sans-serif;
}

.body {
  margin: 0 0 20px;
  font: 14px/1.2 sans-serif;
}
</style>
