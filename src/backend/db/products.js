import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

//Importing all images:
//Guitars
import yamahaF280 from "../../images/productsImage/guitars/YamahaF280AcousticRosewoodGuitar.jpg";
import vaultST1 from "../../images/productsImage/guitars/VaultST1PremiumElectricGuitarSunburst.jpg";
import ibanezGSR205 from "../../images/productsImage/guitars/IbanezGSR205BassGuitar5String.jpg";
//Keyboards
import yamahaPSRSX900 from "../../images/productsImage/keybords/YAMAHAPSRSX900MidLevelArrangerKeyboard.jpg";
import behringerDeepmind12 from "../../images/productsImage/keybords/BehringerDEEPMIND12TrueAnalog12VoicePolyphonicSynthesizer,jpg";
import rolandRP501R from "../../images/productsImage/keybords/RolandRP501RBlackDigitalPiano.jpg";
//Drums
import pearlDrumSet from "../../images/productsImage/drumsets/PearlDrumSet.jpg";
import clapboxCajon from "../../images/productsImage/drumsets/ClapboxCajonCB02Flow.jpg";
import octapad from "../../images/productsImage/drumsets/RolandOCTAPADSPD20PRODigitalPercussionPad.jpg";
//Violins
import dzStradCello from "../../images/productsImage/stringInstruments/DZStradCelloModel250.jpg";
import doubleBass from "../../images/productsImage/stringInstruments/DoubleBass.jpg";
import imagineaViolin from "../../images/productsImage/stringInstruments/ImagineaViolin.jpg";
//Wind Instruments
import sexophone from "../../images/productsImage/windInstruments/Sexophone.jpg";
import trumpets from "../../images/productsImage/windInstruments/Trumpets.jpg";
import flute from "../../images/productsImage/windInstruments/Flute.jpg";
//Accessories
import GrowWingsLightBrownGuitarBag from "../../images/productsImage/accessories/GrowWingsLightBrownGuitarBag.jpg";
import BajaaoDeluxe5PieceDrumkitGigBag from "../../images/productsImage/accessories/BajaaoDeluxe5PieceDrumkitGigBag.jpg";
import KadenceHeavyDutyDoubleXAdjustablePianoKeyboardStand from "../../images/productsImage/accessories/KadenceHeavyDutyDoubleXAdjustablePianoKeyboardStand.jpg";
import KeyboardGigBagCase from "../../images/productsImage/accessories/KeyboardGigBagCase.jpg";
import BoomArmMicrophoneStand from "../../images/productsImage/accessories/BoomArmMicrophoneStand.jpg";
import RUILVNFoldingMultiGuitarDisplayRack5GuitarStand from "../../images/productsImage/accessories/RUILVNFoldingMultiGuitarDisplayRack5GuitarStand.jpg";
import BajaaoProfesionalqualityXLRMaletoXLRFemaleBalancedMicrophoneCable from "../../images/productsImage/accessories/BajaaoProfesionalqualityXLRMaletoXLRFemaleBalancedMicrophoneCable.jpg";
import KadenceGuitarCable from "../../images/productsImage/accessories/KadenceGuitarCable.jpg";
import KEBILSHOPMicCable from "../../images/productsImage/accessories/KEBILSHOPMicCable.jpg";
import TAAPSEEAdapter from "../../images/productsImage/accessories/TAAPSEEAdapter.jpg";
import FourChannel3PinXLRSnakeMultiNetworkSnakeReceiver from "../../images/productsImage/accessories/FourChannel3PinXLRSnakeMultiNetworkSnakeReceiver.jpg";
import UGREEN3MM_MALETO6MM_MALECABLE from "../../images/productsImage/accessories/UGREEN3MM_MALETO6MM_MALECABLE.jpg";
import PLoynkAudioSpeakerCable from "../../images/productsImage/accessories/PLoynkAudioSpeakerCable.jpg";
//StudioGear
import RØDENT1Microphone from "../../images/productsImage/studioGear/RØDENT1Microphone.jpg";
import AKAIUSBMIDIKeyboardController from "../../images/productsImage/studioGear/AKAIUSBMIDIKeyboardController.jpg";
import YamahaMG16XUMixer from "../../images/productsImage/studioGear/YamahaMG16XUMixer.jpg";
//DJ
import PioneerDJController from "../../images/productsImage/dj/PioneerDJController.jpg";
//Audio Equipment
import BoseQuietcomfortHeadphones from "../../images/productsImage/audioEquipment/BoseQuietcomfortHeadphones.jpg";
import MarshallMajorHeadphone from "../../images/productsImage/audioEquipment/MarshallMajorHeadphone.jpg";
import SteinbergAudioInterface from "../../images/productsImage/audioEquipment/SteinbergAudioInterface.jpg";
//Amplifiers and Speakers
import YAMAHAPX5PowerAmplifier from "../../images/productsImage/amplifiersAndSpeaker/YAMAHAPX5PowerAmplifier.jpg";
import AhujaFrequencyAmplifier from "../../images/productsImage/amplifiersAndSpeaker/AhujaFrequencyAmplifier.jpg";
import PreSonusStudioMonitorSpeaker from "../../images/productsImage/amplifiersAndSpeaker/PreSonusStudioMonitorSpeaker.jpg";
import JBLEON710Speaker from "../../images/productsImage/amplifiersAndSpeaker/JBLEON710Speaker.jpg";

