export const imagesCategories: Record<string, string> = {
  smartphones:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  laptops:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  fragrances:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  skincare:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  groceries:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  "home-decoration":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  furniture: "/categories/furniture.png",
  tops: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  "womens-dresses":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  "womens-shoes":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  "mens-shirts":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  "mens-shoes":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  "mens-watches":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  "womens-watches":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  "womens-bags":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  "womens-jewellery":
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  sunglasses:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  automotive:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  motorcycle:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
  lighting:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
  // fragrances: "/categories/fragrance.png",
  // skincare: "/categories/skincare.png",
  // groceries: "/categories/groceries.png",
  // "home-decoration": "/categories/decor.png",
  // furniture: "/categories/furniture.png",
  // tops: "/categories/tops.png",
  // "womens-dresses": "/categories/woman-dresses.png",
  // "womens-shoes": "/categories/woman-shoes.png",
  // "mens-shirts": "/categories/man-shirts.png",
  // "mens-shoes": "/categories/man-shoes.png",
  // "mens-watches": "/categories/man-watch.png",
  // "womens-watches": "/categories/woman-watch.png",
  // "womens-bags": "/categories/bags.png",
  // "womens-jewellery": "/categories/woman-jewerly.png",
  // sunglasses: "/categories/glasses.png",
  // automotive: "/categories/automotive.png",
  // motorcycle: "/categories/motorcycle.png",
  // lighting: "/categories/lightning.png",
};

export const searchVars = {
  initial: {
    opacity: 0,
    right: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    right: 0,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    right: 100,
  },
};

export const productsVars = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 50,
    },
  },
  hovered: {
    scale: 1.01,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
    exit: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  },
};
