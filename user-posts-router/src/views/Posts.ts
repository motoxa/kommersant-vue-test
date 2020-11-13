import { Component, Prop, Vue } from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';
import { IPost } from '@/interfaces/IPost';
import UserPosts from '@/components/UserPosts.vue';

@Component({
  components: {
    UserPosts,
  },
})
export default class Posts extends Vue {
  @Prop() private user!: IUser;

  @Prop() private testVaiable!: string;

  @Prop() private posts!: IPost[];
}
