<template>
  <div class="sidebar">
    <h2 class="caption">Пользователи</h2>
    <UserList
      :users="users"
      :current-user-id="currentUserId"
      @set-user="setUser"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserList from './UserList.vue';

// export default {
//   name: 'TheSidebar',
//   props: {
//     users: Array,
//     currentUserId: Number,
//   },
//   methods: {
//     setUser(id) {
//       this.$emit('set-user', id);
//     },
//   },
//   components: {
//     UserList,
//   },
// };

@Component
export default class TheSidebar extends Vue {
  @Prop() private users!: array;
  @Prop() private currentUserId!: number;
}
</script>

<style scoped>
.sidebar {
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  width: 20%;
  padding: 30px 20px;
  background-color: #ccc;
}

.caption {
  margin: 0 0 10px;
  font: 18px/1.2 sans-serif;
  color: #666;
}
</style>
