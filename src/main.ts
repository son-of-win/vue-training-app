import { Component, createApp } from 'vue';
import App from './App.vue';
import router from './plugins/vue-router';
import store from './plugins/vuex';
import plugins from './plugins';
import forEach from 'lodash/forEach';
import { getGlobalComponents } from './common/loadGlobalComponents';
import './assets/styles/bootstrap/bootstrap.min.css';
import './assets/styles/global.scss';
import { createMetaManager, defaultConfig } from 'vue-meta';
import VueGTag from 'vue-gtag';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App)
    .use(store)
    .use(router)
    .use(
        createMetaManager(false, {
            ...defaultConfig,
            meta: { tag: 'meta', nameless: true },
        }),
    )
    .use(plugins.i18n)

    .use(plugins.ElementUI, {
        i18n: (key: string) => {
            return plugins.i18n.global.t(key, plugins.i18n.global.locale);
        },
    })
    .use(VueGTag, {
        config: {
            id: `${process.env.VUE_APP_GA_MEASUREMENT_ID}`,
        },
    });
// load all components under the folder @/components as glolal components
forEach(getGlobalComponents(), (component, name) => {
    app.component(name, component as Component);
});

router.isReady().then(() => {
    app.mount('#app');
});
