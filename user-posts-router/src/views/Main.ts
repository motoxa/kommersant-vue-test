import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';
import UserList from '@/components/UserList.vue';

@Component({
  components: {
    UserList,
  },
})
export default class Main extends Vue {
  @Prop() private users!: IUser[];

  @Prop() private currentUserId!: number;

  /* eslint-disable */
  @Emit() private setUser(id: number): void {}
  /* eslint-enable */
}
