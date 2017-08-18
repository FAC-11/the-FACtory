exports.capitalise = (string) => {
  let stringArray = string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return stringArray.join(' ');
}
