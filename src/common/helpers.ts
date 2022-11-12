import mapKeys from 'lodash/mapKeys';
import isPlainObject from 'lodash/isPlainObject';
import trim from 'lodash/trim';
import flatten from 'lodash/flatten';
import pick from 'lodash/pick';
import i18n from '@/plugins/vue-i18n';

export function isJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function trimObject(body: any): void {
    const trimValue = (item: any) => {
        mapKeys(item, (value, key) => {
            // remove string contain only space characters
            if (typeof value === 'string') {
                item[key] = value.trim();
            }

            // iterate array
            else if (Array.isArray(value)) {
                value.forEach((subValue, index) => {
                    // remove string contain only space characters
                    if (typeof subValue === 'string' && !trim(subValue as string)) {
                        value.splice(index, 1);
                    } else if (isPlainObject(subValue)) {
                        trimValue(subValue);
                    }
                });
            } else if (isPlainObject(value)) {
                trimValue(value);
            }
        });
    };

    trimValue(body);
}

export function translateYupError(
    yupError:
        | {
              i18nKey: string;
              params?: Record<string, string>;
          }
        | string,
): string {
    if (typeof yupError === 'string') {
        return i18n.global.t(yupError);
    }
    if (!yupError?.i18nKey) return '';
    return i18n.global.t(yupError?.i18nKey, { ...yupError?.params });
}

// transform resposne to vue-meta's form
export function transformMetaResponse(obj: any) {
    const res = [] as any[];
    delete obj.id;
    Object.keys(obj).forEach((key) => res.push(obj[key]));
    const flatRes = flatten(res).map((ele) =>
        pick(ele, ['name', 'content', 'itemprop', 'property']),
    );
    return flatRes;
}