export const products = [
  {
    _id: uuid(),
    image: yamahaF280,
    name: "Yamaha F280 Guitar",
    price: 7400,
    categoryName: "guitar",
    details: [
      {
        patternName: "Acoustic Guitar",
        brand: "YAMAHA",
        colour: "Natural",
        aboutThisItem: [
          "TopMaterialType: Rosewood",
          "BackMaterialType: Rosewood",
          "BodyMaterial: Rosewood",
          "Rosewood fingerboard.",
          "Gloss Top, String Material: Stainless Steel.",
          "Side/Back: Matt, Fingerboard Radius - R400mm.",
          "40.5-inch guitar.",
          "Country of Origin: India.",
          "guitar_bridge_system: adjustable.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: vaultST1,
    name: "Vault ST1 Electric Guitar",
    price: 8599,
    categoryName: "guitar",
    details: [
      {
        patternName: "Electric Guitar",
        brand: "VAULT",
        colour: "Sunburst",
        aboutThisItem: [
          "TopMaterialType: Sycamore",
          "BackMaterialType: Maple Wood",
          "BodyMaterial: Sycamore",
          "The chrome plating on the guitar's hardware ensures corrosion resistance and immense durability.",
          "Double Action Truss Rod.",
          "High-Quality Design Pickups.",
          "High-Quality Tuners.",
          "This Product Comes With 3 Years Standard Warranty.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: ibanezGSR205,
    name: "Ibanez GSR205 5-String Bass Guitar",
    price: 27086,
    categoryName: "guitar",
    details: [
      {
        patternName: "Bass Guitar",
        brand: "Ibanez",
        colour: "Black",
        aboutThisItem: [
          "Body Material: Maple",
          "Size: Medium",
          "ItemDimensions: 116.8 x 7.6 x 33 Centimeters",
          "Neck Material: Maple",
          "Neck Type: GSR5",
          "Body: Agatha's body",
          "Frets: Medium frets",
          "Fingerboard: Rosewood",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: yamahaPSRSX900,
    name: "YAMAHA PSR-SX900 Keyboard",
    price: 115799,
    categoryName: "keyboard",
    details: [
      {
        patternName: "Digital Keyboard",
        brand: "	YAMAHA",
        colour: "Black",
        aboutThisItem: [
          "NumberOfKeys: 61",
          "Skill Level: All",
          "Special Feature: 	Touch screen",
          "THE NEXT LEVEL, PSR-SX Setting new standards in high-end Digital Workstation sound, design and user experience.",
          "The PSR SX has been meticulously crafted to intensify your performance and enjoyment.",
          "MUSIC WITHOUT COMPROMISE - Music offers unlimited possibilities and the PSR-SX is equipped to support your adventures to the boundaries of creativity.",
          "With a completely redesigned user interface, new assignable functions, joystick and Live Controllers, you can tailor the instruments functions and sound, wherever your musical journeys take you.",
          "POWERFUL FEATURE FOR LIVE PERFORMANCE.",
          "GET INSPIRATION WITH THE SOUND; When loaded into the keyboard, you can instantly access authentic new sounds, rhythms and backing in the musical style of your choice.",
          "Touchscreen Feature helps CONTROL YOUR MUSIC; You can even create your own voices based on your sample library.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: behringerDeepmind12,
    name: "Behringer DEEPMIND 12 Synthesizer",
    price: 113749,
    categoryName: "keyboard",
    details: [
      {
        patternName: "Synthesizer",
        brand: "Behringer",
        colour: "Black",
        aboutThisItem: [
          "ModelName: DEEPMIND 12",
          "ItemDimensions: 94 x 20.3 x 38.1 Centimeters",
          "ItemWeight: 10.43 Kilograms",
          "Classic polyphonic synthesizer with 12 true analogue voices for insanely fat and sounds.",
          "Four simultaneous world-class tc electronic and klark teknik fx with over 30 algorithms including reverb, chorus, flanger, phaser, delay and multi-band distortion.",
          "There are 12 voices with 2 oscs per voice with oscillator sync mode.",
          "Two lfos per voice with 7 waveform shapes, key sync, midi sync and envelope auto-triggering.",
          "Three ADSR generators per voice for control of vcf, vca and mod envelopes.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: rolandRP501R,
    name: "Roland RP501R Black Digital Piano",
    price: 95000,
    categoryName: "keyboard",
    details: [
      {
        patternName: "Electric Pianos",
        brand: "Roland",
        colour: "Black",
        aboutThisItem: [
          "NumberOfKeys: 88",
          "Portable",
          "Bluetooth Connectivity",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: pearlDrumSet,
    name: "Pearl Drum Set",
    price: 51300,
    categoryName: "drum",
    details: [
      {
        patternName: "Drum Set",
        brand: "Pearl",
        colour: "Jet Black",
        aboutThisItem: [
          "Material: Alloy Steel",
          "Complete Drum Set.",
          "et Includes-22x16 bass drum, 14x5.5 snare, 10x8 & 12x9 rack toms, 16x16 floor tom, cymbal stand, Hi-hat stand, snare stand, Two rack tom holder, kick pedal, drum throne, 16 inch crash/ride cymbal, 14inch Hi-hats, 2pair of maple drumsticks, and stick bag.",
          "Hardwood Drum Shells and Triple Flanged Steel Hoops-6-ply 7mm Poplar hardwood shell and a hand cut 45 degree bearing edge.",
          "Double Braced Stands- Each stand is height adjustable with die-cast tier joints, and all tilters lock to practically any position you adjust them to.",
          "Includes snare stand, cymbal stand, hi-hat stand, dual chain bass drum pedal, drum throne.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: clapboxCajon,
    name: "Clapbox Cajon CB02 Flow",
    price: 3699,
    categoryName: "drum",
    details: [
      {
        patternName: "Cajon",
        brand: "Clapbox",
        colour: "Black",
        aboutThisItem: [
          "Material: Wood",
          "Oak wood Tapa and Solid MDF shell, three sets of internal fixed snare wires.",
          "Crisp snare sound and perfect bass.",
          "Great built quality and smooth wood finish.",
          "Large legs to provide stability.",
          "Great for professionals and amateurs.",
        ],
      },
    ],
  },

  {
    _id: uuid(),
    image: octapad,
    name: "Roland OCTAPAD SPD-20",
    price: 59399,
    categoryName: "drum",
    details: [
      {
        patternName: "Octapad",
        brand: "Roland",
        colour: "Multi color",
        aboutThisItem: [
          "ModelName: SPD-20 PRO",
          "Pads :- Built-in Pads: 8, Instruments:- 900 instruments or greater",
          "Kits:- 200 (Preset: 100), Kit Chain :- 16 chains (16 steps per chain).",
          "Layer :- 2 layers per pad 2 layers x 2(Head/Rim) per external Trigger.",
          "Accessories Includes : Owner's Manual and AC Adaptor.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: dzStradCello,
    name: "Cello Model 250 Handmade",
    price: 236962,
    categoryName: "stringInstruments",
    details: [
      {
        patternName: "Cello",
        brand: "D Z Strad",
        colour: "Brown",
        aboutThisItem: [
          "Size: 4/4 - Full Size",
          "TopMaterialType: Ebony",
          "BackMaterialType: Ebony",
          "NumberofStrings: 4",
          "An easy-to-play cello that will bring years of enjoyment to any cellist",
          "Hard-carved pegs, tailpiece and chinkiest; Beautiful aged tonewoods, genuine ebony fingerboard and fittings",
          "Meticulous workmanship, and expert varnish work. This model captures the essence of the great Italian master, and gives us the tonal qualities.",
          "Perfect for the intermediate and advanced cello player",
          "100% Handmade, 100% hand oil-varnished.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: doubleBass,
    name: "Double Bass",
    price: 177840,
    categoryName: "stringInstruments",
    details: [
      {
        patternName: "Double Bass",
        brand: "THE VIOLIN STORE",
        colour: "Brown",
        aboutThisItem: [
          "TopMaterialType: Wood",
          "BackMaterialType: Wood",
          "Premium Craftsmanship.",
          "Rich and Resonant Sound.",
          "Versatile in Musical Genres.",
          "Comfortable Playability.",
          "Durable and Long-Lasting.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: imagineaViolin,
    name: "Violin",
    price: 3987,
    categoryName: "stringInstruments",
    details: [
      {
        patternName: "Violin",
        brand: "IMAGINEA",
        colour: "Brown",
        aboutThisItem: [
          "TopMaterialType: Maple",
          "BackMaterialType: Basswood",
          "Violin for Beginners.",
          "Come with a hard case to protect the assembled violin.",
          "Ebony fingerboard for rhythmic smooth playing.",
          "Violin Kit Includes: a 4/4 full-size violin, bow, rosin and carrying case. Made of basswood Maple sides & back, Glossy finish, safe and non-toxic, as beautiful as most stringed musical instruments.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: sexophone,
    name: "Sexophone",
    price: 13999,
    categoryName: "windInstruments",
    details: [
      {
        patternName: "Sexophone",
        brand: "MUSIQAA JAHAN",
        colour: "Gold",
        aboutThisItem: [
          "Material: Brass",
          "Model-SD02.",
          "Mounting Hardware-Gloves, Case.",
          "Country of Origin India.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: trumpets,
    name: "Trumpet",
    price: 6099,
    categoryName: "windInstruments",
    details: [
      {
        patternName: "Trumpets",
        brand: "Generic",
        colour: "Gold",
        aboutThisItem: [
          "Material: Brass",
          "Made of high quality brass.",
          "Beautifully designed.",
          "3 valve with smooth functioning and comfortable buttons.",
          "Comes with a durable carry case and a mouthpiece.",
          "Great sound quality.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: flute,
    name: "Lazarro Closed Hole C Flute",
    price: 16338,
    categoryName: "windInstruments",
    details: [
      {
        patternName: "Flute",
        brand: "	Lazarro",
        colour: "Gold,Nickel,Silver",
        aboutThisItem: [
          "Material: Copper",
          "Package Includes: Lazarro Flute, Hard Case, Gloves, Cleaning Cloth, Cleaning Rod, Screwdriver and Grease.",
          "Lazarro flutes are available in 22 different colors and come with variety of silver or gold keys. We always stand behind our products and offer warranty for manufacturer defects.",
          "We are proud to announce that WE ARE a USA BRAND that you can trust 100%.",
          "Our flutes are not just stylish, but also very durable, made out of Cupronickel, have a great well-balanced sound and are always hand checked by our professional team in New York. Why rent a flute when you can buy a Brand New Lazarro flute for fraction of the price.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: GrowWingsLightBrownGuitarBag,
    name: "Grow wings Guitar Bag",
    price: 649,
    categoryName: "accessories",
    details: [
      {
        patternName: "Guitar Bag",
        brand: "Grow Wings",
        colour: "Light Brown",
        aboutThisItem: [
          "Multiple carrying options,this full-sized gigbag and storage bag is the ideal companion for any guitarist.",
          "The guitar pack is compatible with acoustic and classical guitars.",
          "The stylish appearance and sturdy structure will protect your guitar from scratches and keep it clean.",
          "Padded: Yes Foam Padding.",
          "Bag Pattern: Solid.",
          "Trap Type: Shoulder Strap.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: BajaaoDeluxe5PieceDrumkitGigBag,
    name: "Bajaao Deluxe 5-Piece Drumkit Gig Bag",
    price: 5549,
    categoryName: "accessories",
    details: [
      {
        patternName: "Drumkit Gig Bag",
        brand: "Bajaao Deluxe",
        colour: "Black",
        aboutThisItem: [
          "22inch x 16inch Bass Drum Bag.",
          "12inch x 11inch Tom Tom Bag.",
          "13inch x 12inch Tom Tom Bag.",
          "16inch x 16inch - Floor Tom Bag.",
          "5-1/2inch x 14inch Snare Bag.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: KadenceHeavyDutyDoubleXAdjustablePianoKeyboardStand,
    name: "Kadence Double-X Keyboard Stand",
    price: 1698,
    categoryName: "accessories",
    details: [
      {
        patternName: "Keyboard Stand",
        brand: "Kadence",
        colour: "Black",
        aboutThisItem: [
          "Metal",
          "MAXIMUM ADJUSTABILITY.",
          "SUPPORT STRAPS & NON-SLIP CAPS.",
          "SAFE & RELIABLE.",
          "QUALITY INSTRUMENTS FOR EVERYDAY.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: KeyboardGigBagCase,
    name: "61 Key Keyboard Gig Bag Case",
    price: 9532,
    categoryName: "accessories",
    details: [
      {
        patternName: "Keyboard Gig Bag",
        brand: "Generic",
        colour: "Black",
        aboutThisItem: [
          "Oxford Cloth with 10mm Cotton Padded",
          "Black Keyboard Case40inch * 16inch * 6inch Inch Fits Most 61 Key Keyboard.",
          "Two Pockets Outside For Storage Of Lesson Book Pen Phone And Power Supply Useful For Carrying In A Car And Back.",
          "Comfortable And Adjustable Shoulder Straps Both As A Handbag Or Backpack.",
          "Very Easy To Put The Keyboard In And Out And The Zippers Slide Nicely Fits Your Keyboard Great And Stores In The Closet Or Under The Bed With Ease.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: BoomArmMicrophoneStand,
    name: "NK40 Boom Arm Microphone Stand",
    price: 1598,
    categoryName: "accessories",
    details: [
      {
        patternName: "Microphone Stand",
        brand: "Kadence Instrument Accessories",
        colour: "Black",
        aboutThisItem: [
          "Alloy Steel, Metal",
          "EZ Angle Roller",
          "Instant EZ Glide",
          "Durable rectangular tubing leg construction",
          "Desk size: 21inch x 11.5inch (535 x 293mm)",
          "Height: 27.1inch - 48.4inch (690-1230mm)",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: RUILVNFoldingMultiGuitarDisplayRack5GuitarStand,
    name: "RUILVN Folding Multi-Guitar Stand",
    price: 13758,
    categoryName: "accessories",
    details: [
      {
        patternName: "Guitar Stand",
        brand: "RUILVN",
        colour: "Black",
        aboutThisItem: [
          "Special Feature: Foldable",
          "Number of Shelves:	5",
          "Material: Aluminium",
          "Store Multiple Instruments",
          "Durable & Reliable",
          "Guitar Holders SAFE",
          "Easy Assembly and Pack Â– No additional tool is needed for setting up the rack",
          "Minimalistic Design.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: BajaaoProfesionalqualityXLRMaletoXLRFemaleBalancedMicrophoneCable,
    name: "Bajaao XLR Male to XLR Female Microphone Cable",
    price: 599,
    categoryName: "accessories",
    details: [
      {
        patternName: "Microphone Cable",
        brand: "Bajaao",
        colour: "Blue",
        aboutThisItem: [
          "Connector Type	XLR",
          "Cable Type	XLR",
          "Compatible Devices	Amplifier",
          "Special Feature	XLR Male to XLR Female Balanced",
          "Compatible devices: Microphones, Audio Sound Consoles, Power Amplifier, Stereo System, Wireless Microphone Receiver, etc.",
          "[Low Noise High Fidelity] Bajaao Microphone Cable includes copper conductors that provides enhanced signal transfer, the PVC insulation material and the high-density stranded copper double shield provide noise rejection for quiet operation.",
          "High grade XLR connector with internal strain relief for rugged reliability.",
          "Balanced XLR cable Great for live gigs, Home recording, Professional studios.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: KadenceGuitarCable,
    name: "Kadence Guitar Cable",
    price: 548,
    categoryName: "accessories",
    details: [
      {
        patternName: "Instrument Cable",
        brand: "Kadence",
        colour: "Light Blue",
        aboutThisItem: [
          "Connector Type:	2 Pin",
          "Cable Type:	Coaxial",
          "Compatible Devices	Guitar, Mandolin",
          "Special Feature	Fast Charging",
          "Low Noise High Fidelity",
          "Suitable for mixer, power amplifier, microphone, effector, decoder, equalizer, electoronic organ, electric guitar, electric bass and other electronic equipments. Widely used in the installation of smart home, karaoke speaker, professional stage audio, etc.",
          "Making incidental repairs quick and easy! Very nice, flexible cable.",
          "High purity OFC core of cable, Black Tweed Woven Jacket with 7mm(0.27 inch) outer diameter, brings the cable strong and durable construction.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: KEBILSHOPMicCable,
    name: "KEBILSHOP Mic Cable 6.35mm Jack",
    price: 299,
    categoryName: "accessories",
    details: [
      {
        patternName: "Patch Cables",
        brand: "KEBILSHOP",
        colour: "Red",
        aboutThisItem: [
          "Connector Type	XLR",
          "Cable Type	XLR",
          "Compatible Devices	Monitor, Personal Computer",
          "Special Feature	Noise Free, Durable",
          "This Cable Is For Amplifier,Microphone,Guitar, pro audio applications like studio monitors, speakers,And Other Musical Instruements.",
          "Connectors-6.3mm Male To 3Pin XLR Female.connectors-6.3mm Male To 3Pin XLR Female.",
          "Size Available in various length 3 Meter/9.8 Feet,5 Meter/16.4 Feet,10 Meter/32.8 Feet,15 Meter/49.2 Feet,20 Meter/65.6 Feet,25 Meter/82.2 Feet ,30 Meter/98.4 Feet,50 Meter/164 Feet.",
          "Balanced 2 Core Mic cable with soft PVC jacket, strong and durable, good thick, but flexible.",
          "High quality noise free performance.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: RuhZaUSBMidiCableLeadAdaptor,
    name: "RuhZa USB Midi Cable Lead Adaptor for Musical Keyboard",
    price: 999,
    categoryName: "accessories",
    details: [
      {
        patternName: "MIDI Cables",
        brand: "RuhZa",
        colour: "Black",
        aboutThisItem: [
          "Connector Type:	USB",
          "Cable Type:	USB",
          "Compatible Devices:	Laptop, Personal Computer",
          "Special Feature	High Speed",
          "The MIDI “in” Plug Is Connected To The “out” Port Of The Keyboard, And The “out” Plug Of The Line Is Connected To The “in” Port Of The Piano. The Song Recorded To The Computer Can Then Be Played Back For Saving Or Editing. It Is Suitable For MIDI Interface Instruments!",
          "Drives That Are Directly Connected To The Computer Can Be Used.",
          "The MIDI OUT Port On The MIDI Keyboard, The Din IN Jack Labeled Out, The MIDI IN Port Of The Source, And The LINE OUT / PHONES Port Of The Speaker Or Headphones Connected To The Source.",
          "Connect To The Midi Input Device Through The Computer's USB Port For Computer Composition.",
          "Provides Two MIDI Interfaces, A MIDI Input, And A MIDI Output.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: TAAPSEEAdapter,
    name: "TAAPSEE 7.5V Adapter",
    price: 359,
    categoryName: "accessories",
    details: [
      {
        patternName: "Adapter",
        brand: "TAAPSEE",
        colour: "Black",
        aboutThisItem: [
          "Connector Type:	2-Pin",
          "Compatible Devices	Musical Instruments",
          "Input Voltage:	240 Volts",
          "Mounting Type:	Wall Mount",
          "Wattage:	24 Watts",
          "Specification Met:	UL",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: FourChannel3PinXLRSnakeMultiNetworkSnakeReceiver.jpg,
    name: "Multi Network Receiver",
    price: 15901,
    categoryName: "accessories",
    details: [
      {
        patternName: "Multicore Cables",
        brand: "	Y.D.F",
        colour: "Black, Red, Blue, Yellow",
        aboutThisItem: [
          "Connector Type: XLR",
          "Cable Type:	XLR",
          "4-Channel XLR Snake with Professional sound performance. Enjoy Balanced Digital/Analog Transfer & Crisp, Clear, High Quality Sound in a Variety of Indoor & Outdoor Settings | Supports 48V Phantom Power Up to 850 Ft When Using Double Shielded Cat 5E/Cat6/Cat7/Cat8 Cable.",
          "All-analog and Fully passive Snake box that can be input directly into analog or digital consoles. Each CAT Box Unit has 4 XLR inputs or outputs (available in both male and female configurations) and an Ethercon input.",
          "Use in Professional Stage Production, Studio or Live Audio Performance over a Single Ethercon RJ45 Network Cable.",
          "Compatible with DMX, AES, COM and other 3-pin XLR based COM systems. And they are rust-resistant and rugged enough to handle life on stage.",
          "Plug and Play. No power supply required.",
          "We Provide 1 Year Warranty. If you have any use problems, please contact the after-sales service support, and we will provide you with satisfactory after-sales service.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: UGREEN3MM_MALETO6MM_MALECABLE,
    name: "UGREEN 3.5MM MALE TO 6.5MM MALE CABLE",
    price: 849,
    categoryName: "accessories",
    details: [
      {
        patternName: "Digital Interface Cables",
        brand: "	UGREEN",
        colour: "	Gold",
        aboutThisItem: [
          "Connector Type: Auxiliary",
          "Special Feature: Braided",
          "Connectors: 6.35mm 1/4inch Mono Male x2;",
          "Connect instruments such as synths, keyboards, guitars and other professional audio equipment.",
          "Low noise resistance, for superior performance, perfect for digital or analogue signals.",
          "24K 15U Gold plated connectors resist corrosion and ensure optimum sound quality.",
          "Zinc alloy case and double layer nylon braid guards against harsh installs where the cable is tugged across sharp edges, protecting it from being scathed.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: PLoynkAudioSpeakerCable,
    name: "PLoynk Audio Speaker Cable",
    price: 8759,
    categoryName: "accessories",
    details: [
      {
        patternName: "Stage & Studio Speaker Cables",
        brand: "PLoynk",
        colour: "Black",
        aboutThisItem: [
          "Item model number: MUS270048",
          "Item Weight: 1 kg 90 g",
          "25 ft, Speakon to 1/4inch",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: RØDENT1Microphone,
    name: "RØDE NT1 Microphone",
    price: 25098,
    categoryName: "studioGear",
    details: [
      {
        patternName: "Condenser",
        brand: "Rode",
        colour: "Silver",
        aboutThisItem: [
          "Recommended Uses For Product: Studio, Home",
          "Connectivity Technology:	USB, XLR",
          "Connector Type: USB",
          "Special Feature: Clip",
          "Features RØDE's ultra-low-noise, high-gain Revolution Preamp and high-resolution (up to 192kHz) analog-to-digital conversion for crystal-clear digital recordings.",
          "32-bit float digital output means you can effortlessly capture everything from a whisper to the loudest drummer with no chance of clipping and no need to set complex gain controls.",
          "Activate advanced Digital Signal Processing (DSP) via RØDE Central software, including a compressor, noise gate, high-pass filter and the legendary APHEX Aural Exciter and Big Bottom.",
          "Body machined from high-grade aluminium with nickel plating and military-grade ceramic coating, ensuring its ready to take on the rigours of recording day in, day out.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: AKAIUSBMIDIKeyboardController,
    name: "AKAI USB MIDI Keyboard Controller",
    price: 18539,
    categoryName: "studioGear",
    details: [
      {
        patternName: "MIDI Controller",
        brand: "Akai Professional",
        colour: "Black and Red",
        aboutThisItem: [
          "Number of Keys: 37",
          "Connectivity Technology: USB",
          "Special Feature: Portable, Velocity Sensitive Pad",
          "Model Name: MPK Mini Plus",
          "Full Creative Control - A dynamic 37-Key MPK Mini keybed for 3 full octaves of melodic and harmonic performance. Easily connect to your DAW or studio equipment with the USB-powered MIDI Controller.",
          "Advanced Connectivity - Connect to different sound sources with CV/Gate and MIDI I/O. Control modular gear, sound modules, synthesizers, and more to bring new sound sources into your music production.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: YamahaMG16XUMixer,
    name: "Yamaha MG16XU Mixer",
    price: 42500,
    categoryName: "studioGear",
    details: [
      {
        patternName: "Mixers",
        brand: "Yamaha",
        colour: "Black",
        aboutThisItem: [
          "Number of Channels: 16",
          "Product Dimensions: 52.3D x 55.9W x 21.3H Centimeters",
          "Item Weight:	9.5 Kilograms",
          "Connectivity Technology: Auxiliary, USB",
          "Country of Origin: Malaysia",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: PioneerDJController,
    name: "Pioneer DJ Controller",
    price: 169900,
    categoryName: "dj",
    details: [
      {
        patternName: "DJ Controllers",
        brand: "Pioneer DJ",
        colour: "Black",
        aboutThisItem: [
          "4-deck DJ Controller with 2 x 8inch Jogwheels",
          "Rekdbox Lighting Mode",
          "Serato Compatibility",
          "16 Perfmance Pads",
          "Track Separation",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: BoseQuietcomfortHeadphones,
    name: "Bose Quietcomfort Headphones",
    price: 22999,
    categoryName: "audioEquipment",
    details: [
      {
        patternName: "Headphones",
        brand: "Bose",
        colour: "Black",
        aboutThisItem: [
          "Model Name:	QUIETCOMFORT 45 HEADPHONES",
          "Form Factor:	Over Ear",
          "Connectivity Technology: Bluetooth",
          "Iconic quiet. Comfort. And sound. The first noise cancelling headphones are back, now with lightweight materials for premium comfort and proprietary acoustic technology for deep, clear audio. They're not just an icon reborn they're the perfect balance of quiet, comfort, and sound.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: MarshallMajorHeadphone,
    name: "Marshall Major Headphone",
    price: 12999,
    categoryName: "audioEquipment",
    details: [
      {
        patternName: "Headphone",
        brand: "Marshall",
        colour: "Brown",
        aboutThisItem: [
          "Model Name: Major Iv",
          "Form Factor: On Ear",
          "Connectivity Technology: Bluetooth",
          "Major IV delivers 80+ solid hours of wireless playtime.",
          "Re-Engineered - New ear cushions + 3D hinges + straight fit headband + loop wire with reinforced rubber dampers.",
          "The multi-directional control knob lets you control your music and phone functionality with ease.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: SteinbergAudioInterface,
    name: "Steinberg Audio Interface",
    price: 24500,
    categoryName: "audioEquipment",
    details: [
      {
        patternName: "Audio Interfaces",
        brand: "Steinberg",
        colour: "Black",
        aboutThisItem: [
          "Supported Software: ASIO, Core Audio, WDM",
          "Connectivity Technology:	USB",
          "Number of Channels: 10",
          "Frequency Response: 192 KHz",
          "Four Combination XLR/TRS inputs allow for versatile connection options",
          "Windows, Mac OS, and iOS cross-platform compatibility for superior flexibility",
          "MIDI I/O syncs effortlessly with outside hardware",
          "Latency-free DSP monitoring",
          "Dual headphone monitoring capabilities",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: YAMAHAPX5PowerAmplifier,
    name: "YAMAHA PX5 Power Amplifier",
    price: 42999,
    categoryName: "amplifierAndSpeaker",
    details: [
      {
        patternName: "Amplifier",
        brand: "YAMAHA",
        colour: "Black",
        aboutThisItem: [
          "Mounting Type: Surface Mount",
          "Number of Channels: 2",
          "LCD display for easy navigation of advanced features",
          "Connectivity includes XLR and TRS inputs, and speakON, binding post, and phono outputs",
          "Power Boost Mode bridges the outputs to achieve double the wattage (reduces output to a single channel)",
          "Built-in PA management tools like EQ, limiting, delays, crossovers, and filters",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: AhujaFrequencyAmplifier,
    name: "Ahuja Frequency Amplifier",
    price: 18825,
    categoryName: "amplifierAndSpeaker",
    details: [
      {
        patternName: "Amplifier",
        brand: "Ahuja",
        colour: "Black",
        aboutThisItem: [
          "Mounting Type: Surface Mount",
          "Built-in MP3 player with LCD display, remote control, for USB, SD/MMC cards.Preamplifier and Line Output for connecting to a Booster Amplifier and for recording the programme.",
          "Line Input for connecting the output from any external mixer or permitting SSA-250DP to be used as a Booster Power Amplifier",
          "Box Speaker/Driver Unit selector switch. Bass boost defeated at Driver Unit position for safer operation of driver units.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: PreSonusStudioMonitorSpeaker,
    name: "PreSonus Studio Monitor Speaker",
    price: 9990,
    categoryName: "amplifierAndSpeaker",
    details: [
      {
        patternName: "Speaker",
        brand: "PreSonus",
        colour: "Black",
        aboutThisItem: [
          "Model Name: eris e3.5",
          "Speaker Type: Monitor",
          "Connectivity Technology: RCA, Auxiliary",
          "PRESONUS BEST SELLING STUDIO MONITORS- The only true studio monitor for producing your next hit, gaming, watching movies or any multimedia purposes.",
          "CLEAR & BALANCED FREQUENCIES - 1inch ultra-low-mass silk-dome tweeters eliminate harshness and provide balanced high-frequency sound.",
          "EASY CONNECTIVITY - Stereo aux input for your smartphone, headphone jack for private listening, volume, and power on/off are located on the front panel for your convenience.",
        ],
      },
    ],
  },
  {
    _id: uuid(),
    image: JBLEON710Speaker,
    name: "JBL EON710 Speaker",
    price: 59999,
    categoryName: "amplifierAndSpeaker",
    details: [
      {
        patternName: "Speaker",
        brand: "JBL",
        colour: "Black",
        aboutThisItem: [
          "Model Name: Eon 710",
          "Speaker Type: Woofer",
          "Connectivity Technology: Bluetooth",
          "Special Feature: Subwoofer",
          "Custom-designed 10-inch woofer",
          "Redesigned high-frequency horn",
          "Built-in 3-channel digital mixer",
          "Bluetooth 5.0 streaming and control",
        ],
      },
    ],
  },
];
