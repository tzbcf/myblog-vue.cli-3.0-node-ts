/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:46:48
 * Description : 
 * -----
 * Last Modified: 2019-01-09 10:47:04
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
export interface ACTICLE_DETAILS{
    userName:string,
    type:string,
    title:string,
    content:string
}
export interface ACTICLE_LIST{
    page:number,
    pageIndex:number,
    startTime:string,
    endTime:string
}


