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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserList extends Vue {
  @Prop() private users!: array;
  @Prop() private currentUserId!: number;
}
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  margin: 0 0 5px;
}
</style>
