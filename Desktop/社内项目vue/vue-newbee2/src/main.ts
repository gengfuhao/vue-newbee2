import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
import router from "./router/router";

// createApp(App).use(store);
// createApp(App).mount("#app");
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

const app = createApp(App);

app.use(store, key);
app.use(router);
app.use(VueViewer);
app.mount("#app");
