export interface IMethod {
    id: number;
    name: string;
}

export interface IDataset {
    id: number;
    name: string;
    method?: IMethod;
}

export interface IModel {
    id: number;
    name: string;
    dataset?: IDataset;
}
