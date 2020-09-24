<template>
  <div id="app">
    <TheHeader caption="Посты пользователей"/>
    <TheSidebar/>
    <TheContent/>
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
  created() {
    console.log('created', this);
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
