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

<script>
import UserPosts from './UserPosts.vue';

export default {
  name: 'TheContent',
  props: {
    user: Object,
    posts: Array,
  },
  components: {
    UserPosts,
  },
};
</script>

<style scoped>
.content {
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  width: 70%;
  padding: 30px;
}

.caption {
  margin: 0 0 20px;
  font: 18px/1.2 sans-serif;
  color: #666;
}
</style>
