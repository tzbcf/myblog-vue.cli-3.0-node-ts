/**
 * FileName : rem.js
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-18 15:19:06
 * Description : 
 * -----
 * Last Modified: 2019-03-18 15:48:41
 * Modified By : 
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */
const setRem = () => {
  const docEl = document.documentElement
  const docWidth = document.body.clientWidth
  if (docWidth <= 420) {
    const screenWidth = docEl.clientWidth || window.screen.width || 360
    // 1080 PSD宽度(可变的)
    docEl.style.fontSize = (100 * screenWidth / 750) + 'px'
  }
}
window.onresize = () => {
  setRem()
}
