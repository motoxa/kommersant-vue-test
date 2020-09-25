<template>
  <div class="header">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      class="logo"
    >
    <div class="content">
      <h1 class="caption">{{ caption }}</h1>
      <p class="user">
        <span v-if="username">Пользователь: <strong>{{ username }}</strong></span>
        <span v-else>Выберите пользователя</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    caption: String,
    username: String,
  },
};
</script>

<style scoped>
.header {
  padding: 20px 30px;
  background-color: #333;
  color: #fff;
}

.logo {
  display: inline-block;
  width: 30px;
  margin-right: 20px;
  vertical-align: top;
}

.content {
  display: inline-block;
}

.caption {
  margin: 0 0 10px;
  font: 24px/1 sans-serif;
}

.user {
  margin: 0;
  font: 14px/1.2 sans-serif;
}
</style>
