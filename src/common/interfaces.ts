import { AxiosResponse } from 'axios';
import { HttpStatus, OrderDirection } from './constants';
export interface IBodyResponse<T> extends AxiosResponse {
    success: boolean;
    isRequestError?: boolean;
    code: HttpStatus;
    message: string;
    data: T;
    error?: { key: string; message: string; errorCode: HttpStatus };
}

export interface ILoginForm {
    identifier: string;
    password: string;
}

export interface IChangePasswordForm {
    newPassword: string;
}

export interface IRegisterForm {
    username: string;
    email: string;
    password: string;
}

export interface ICommonGetListQuery {
    page?: number;
    limit?: number;
    keyword?: string;
    orderDirection?: OrderDirection;
}

export interface ICommonGetListResponse<T> {
    items: T[];
    totalItems: number;
}

export interface IYupError {
    i18nKey?: string;
    message?: string;
    params?: Record<string, string>;
}
