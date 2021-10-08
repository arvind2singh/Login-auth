export function checkName(name) {
    const nameToValidate = name ? name : "";
    const nameRegexp = /^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/;
    const res = nameRegexp.test(nameToValidate);
    return res;
  }

  export function checkPassword(password) {
    const passwordToValidate = password ? password : "";
    const passwordRegexp =
      /(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[0-9])(?=.*[@_*&.])(?=.*[a-z]).*$/;
    const res = passwordRegexp.test(passwordToValidate);
    return res;
  }

  export function checkNumber(number) {
    const otpToValidate = number ? number : "";
    const otpRegexp = /^[0-9]*$/;
    const res = otpRegexp.test(otpToValidate);
    return res;
  }