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
      <a
        href="#"
        v-else
        @click.prevent="$emit('set-user', user.id)"
      >
        {{ user.name }}
      </a>
    </li>
  </ul>
</template>
<script src="./UserList.ts" lang="ts"></script>
<style src="./UserList.scss" lang="scss" scoped></style>
