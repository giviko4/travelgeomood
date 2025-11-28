// src/data/galleryData.js (ავტომატური ვერსია)

// 1. Vite-ის ეს ფუნქცია ავტომატურად პოულობს gallery ფოლდერში ყველა jpg, jpeg, png და webp სურათს.
// { eager: true } ნიშნავს, რომ სურათები მაშინვე ჩაიტვირთება.
const imageModules = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png,webp}', { eager: true });

// 2. მიღებულ ობიექტს ვაქცევთ ჩვენთვის სასურველ მასივად.
export const galleryImages = Object.entries(imageModules).map(([path, module], index) => {
  // ფაილის სრული სახელი (მაგ: 'gallery-1.jpg')
  const filename = path.split('/').pop(); 
  
  // ფაილის სახელი გაფართოების გარეშე (მაგ: 'gallery-1')
  // ამას გამოვიყენებთ alt ტექსტისთვის
  const altText = filename.split('.').slice(0, -1).join('.');

  return {
    id: index + 1,
    src: module.default, // Vite აქ ავტომატურად სვამს სურათის სწორ მისამართს
    alt: {
      // შეგიძლიათ ეს ლოგიკა დატოვოთ ან წაშალოთ და უბრალოდ altText გამოიყენოთ
      en: altText.replace(/-/g, ' '), // ტირეებს ცვლის ცარიელი ადგილით
      ru: altText.replace(/-/g, ' ')
    }
  };
});