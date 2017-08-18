exports.format = () => {
  let today = new Date().toString();
  // today = today.replace('T', ' ').replace('Z', '');
  return today;
}
