// Cloudinary utility functions. Used to generate image URLS and transform them for responsive loading.

const CLOUD_NAME = 'diqmm4ogh';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const imgUrl = (publicId) =>
  `${BASE}/f_auto,q_auto,w_1400/${publicId}`;
