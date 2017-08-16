exports.format = () => {
  let today = new Date().toString();
  // today = today.replace('T', ' ').replace('Z', '');
  console.log("this is today: ", today);
  return today;
}
