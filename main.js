function telephoneCheck(str) {
  const numberConditions = {
    regExpNumber2: /[0-9]/gi,
    regExpCarac: /[()-?]/gi,
  };
  // let numbers0to9 = numberConditions.regExpNumber2.test(str);
  // let hyphenOrParenthesis = numberConditions.regExpCarac.test(str);
  // let hyphenOrParenthesis2 = numberConditions.regExpCarac.exec(str).input;
  // let prueba3 = numberConditions.regExpNumber2.exec(str);
  let strArray = str.split("");
  console.log(typeof strArray)
  let prueba2 = strArray.map((item) => parseInt(item));
  console.log(typeof prueba2)

// telephoneCheck("555-555-5555");

// telephoneCheck("555-5555");
// telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
// telephoneCheck("123**&!!asdf#");
// telephoneCheck("55555555");
// telephoneCheck("(6054756961)");
// telephoneCheck("2 (757) 622-7382");
// telephoneCheck("0 (757) 622-7382");
// telephoneCheck("-1 (757) 622-7382");
// telephoneCheck("2 757 622-7382");
// telephoneCheck("10 (757) 622-7382");
// telephoneCheck("27576227382");
// telephoneCheck("(275)76227382");
// telephoneCheck("2(757)6227382");
// telephoneCheck("2(757)622-7382");
// telephoneCheck("555)-555-5555");
// telephoneCheck("(555-555-5555");
// telephoneCheck("(555)5(55?)-5555");
// telephoneCheck("55 55-55-555-5");
// telephoneCheck("11 555-555-5555");
