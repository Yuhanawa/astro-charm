export function getImageSrc(image: any) {
  if (typeof image === "string") return image;

  if (typeof image === "object") {
    if ("skip" in image) return image.skip;
    else if ("src" in image) return image.src;
  }

  return null;
}
