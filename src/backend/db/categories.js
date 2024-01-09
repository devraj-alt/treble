import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

//import all category image
import amplifier from "../../images/categoryImage/amplifier.jpg";
import controller from "../../images/categoryImage/controller.jpg";
import drumSet from "../../images/categoryImage/drumSet.jpg";
import guitar from "../../images/categoryImage/guitar.jpg";
import guitarStand from "../../images/categoryImage/guitarStand.jpg";
import headphone from "../../images/category/headphone.jpg";
import keyboard from "../../images/categoryImage/keyboard.jpg";
import mixer from "../../images/categoryImage/mixer.jpg";
import saxophone from "../../images/categoryImage/saxophone.jpg";
import violin from "../../images/categoryImage/violin.jpg";

export const categories = [
  {
    _id: uuid(),
    categoryName: "guitar",
    image: guitar,
  },
  {
    _id: uuid(),
    categoryName: "keyboard",
    image: keyboard,
  },
  {
    _id: uuid(),
    categoryName: "drum",
    image: drumSet,
  },
  {
    _id: uuid(),
    categoryName: "stringInstruments",
    image: violin,
  },
  {
    _id: uuid(),
    categoryName: "windInstruments",
    image: saxophone,
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    image: guitarStand,
  },
  {
    _id: uuid(),
    categoryName: "studioGear",
    image: mixer,
  },
  {
    _id: uuid(),
    categoryName: "dj",
    image: controller,
  },
  {
    _id: uuid(),
    categoryName: "audioEquipment",
    image: headphone,
  },
  {
    _id: uuid(),
    categoryName: "amplifierAndSpeaker",
    image: amplifier,
  },
];
