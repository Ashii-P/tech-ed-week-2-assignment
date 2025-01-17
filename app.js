const galleryContainer = document.getElementById("galleryContainer");
const viewImage = document.getElementById("viewImage");

let images = [
  {
    src: "/asset/japan_img_1.jpg",
    srcset: [
      "/asset/japan_img_1_400.jpeg 800w",
      "/asset/japan_img_1_200.jpeg 400w",
    ],
    alt: "A serene close-up of a woman's face bathed in warm sunlight, highlights the glow on her face, and the gloss on her eyelids and lips",
  },
  {
    src: "/asset/japan_img_2.jpg",
    srcset: [
      "/asset/japan_img_2_400.jpeg 800w",
      "/asset/japan_img_2_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
  {
    src: "/asset/japan_img_3.jpg",
    srcset: [
      "/asset/japan_img_3_400.jpeg 800w",
      "/asset/japan_img_3_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
  {
    src: "/asset/japan_img_4.jpg",
    srcset: [
      "/asset/japan_img_4_400.jpeg 800w",
      "/asset/japan_img_4_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
  {
    src: "/asset/japan_img_5.jpg",
    srcset: [
      "/asset/japan_img_5_400.jpeg 800w",
      "/asset/japan_img_5_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
  {
    src: "/asset/japan_img_6.jpg",
    srcset: [
      "/asset/japan_img_6_400.jpeg 800w",
      "/asset/japan_img_6_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
  {
    src: "/asset/japan_img_7.jpg",
    srcset: [
      "/asset/japan_img_7_400.jpeg 800w",
      "/asset/japan_img_7_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
  {
    src: "/asset/japan_img_8.jpg",
    srcset: [
      "/asset/japan_img_8_400.jpeg 800w",
      "/asset/japan_img_8_200.jpeg 400w",
    ],
    alt: "The woman’s face is partially turned, allowing the sunlight to accentuate the profile of her cheekbone and jawline. The warm light glimmers off her smooth, glowing skin, while the soft shadows add depth and elegance to the composition",
  },
];

function createGallery() {
  for (const image of images) {
    let imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.srcset = image.srcset;
    imageElement.alt = image.alt;
    imageElement.addEventListener("click", function () {
      console.log(image);
      createBackground(image);
    });
    imageElement.setAttribute("tabindex", "0");
    galleryContainer.appendChild(imageElement);
  }
}
createGallery();

function createBackground(img) {
  viewImage.innerHTML = "";
  const background = document.createElement("img");
  background.src = img.src;
  background.alt = img.alt;
  viewImage.appendChild(background);
}
