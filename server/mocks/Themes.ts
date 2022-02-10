import { imageMapper } from "../mappers/ImageMapper";
import { Theme } from "lib/types/Theme";

const themes = (locale: string = "en"): Array<Theme> => {
  return [
    {
      heroImage: imageMapper(
        `https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blt3b27869f7af12590/61b16049b9cabc6d40adc29f/WALKING_theme.jpg`,
        "Walking",
        522,
        652
      ),
      url: `/${locale}/theme/walking`,
      title: "Walking",
    },
    {
      heroImage: imageMapper(
        `https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blt935ac2393d5262ac/61b15e27bfa854206a680d99/CYCLING_theme.jpg`,
        "Cycling",
        522,
        652
      ),
      url: `/${locale}/theme/cycling`,
      title: "Cycling",
    },
    {
      heroImage: imageMapper(
        `https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blt5b2f3069fd11ae53/61b15f7eb01b0c687066d3fe/FAMILY_theme.jpg`,
        "Family",
        522,
        652
      ),
      url: `/${locale}/theme/family`,
      title: "Family",
    },
    {
      heroImage: imageMapper(
        `https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blte903a88d73d291d0/61b1608258562f69d76c30ad/WILDLIFE_theme.jpg`,
        "Wildlife",
        522,
        652
      ),
      url: `/${locale}/theme/wildlife`,
      title: "Wildlife",
    },
    {
      heroImage: imageMapper(
        `https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blt9f93eee6c52d31a4/61b16014d461606efe8e6b53/POLAR_theme.jpg`,
        "Polar",
        522,
        652
      ),
      url: `/${locale}/theme/polar`,
      title: "Polar",
    },
    {
      heroImage: imageMapper(
        `https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blt17ef7bcd89309b66/61b15fbfbfa854206a680d9d/FOOD_theme.jpg`,
        "Food",
        522,
        652
      ),
      url: `/${locale}/theme/food`,
      title: "Food",
    },
  ];
};

export default themes;
