import { isObject } from './helpers';

// FEATURE: 后续支持 a.b.c
export default async (ctx, next) => {
    const dataField = ctx.config.dataField ?? ctx.dataField;
    if (ctx.response && isObject(ctx.response.data) && dataField) {
        ctx.filterData = ctx.response.data[dataField];
    }
    await next();
};
