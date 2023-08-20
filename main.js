function telephoneCheck(str) {
  const regexNumbers = /\d/g;
  const regexCaracts = /-{1,}/g;
  const regexParects = /^\(..........\)$/g;
  const regexguion = /^\-/g;
  const regexNumInit = /^\d{2,}/gm
  const coinci1 = regexNumbers.test(str);
  const coinci2 = regexCaracts.test(str);
  const coinci3 = regexParects.test(str);
  const coinci4 = regexguion.test(str);
  const coinci5 = regexNumInit.test(str)
  var total;
  // console.log(coinci1);
  // console.log(coinci2);
  // console.log(coinci3);
  // console.log(coinci4);
   console.log(coinci5);
  if (coinci1 && coinci2) {
    if (coinci4) {
      console.log(false);
      total = false
    } else {
      console.log(true);
      total = true
    }
  } else if (coinci3) {
    console.log(false);
    total = false
  } else {
    console.log(false);
    total = false
  }
  return total;
}

telephoneCheck("555)-555-5555");
telephoneCheck("55 55-55-555-5");
telephoneCheck("11 555-555-5555");
// telephoneCheck("555)-555-5555") true
// telephoneCheck("55 55-55-555-5") true
// telephoneCheck("11 555-555-5555") true

/*
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false.
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
telephoneCheck("55 55-55-555-5") should return false.
telephoneCheck("11 555-555-5555") should return false.
*/
