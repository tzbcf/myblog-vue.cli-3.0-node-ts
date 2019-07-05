/**
 * FileName : weChat.ts
 * ProjectName : myblog-vue.cli-3.0-node-ts
 * Author : terrorblade
 * Created Date: 2019-07-05 11:16:52
 * Description : 
 * -----
 * Last Modified: 2019-07-05 11:17:48
 * Modified By : 
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
 */

export interface USER_TOKEN{
    access_token: string,
    expires_in: number,
    refresh_token: string,
    openid: string,
    scope: string,
}
