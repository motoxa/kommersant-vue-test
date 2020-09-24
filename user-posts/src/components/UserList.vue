<template>
  <ul class="list">
    <li
      v-for="user in [{id: 1, name: 'Name 1'}, {id: 2, name: 'Name 2'}]"
      :key="user.id"
      class="item"
    >
      <a href="#" @click.prevent="">{{ user.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserList',
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
