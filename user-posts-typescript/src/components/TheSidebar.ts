import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import { IUser } from '../interfaces/IUser';
import UserList from './UserList.vue';

@Component({
  components: {
    UserList,
  },
})
export default class TheSidebar extends Vue {
  @Prop() private users!: IUser[];

  @Prop() private currentUserId!: number;

  @Emit() private setUser(id: number): void {}
}
