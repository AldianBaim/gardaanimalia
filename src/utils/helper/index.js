export default function convertToTitleCase(text) {
  // Pecah text berdasarkan tanda penghubung (-)
  let word = text?.split("-");

  // Ubah huruf pertama setiap word menjadi huruf besar
  for (let i = 0; i < word?.length; i++) {
    word[i] = word[i]?.charAt(0).toUpperCase() + word[i]?.slice(1);
  }

  // Gabungkan kembali menjadi string dengan spasi
  return word?.join(" ");
}
