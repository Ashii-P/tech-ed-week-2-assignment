const galleryContainer = document.getElementById("galleryContainer");
const viewImage = document.getElementById("viewImage");
const rightButton = document.createElement("button");
const leftButton = document.createElement("button");

let images = [
  {
    src: "/asset/norway_img_1.jpg",
    srcset: [
      "/asset/norway_img_1_2000.jpeg 2000w",
      "/asset/norway_img_1_1000.jpeg 1000w",
      "/asset/norway_img_1_500.jpeg 500w",
      "/asset/norway_img_1_200.jpeg 200w",
    ],
    alt: "A serene first person view of the front of a kayak on a large lake with looming mountains on both sides. This photo is taken in Norway.",
  },
  {
    src: "/asset/norway_img_2.jpg",
    srcset: [
      "/asset/norway_img_2_2000.jpeg 2000w",
      "/asset/norway_img_2_1000.jpeg 1000w",
      "/asset/norway_img_2_500.jpeg 500w",
      "/asset/norway_img_2_200.jpeg 200w",
    ],
    alt: "A picturesque coastal scene with red cabins perched on stilts along a rocky shoreline. Towering grey mountains dominate the background. This photo is taken in Norway.",
  },
  {
    src: "/asset/norway_img_3.jpg",
    srcset: [
      "/asset/norway_img_3_2000.jpeg 2000w",
      "/asset/norway_img_3_1000.jpeg 1000w",
      "/asset/norway_img_3_500.jpeg 500w",
      "/asset/norway_img_3_200.jpeg 200w",
    ],
    alt: "Picturesque white wooden buildings with red-tiled roofs. A tall, pointed church steeple rises in the background, and the houses are adorned with flowers and picket fences. The lush green hills surround the buildings from the back.",
  },
  {
    src: "/asset/norway_img_4.jpg",
    srcset: [
      "/asset/norway_img_4_2000.jpeg 2000w",
      "/asset/norway_img_4_1000.jpeg 1000w",
      "/asset/norway_img_4_500.jpeg 500w",
      "/asset/norway_img_4_200.jpeg 200w",
    ],
    alt: "A coastal village surrounded by dramatic mountain peaks and icy waters. Small red cabins dot the rocky shoreline, creating a striking contrast against the muted landscape of orange and grey rocks. Snow-covered mountains can be seen in the distance under an overcast sky.",
  },
  {
    src: "/asset/norway_img_5.jpg",
    srcset: [
      "/asset/norway_img_5_2000.jpeg 2000w",
      "/asset/norway_img_5_1000.jpeg 1000w",
      "/asset/norway_img_5_500.jpeg 500w",
      "/asset/norway_img_5_200.jpeg 200w",
    ],
    alt: "A village bathed in warm golden sunlight during sunrise or sunset. Traditional orange and red wooden cabins stand on stilts over calm water. Majestic snow-covered mountains dominate the background.",
  },
  {
    src: "/asset/norway_img_6.jpg",
    srcset: [
      "/asset/norway_img_6_2000.jpeg 2000w",
      "/asset/norway_img_6_1000.jpeg 1000w",
      "/asset/norway_img_6_500.jpeg 500w",
      "/asset/norway_img_6_200.jpeg 200w",
    ],
    alt: "A stunning image of  the Northern Lights dancing across the night sky, with vivid green and subtle purple hues illuminating the scene. Snow-capped mountains rise in the background, their reflection beautifully mirrored in the calm water below.",
  },
  {
    src: "/asset/norway_img_7.jpg",
    srcset: [
      "/asset/norway_img_7_2000.jpeg 2000w",
      "/asset/norway_img_7_1000.jpeg 1000w",
      "/asset/norway_img_7_500.jpeg 500w",
      "/asset/norway_img_7_200.jpeg 200w",
    ],
    alt: "A secluded beach surrounded by towering, rugged mountains, with snow patches. The sky is moody and overcast, as misty clouds cling to the mountain peaks. The emerald-green water contrasts beautifully with the dark tones of the landscape.",
  },
  {
    src: "/asset/norway_img_8.jpg",
    srcset: [
      "/asset/norway_img_8_2000.jpeg 2000w",
      "/asset/norway_img_8_1000.jpeg 1000w",
      "/asset/norway_img_8_500.jpeg 500w",
      "/asset/norway_img_8_200.jpeg 200w",
    ],
    alt: "A snow-covered mountain rises prominently on the right, the calm waters mirror the vibrant green and purples of the northern lights and surrounding scenery. This photo is taken in Norway.",
  },
  {
    src: "/asset/norway_img_9.jpg",
    srcset: [
      "/asset/norway_img_9_2000.jpeg 2000w",
      "/asset/norway_img_9_1000.jpeg 1000w",
      "/asset/norway_img_9_500.jpeg 500w",
      "/asset/norway_img_9_200.jpeg 200w",
    ],
    alt: "A Norwegian fjord setting, with verdant mountains towering over a small village. The dark cliffs on either side of the fjord contrast well with the vibrant green fields in the centre, where colourful houses and barns are nestled.",
  },
  {
    src: "/asset/norway_img_10.jpg",
    srcset: [
      "/asset/norway_img_10_2000.jpeg 2000w",
      "/asset/norway_img_10_1000.jpeg 1000w",
      "/asset/norway_img_10_500.jpeg 500w",
      "/asset/norway_img_10_200.jpeg 200w",
    ],
    alt: "A waterfront of Bryggen in Bergen, Norway. The colourful wooden houses, painted in shades of red, yellow, and white, stand in a neat row along the harbour, their reflections shimmering on the still water below. In the background, misty mountains rise, partially shrouded by low-hanging clouds.",
  },
  {
    src: "/asset/norway_img_11.jpg",
    srcset: [
      "/asset/norway_img_11_2000.jpeg 2000w",
      "/asset/norway_img_11_1000.jpeg 1000w",
      "/asset/norway_img_11_500.jpeg 500w",
      "/asset/norway_img_11_200.jpeg 200w",
    ],
    alt: "A aerial view of Ålesund, a town on Norway's west coast. The town is illuminated by warm lights that reflect on the calm waters of the surrounding fjords. Its unique layout stretches across several islands and nestled between dramatic mountains and the ocean.",
  },
  {
    src: "/asset/norway_img_12.jpg",
    srcset: [
      "/asset/norway_img_12_2000.jpeg 2000w",
      "/asset/norway_img_12_1000.jpeg 1000w",
      "/asset/norway_img_12_500.jpeg 500w",
      "/asset/norway_img_12_200.jpeg 200w",
    ],
    alt: "A vibrant yellow cabin standing against the backdrop of a dramatic mountain in the Lofoten Islands, Norway. The cabin's cheerful colour contrasts strikingly with the moody, overcast sky and the dark tones of the rocky landscape.",
  },
  {
    src: "/asset/norway_img_13.jpg",
    srcset: [
      "/asset/norway_img_13_2000.jpeg 2000w",
      "/asset/norway_img_13_1000.jpeg 1000w",
      "/asset/norway_img_13_500.jpeg 500w",
      "/asset/norway_img_13_200.jpeg 200w",
    ],
    alt: "A yellow house surrounded by a lush field of wildflowers under a dramatic, cloudy sky. The house is nestled in the natural beauty of Norway's rugged landscape, with towering, mist-shrouded mountains in the background.",
  },
  {
    src: "/asset/norway_img_14.jpg",
    srcset: [
      "/asset/norway_img_14_2000.jpeg 2000w",
      "/asset/norway_img_14_1000.jpeg 1000w",
      "/asset/norway_img_14_500.jpeg 500w",
      "/asset/norway_img_14_200.jpeg 200w",
    ],
    alt: "A solitary house standing against a dramatic natural backdrop. The worn white house glows warmly from the sunset light reflecting in its windows. It is surrounded by rolling green hills, with jagged mountains in the distance, partially veiled by soft, colourful mist.",
  },
  {
    src: "/asset/norway_img_15.jpg",
    srcset: [
      "/asset/norway_img_15_2000.jpeg 2000w",
      "/asset/norway_img_15_1000.jpeg 1000w",
      "/asset/norway_img_15_500.jpeg 500w",
      "/asset/norway_img_15_200.jpeg 200w",
    ],
    alt: "A breathtaking view of a Norwegian fjord village, nestled between towering, snow-capped mountains. The small red, white and yellow houses dot the shoreline, adding a vibrant contrast to the natural landscape. The calm water of the fjord reflects the cloudy sky with patches of sunlight.",
  },
  {
    src: "/asset/norway_img_16.jpg",
    srcset: [
      "/asset/norway_img_16_2000.jpeg 2000w",
      "/asset/norway_img_16_1000.jpeg 1000w",
      "/asset/norway_img_16_500.jpeg 500w",
      "/asset/norway_img_16_200.jpeg 200w",
    ],
    alt: "A image that beautifully captures the tranquil and dramatic atmosphere of a fjord during twilight in Norway. The deep blue tones of the sky and water create a cold ambiance, complemented by the snow-covered mountains. There is also wooden dock and a small boat, illuminated by warm artificial light.",
  },
];

