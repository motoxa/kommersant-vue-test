<template>
  <div class="content">
    <h2 class="caption">Посты пользователя <strong>username</strong></h2>
    <UserPosts/>
  </div>
</template>

<script>
import UserPosts from './UserPosts.vue';

export default {
  name: 'TheContent',
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
  margin: 0 0 10px;
  font: 18px/1.2 sans-serif;
  color: #666;
}
</style>
