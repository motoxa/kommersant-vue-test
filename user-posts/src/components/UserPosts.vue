<template>
  <ul class="list">
    <li
      v-for="user in [{id: 1, name: 'Name 1'}, {id: 2, name: 'Name 2'}]"
      :key="user.id"
      class="item"
    >
      {{ user.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserPosts',
};
</script>

<style scoped>
</style>
