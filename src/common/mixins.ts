import moment from 'moment';
import { Vue } from 'vue-class-component';
import { DATE_TIME_FORMAT, DEFAULT_LANGUAGE, PageName } from './constants';
import { IYupError } from './interfaces';
import { ElNotification } from 'element-plus';
import i18n from '@/plugins/vue-i18n';
import { pageview, event } from 'vue-gtag';

export class GlobalMixin extends Vue {
    // constants
    DATE_TIME_FORMAT = DATE_TIME_FORMAT;
    PageName = PageName;
    //
    parseDateTime(
        dateTime: Date | string,
        dateTimeFormat: string,
        language = DEFAULT_LANGUAGE,
    ): string {
        if (!moment(dateTime).isValid) {
            return '';
        }
        return moment(dateTime).locale(language).format(dateTimeFormat);
    }

    translateYupError(yupError: IYupError): string {
        if (!yupError) return '';
        if ((yupError as IYupError)?.i18nKey)
            return this.$t((yupError as IYupError)?.i18nKey as string, {
                ...((yupError as IYupError)?.params as Record<string, string>),
            });
        return this.$t(yupError as string);
    }

    showSuccessNotificationFunction(message: string, title?: string): void {
        ElNotification({
            type: 'success',
            title: title || (i18n.global.t('app.notification') as string),
            message: message,
        });
    }

    showErrorNotificationFunction(message: string, title?: string): void {
        ElNotification({
            type: 'error',
            title: title || (i18n.global.t('app.notification') as string),
            message: message,
        });
    }

    trackAccessPage(path: string) {
        pageview({ page_path: path });
    }

    removeAccents(str: string): string {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    }

    vietnameseStringInclude(str: string, keyword: string): boolean {
        return this.removeAccents(str.toLowerCase()).includes(
            this.removeAccents(keyword.toLowerCase()),
        );
    }
}
