const imageFiles = import.meta.glob('/public/images/gallery/*.{jpg,jpeg,png,gif}', { eager: true });

const images = Object.keys(imageFiles).map((key) => ({
  original: imageFiles[key].default,
  thumbnail: imageFiles[key].default.replace('/public/images/gallery', '/public/images/gallery/tm/'), 
}));

export default images;
