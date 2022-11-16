<template>
    <div class="main-content">
        <MethodFilter />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MethodFilter from '../components/MethodFilter.vue';
@Options({
    components: {
        MethodFilter,
    },
})
export default class HomePage extends Vue {}
</script>
<style lang="scss" scoped></style>
