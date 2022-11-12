<template>
    <ElConfigProvider :locale="locale">
        <metainfo></metainfo>
        <router-view />
    </ElConfigProvider>
</template>
<script lang="ts">
import vi from '@/plugins/element-ui/locale/vi';
import { ElConfigProvider } from 'element-plus';
import { computed } from 'vue';
import { Options, setup, Vue } from 'vue-class-component';
import { useMeta } from 'vue-meta';
import { RouteRecordName } from 'vue-router';
import { appModule } from './plugins/vuex/appModule';
@Options({
    components: {
        ElConfigProvider,
    },
})
export default class App extends Vue {
    locale = vi;

    // setup meta constant
    content = {};
    meta = setup(() => useMeta(computed(() => this.content)));

    created(): void {
        this.content = '';
    }

    setTokenSentToServer(token: string): void {
        window.localStorage.setItem('sentFirebaseMessagingToken', token ? token : '');
    }

    get pageName(): RouteRecordName {
        return this.$router.currentRoute?.value?.name || '';
    }

    setScreenWidth() {
        appModule.setScreenWidth(window.innerWidth);
    }

    mounted() {
        window.addEventListener('resize', this.setScreenWidth);
    }

    beforeUnmount() {
        window.removeEventListener('resize', this.setScreenWidth);
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
