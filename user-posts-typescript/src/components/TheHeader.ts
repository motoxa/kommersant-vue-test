import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
  @Prop() private caption!: string;

  @Prop() private username!: string;
}
