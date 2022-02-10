import Image from "lib/types/Image";

const imageSrcsetSizes = [
  "75w",
  "160w",
  "320w",
  "480w",
  "640w",
  "800w",
  "960w",
  "1080w",
  "1240w",
  "1400w",
  "1920w",
  "2560w",
];

export const imageMapper = (
  src: string,
  alt: string,
  width: number,
  height: number
): Image => {
  return {
    src: buildLowQualitySrc(src),
    alt,
    width,
    height,
    srcSet: buildSrcset(src),
  };
};

const buildSrcset = (src: string): Array<{ src: string; size: string }> => {
  return imageSrcsetSizes.map((size: string) => {
    const url = new URL(src);

    url.searchParams.delete("width");
    url.searchParams.delete("height");
    url.searchParams.append("width", size.slice(0, -1));
    url.searchParams.append("format", "pjpg");
    url.searchParams.append("auto", "webp");

    return {
      src: convertUrl(url),
      size,
    };
  });
};

const buildLowQualitySrc = (src: string): string => {
  const url = new URL(src);

  url.searchParams.delete("width");
  url.searchParams.delete("height");
  url.searchParams.append("width", "75");
  url.searchParams.append("quality", "35");
  url.searchParams.append("blur", "1");
  url.searchParams.append("format", "pjpg");
  url.searchParams.append("auto", "webp");

  return convertUrl(url);
};

const convertUrl = (url: URL): string => {
  return url.toString();
};
