/**
 * FileName : admin.ts
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-22 14:34:18
 * Description :
 * -----
 * Last Modified: 2019-05-05 10:54:26
 * Modified By :
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
 */

import Home from '../views/admin/Home.vue';
import Index from '../views/admin/Index.vue';
import About from '../views/admin/About.vue';
import Upload from '../components/admin/upload.vue';

export default {
  path: '/admin',
  name: 'admin',
  component: Home,
  children: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: 'about',
      name: 'about',
      component: About,
    },
    {
      path: 'upload',
      name: 'upload',
      component: Upload,
    },
  ],
};
