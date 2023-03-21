export default function CutDateTime(data) {
  const myArray = data.split('T');
  let date = myArray[0];
  date = date.split('-');
  date = date[2] + '/' + date[1] + '/' + date[0];
  return date;
}
