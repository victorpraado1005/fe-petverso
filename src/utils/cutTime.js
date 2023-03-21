export default function CutDateTime(data) {
  const myArray = data.split(':');
  return data = myArray[0] + ':' + myArray[1];
}
