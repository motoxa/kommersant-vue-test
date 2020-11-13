import {
  Component,
  Prop,
  Watch,
  Vue,
} from 'vue-property-decorator';
import { IPost } from '@/interfaces/IPost';

@Component
export default class UserPosts extends Vue {
  @Prop() private posts!: IPost[];

  private currentPostId = 0;

  private setPost(id: number): void {
    this.currentPostId = id;
  }

  @Watch('posts')
  onPropertyChanged() {
    if (
      this.currentPostId > 0
      && this.posts.findIndex((post) => post.id === this.currentPostId) < 0
    ) {
      this.currentPostId = 0;
    }
  }
}
