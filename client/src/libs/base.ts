/**
 * FileName : base.ts
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-19 11:39:36
 * Description :
 * -----
 * Last Modified: 2019-03-19 11:46:00
 * Modified By :
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */

class Base {
  public isEmail(str: string): boolean {
    try {
      const myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+.)+[A-Za-z0-9]{2,3}$/;
      if (myReg.test(str)) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  public isNumberOrLetter(str: string): boolean {
    try {
      const regu = /^[0-9a-zA-Z]+$/;
      if (regu.test(str)) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  public findArrAttrData(arr: [], attr: string, value: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][attr] === value) {
        return arr[i];
      }
    }
  }
}
export default new Base();
