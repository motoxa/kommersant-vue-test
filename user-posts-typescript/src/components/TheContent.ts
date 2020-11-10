import { Component, Prop, Vue } from 'vue-property-decorator';
import { IUser } from '../interfaces/IUser';
import { IPost } from '../interfaces/IPost';
import UserPosts from './UserPosts.vue';

@Component({
  components: {
    UserPosts,
  },
})
export default class TheContent extends Vue {
  @Prop() private user!: IUser;

  @Prop() private posts!: IPost[];
}
