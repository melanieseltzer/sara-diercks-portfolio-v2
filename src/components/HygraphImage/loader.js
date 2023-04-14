export const hygraphImageLoader = ({ src: handle, width }) =>
  // Hygraph uses Filestack api under the hood.
  // https://www.filestack.com/docs/api/processing/#file-conversions
  `https://media.graphassets.com/resize=width:${width}/auto_image/compress/${handle}`;
