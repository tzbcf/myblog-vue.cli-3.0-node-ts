/**
 * FileName    : base.js
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-09 16:42:14
 * Description : ----- terrblase
 * Last Modified: 2019-01-10 10:08:05
-----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
class Base {
  isEmail (str) {
    const myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+.)+[A-Za-z0-9]{2,3}$/
    if (myReg.test(str)) return true
    return false
  }
  isNumberOrLetter (str) {
    const regu = /^[0-9a-zA-Z]+$/
    if (regu.test(str)) {
      return true
    }
    return false
  }
  findArrAttrData (arr, attr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][attr] === value) {
        return arr[i]
      }
    }
  }
}
export default new Base()
