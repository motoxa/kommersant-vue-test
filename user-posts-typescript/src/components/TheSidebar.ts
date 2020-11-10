import { Component, Prop, Vue } from 'vue-property-decorator';
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

  private setUser(id: number): void {
    this.$emit('set-user', id);
  }
}
