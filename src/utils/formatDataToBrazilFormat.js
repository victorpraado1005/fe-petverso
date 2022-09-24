export default function formatDataToBrazilFormat(data) {
  const myArray = data.split('-');
  return data = myArray[2] + '/' + myArray[1] + '/' + myArray[0];
}
