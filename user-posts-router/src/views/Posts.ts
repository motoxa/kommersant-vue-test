import { Component, Prop, Vue } from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';
import UserPosts from '@/components/UserPosts.vue';

@Component({
  components: {
    UserPosts,
  },
})
export default class Posts extends Vue {
  @Prop() private currentUser!: IUser | null;
}
