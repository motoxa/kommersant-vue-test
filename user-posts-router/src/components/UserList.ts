import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';

@Component
export default class UserList extends Vue {
  @Prop() private users!: IUser[];

  @Prop() private currentUserId!: number;

  /* eslint-disable */
  @Emit() private setUser(id: number): void {}
  /* eslint-enable */
}
