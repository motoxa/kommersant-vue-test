<template>
  <ul class="list">
    <li
      v-for="user in users"
      :key="user.id"
      class="item"
    >
      <strong v-if="user.id === currentUserId">{{ user.name }}</strong>
      <a href="#" v-else @click.prevent="$emit('set-user', user.id)">{{ user.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: Array,
    currentUserId: Number,
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
}
</style>
