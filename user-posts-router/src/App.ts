import { Component, Vue } from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';
import { IPost } from '@/interfaces/IPost';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  private users: IUser[] = [];

  private posts: IPost[] = [];

  private currentUserId = 0;

  private get currentUser(): IUser | null {
    if (this.currentUserId > 0) {
      return (
        this.users.find((user: IUser) => user.id === this.currentUserId) || null
      );
    }
    return null;
  }

  private get currentUserName(): string {
    if (this.currentUser) {
      return this.currentUser.username;
    }
    return '';
  }

  private get userPosts(): IPost[] | null {
    return this.posts.filter((post: IPost) => post.userId === this.currentUserId);
  }

  private setUser(id: number): void {
    this.currentUserId = id;
  }

  private created(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.posts = data;
      });
  }
}
