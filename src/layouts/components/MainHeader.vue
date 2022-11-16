<template>
    <div class="main-header">
        <div class="header-icon">
            <img
                class="img-fluid"
                style="width: 40px; height: 40px"
                src="../../assets/app_logo.png"
            />
        </div>
        <div class="header-content">
            <div class="team-title">
                {{ $t('app.header.title') }}
            </div>
            <div class="author">
                {{ $t('app.header.author') }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class MainHeader extends Vue {}
</script>
<style lang="scss" scoped>
.main-header {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
}
.header-icon {
    margin-left: 24px;
    margin-right: 20px;
}
.header-content {
    .team-title {
        font-size: 25px;
        color: #b3a369;
        font-weight: 300;
        line-height: 100%;
        font-family: Acumin, 'Helvetica Neue', sans-serif;
    }
    .author {
        font-size: 15px;
        color: #b3a369;
        font-family: Acumin, 'Helvetica Neue', sans-serif;
    }
}
</style>
