import cncImage from "../../assets/CNC-Machining-1024x536.jpg";
import laserImage from "../../assets/Laser-Cutting-Parameters.webp";
import customFabrication from "../../assets/myFac8ry__fabrication.jpeg";
import coating from "../../assets/myFac8ry__lathe__powder_coating__plating.jpeg";
import bending from "../../assets/myFac8ry__lathe__powder_coating__plating.jpeg";
import welding from "../../assets/myfac8ry_laser.jpg";

const cardDatas = [
  {
    id: 1,
    title: "CNC MACHINING",
    features: ["CNC milling", "CNC turning", "Drilling", "Grinding"],
    image: cncImage,
  },
  {
    id: 2,
    title: "LASER CUTTING",
    image: laserImage,
    features: [
      "Sheet Metal Cutting",
      "Fibre laser Cutting",
      "CNC Punching",
      "Shearing",
    ],
  },
  {
    id: 3,
    title: "CNC BENDING",
    image: bending,
    features: [
      "Press Breaking / Bending",
      "Panel Bending",
      "Stamping",
      "Rolling",
    ],
  },
  {
    id: 4,
    title: "WELDING",
    image: welding,
    features: ["MIG/MAG Welding", "TIG Welding", "Spot Resistance Welding "],
  },
  {
    id: 5,
    title: "COATING",
    image: coating,
    features: [
      "Powder Coating",
      "Galvanic Coating",
      "Hot Dip Galvanization",
      "Wet Painting",
    ],
  },
  {
    id: 6,
    title: "Custom Fabrication",
    image: customFabrication,
    features: [
      "Mechanical Assembly",
      "Frame Manufacturing",
      "Custom prototyping",
    ],
  },
];

export default cardDatas;
