import {
  Component,
  Prop,
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

  @Prop() private currentUser!: IUser | null;
}
