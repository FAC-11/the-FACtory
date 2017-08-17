exports.capitalise = (string) => {
  let stringArray = string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  console.log(stringArray.join(' '));
  return stringArray.join(' ');
}
