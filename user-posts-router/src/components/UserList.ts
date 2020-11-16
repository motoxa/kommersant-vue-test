import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { IUser } from '@/interfaces/IUser';

@Component
export default class UserList extends Vue {
  @Prop() private users!: IUser[];
}
