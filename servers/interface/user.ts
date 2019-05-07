/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 16:00:00
 * Description : 
 * -----
 * Last Modified: 2019-01-11 15:30:56
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
export interface REGISTER_USER{
    'userName':string,
    'email':string,
    'password':string,
    'authority':number
}

export interface LOGIN_USER{
    'userName':string,
    'password':string
}

