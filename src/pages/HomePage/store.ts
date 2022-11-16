import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/plugins/vuex';
import { IDataset, IMethod, IModel } from './interfaces';

@Module({
    name: 'home',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})
class HomePageModule extends VuexModule {
    methodList: IMethod[] = [];
    datasetList: IDataset[] = [];
    modelList: IModel[] = [];

    @Action
    getMethodList() {
        const methodList = [
            {
                id: 1,
                name: 'Image Classification',
            },
            {
                id: 2,
                name: 'Object Detection',
            },
        ];
        this.SET_METHOD_LIST(methodList);
    }

    @Action
    getDatasetList() {
        const listDataset = [
            {
                id: 1,
                name: 'COCO Dataset',
            },
            {
                id: 2,
                name: 'ImageNet',
            },
        ];
        this.SET_DATASET_LIST(listDataset);
    }

    @Action
    getModelList() {
        const listModel = [
            {
                id: 1,
                name: 'Alexnet',
            },
            {
                id: 2,
                name: 'RestNet',
            },
        ];
        this.SET_MODEL_LIST(listModel);
    }

    @Mutation
    SET_METHOD_LIST(methodList: IMethod[]) {
        this.methodList = methodList;
    }

    @Mutation
    SET_DATASET_LIST(datasetList: IDataset[]) {
        this.datasetList = datasetList;
    }

    @Mutation
    SET_MODEL_LIST(modelList: IModel[]) {
        this.modelList = modelList;
    }
}

export const homePageModule = getModule(HomePageModule);
