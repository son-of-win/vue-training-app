<template>
    <div class="main-filter">
        <div class="filter">
            <div class="filter-task">
                <div class="label-content">{{ $t('home.filter.label.method') }}</div>
                <el-select
                    v-model="selectedMethod"
                    :placeholder="$t('home.filter.label.methodPlaceholder')"
                    size="large"
                >
                    <el-option
                        v-for="item in methodList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    />
                </el-select>
            </div>
            <div class="filter-dataset">
                <div class="label-content">{{ $t('home.filter.label.dataset') }}</div>
                <el-select
                    v-model="selectedDataset"
                    :placeholder="$t('home.filter.label.datasetPlaceholder')"
                    size="large"
                >
                    <el-option
                        v-for="item in datasetList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    />
                </el-select>
            </div>
            <div class="filter-model">
                <div class="label-content">{{ $t('home.filter.label.model') }}</div>
                <el-select
                    v-model="selectedModel"
                    :placeholder="$t('home.filter.label.modelPlaceholder')"
                    size="large"
                >
                    <el-option
                        v-for="item in modelList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    />
                </el-select>
            </div>
            <el-button class="submit-btn" round>Confirm</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { homePageModule } from '../store';
@Options({
    components: {},
})
export default class MethodFilter extends Vue {
    selectedMethod = '';
    selectedDataset = '';
    selectedModel = '';

    created() {
        homePageModule.getMethodList();
        homePageModule.getDatasetList();
        homePageModule.getModelList();
    }
    get methodList() {
        return homePageModule.methodList;
    }

    get datasetList() {
        return homePageModule.datasetList;
    }

    get modelList() {
        return homePageModule.modelList;
    }
}
</script>
<style lang="scss" scoped>
.filter {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-left: 20px;
}
.label-content {
    font-weight: bold;
    line-height: 200%;
    text-align: start;
}

.filter-task,
.filter-dataset,
.filter-model {
    margin-right: 30px;
}
:deep(.submit-btn) {
    margin-top: 35px;
    background-color: blue !important;
    color: white !important;
    border: none;
    &:hover {
        background-color: yellow !important;
    }
    width: 100px;
    height: 35px;
}
</style>
