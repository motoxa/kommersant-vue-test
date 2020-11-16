<template>
  <ul class="list">
    <li
      v-for="(user, index) in users"
      :key="index"
      class="item"
    >
      <router-link :to="`/users/${user.username}/posts`">
        {{ user.name }}
      </router-link>
    </li>
  </ul>
</template>
<script src="./UserList.ts" lang="ts"></script>
<style src="./UserList.scss" lang="scss" scoped></style>
