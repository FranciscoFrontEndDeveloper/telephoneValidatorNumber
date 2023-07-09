function telephoneCheck(str) {
  const numberConditions = {
    regExpNumber2: /[0-9]/gi,
  };
  // console.log(numberConditions.regExpNumber2.source)
  // const regExpNumber = /[0-9]/gi;
  // let prueba = regExpNumber.exec(str);
  // let prueba2 = regExpNumber.test(str);
  let prueba3 = numberConditions.regExpNumber2.test(str);
  console.log(prueba3);
  // if (prueba2) {
  //   console.log(true)
  //   return true
  // } else {
  //   console.log(false)
  //   return false
  // }
}

telephoneCheck("555-555-5555");
