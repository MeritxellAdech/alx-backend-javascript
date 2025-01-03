// Edit an array buffer

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer);
  dataView.setInt8(position, value);
  return dataView;
}
