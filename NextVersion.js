const nextVersion = (version) => {
  //split the provided version using dot as a separator and returns an array of digits i.e "1.2.3" => ["1","2","3"]
  const versionDigits = version.split(".");

  //loop through the version digits, starting from the end
  for (let i = versionDigits.length - 1; i >= 0; i--) {
    let digit = parseInt(versionDigits[i]);

    //if the current digit is 9 and isn't the first digit then set the digit to 0
    //else increment the digit by one and exit the foor loop
    if (digit === 9 && i !== 0) {
      digit = 0;
      versionDigits[i] = digit;
    } else {
      digit++;
      versionDigits[i] = digit;
      break;
    }
  }
  //join elements of the array by the dot separator and return back the string
  return versionDigits.join(".");
};

module.exports = nextVersion;