let currentImage = 0;
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
  createBackground(images[currentImage]);
}
createGallery();

function createBackground(img) {
  viewImage.innerHTML = "";
  const background = document.createElement("img");
  background.src = img.src;
  background.alt = img.alt;
  viewImage.appendChild(background);
}

function createLeftButton() {
  const leftArrow = document.createTextNode("<");
  leftButton.appendChild(leftArrow);
  leftButton.setAttribute(
    "aria-label",
    "Click button to go to the previous image."
  );
  leftButton.setAttribute("tabindex", "0");
  leftButton.setAttribute("id", "prev");
  document.body.appendChild(leftButton);
}
createLeftButton();

function createRightButton() {
  const rightArrow = document.createTextNode(">");
  rightButton.appendChild(rightArrow);
  rightButton.setAttribute(
    "aria-label",
    "Click button to go to the next image."
  );
  rightButton.setAttribute("id", "next");
  rightButton.setAttribute("tabindex", "0");
  document.body.appendChild(rightButton);
}
createRightButton();

rightButton.addEventListener("click", function () {
  currentImage = (currentImage + 1) % images.length;
  changeViewImage();
});

leftButton.addEventListener("click", function () {
  currentImage = (currentImage - 1) % images.length;
  changeViewImage();
});
function changeViewImage() {
  createBackground(images[currentImage]);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentImage = (currentImage + 1) % images.length;
    changeViewImage;
  } else if (event.key === "ArrowLeft") {
    currentImage = (currentImage - 1) % images.length;
    changeViewImage;
  }
});
