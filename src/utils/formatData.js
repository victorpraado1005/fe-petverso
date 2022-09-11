export default function formatData(data) {
  return data
    .replace(/\D/g, '')
    // .replace(/^(\d{2})\B/, '$1/')
    .replace(/(\d{2})(\d{2})/, '$1/$2/');
}
