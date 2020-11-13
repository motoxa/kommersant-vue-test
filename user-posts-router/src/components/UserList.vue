<template>
  <ul class="list">
    <li
      v-for="(user, index) in users"
      :key="index"
      class="item"
    >
      <strong v-if="user.id === currentUserId">
        {{ user.name }}
      </strong>
      <router-link
        v-else
        to="{ path: 'posts', params: { id: user.id }}"
      >
        {{ user.name }}
      </router-link>
    </li>
  </ul>
</template>
<script src="./UserList.ts" lang="ts"></script>
<style src="./UserList.scss" lang="scss" scoped></style>
