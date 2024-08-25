import { createSSRApp } from "vue";
import App from "./App.vue";
import './pk-ui/style/index.less';


export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
