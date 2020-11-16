import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';
import { IPost } from '@/interfaces/IPost';

@Component
export default class UserPosts extends Vue {
  @Prop() private currentUser!: IUser | null;

  private posts: IPost[] = [];

  private get currentPostId(): number | 0 {
    return parseInt(this.$route.params.postId, 10) || 0;
  }

  private get userPosts(): IPost[] | null {
    const currentUserId = this.currentUser ? this.currentUser.id : 0;
    if (currentUserId) {
      return this.posts.filter((post: IPost) => post.userId === currentUserId);
    }
    return null;
  }

  private created(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.posts = data;
      });
  }
}
