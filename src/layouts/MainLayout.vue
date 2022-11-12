<template>
    <div class="main-layout">
        <MainHeader />
        <div class="app-content">
            <router-view v-slot="{ Component }" :key="new Date()">
                <component :is="Component" />
            </router-view>
        </div>
        <BaseScrollToTopButton />
        <BaseIconChatGroup />
        <MainFooter />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue';

@Options({
    components: {
        MainHeader,
        MainFooter,
    },
})
export default class MainLayout extends Vue {
    created() {
        this.loadData();
    }

    loadData() {
        console.log('noname');
    }
}
</script>
<style lang="scss" scoped>
.main-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.app-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
