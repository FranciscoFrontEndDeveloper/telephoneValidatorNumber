function telephoneCheck(str) {
  const phoneNumbers = str.split("");
  const onlyNumbers = phoneNumbers.filter((item) => item === "5");
  console.log(onlyNumbers);
  const onlyNoNumbers = phoneNumbers.filter((item) => item === "-");
  console.log(onlyNoNumbers);

  // return true;
}

telephoneCheck("555-555-5555");
