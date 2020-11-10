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
<script src="./TheHeader.ts" lang="ts"></script>
<style src="./TheHeader.scss" lang="scss" scoped></style>
