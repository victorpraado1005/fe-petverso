export default function formatDataToBrazilFormat(data) {
  const rawData = data.split('T');
  const auxData = rawData[0];
  const myArray = auxData.split('-');
  return data = myArray[2] + '/' + myArray[1] + '/' + myArray[0];
}
