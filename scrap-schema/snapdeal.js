const snapdeal = {
  root: "div.product-tuple-listing",
  name: {
    selector: "p.product-title",
    text: true,
  },
  link: {
    selector: "a.dp-widget-link",
    attr: "href",
  },
  image: {
    selector: "picture.picture-elem > source",
    attr: "srcset",
  },
  price: {
    selector: "span.product-price",
    text: "true",
  },
  marked_price: {
    selector: "span.product-desc-price",
    text: true,
  },
  discount: {
    selector: "div.product-discount > span",
    text: true,
  },
};

module.exports = snapdeal;
