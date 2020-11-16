/*

TODO:
– Подгрузка или кеширование

*/

import { Component, Vue } from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  private users: IUser[] = [];

  private get currentUser(): IUser | null {
    return this.users.find((user: IUser) => user.username === this.$route.params.username) || null;
  }

  private get currentUserName(): string {
    if (this.currentUser) {
      return this.currentUser.username;
    }
    return '';
  }

  private created(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      });
  }
}
