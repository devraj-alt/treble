import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "guitar",
    name: "GUITAR",
  },
  {
    _id: uuid(),
    categoryName: "keyboard",
    name: "KEYBOARD",
  },
  {
    _id: uuid(),
    categoryName: "drum",
    name: "DRUM SET",
  },
  {
    _id: uuid(),
    categoryName: "stringInstruments",
    name: "STRING INSTRUMENTS",
  },
  {
    _id: uuid(),
    categoryName: "windInstruments",
    name: "WIND INSTRUMENTS",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    name: "ACCESSORIES",
  },
  {
    _id: uuid(),
    categoryName: "studioGear",
    name: "STUDIO GEARS",
  },
  {
    _id: uuid(),
    categoryName: "dj",
    name: "DJ GEARS",
  },
  {
    _id: uuid(),
    categoryName: "audioEquipment",
    name: "AUDIO EQUIPMENTS",
  },
  {
    _id: uuid(),
    categoryName: "amplifierAndSpeaker",
    name: "AMPLIFIERS",
  },
];
