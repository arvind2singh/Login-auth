import {checkNumber, checkPassword, checkName} from "./helper";

export function isNum(num) {
    if(num === '') {
      return false;
    } else if(!checkNumber(num)) {
        return false;
    } else if(num?.length !== 10) {
        return false;
      }else {
        return true;
    }
  }

  export function isPass(password) {
    if(password === '') {
      return false;
    } else if (!checkPassword(password)) {
      return false;
    } else {
      return true;
    }
  }

  export function isName(name) {
    if (!checkName(name)) {
        return false;
    } else {
      return true;
    }
  }