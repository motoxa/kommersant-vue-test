<template>
  <div id="app">
    <TheHeader caption="Посты пользователей" :username="currentUserName"/>
    <TheSidebar :users="users" :current-user-id="currentUserId" @set-user="setUser"/>
    <TheContent :user="currentUser" :posts="userPosts"/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import TheContent from './components/TheContent.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
  },
  computed: {
    currentUser() {
      return this.getCurrentUser();
    },
    currentUserName() {
      const currentUser = this.getCurrentUser();
      if (currentUser) {
        return currentUser.username;
      }
      return '';
    },
    userPosts() {
      return this.posts.filter((post) => post.userId === this.currentUserId);
    },
  },
  methods: {
    getCurrentUser() {
      if (this.currentUserId > 0) {
        const currentUser = this.users.find((user) => user.id === this.currentUserId);
        if (currentUser) {
          return currentUser;
        }
        return null;
      }
      return null;
    },
    setUser(id) {
      this.currentUserId = id || 0;
    },
  },
  data() {
    return {
      users: [],
      posts: [],
      currentUserId: 0,
    };
  },
  created() {
    const vm = this;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        vm.users = data;
      });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        vm.posts = data;
      });
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font: 14px/1.2 sans-serif;
  color: #333;
}
</style>
