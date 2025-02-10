const amdRadeonRx = {
  id: "gpu1",
  title:
    "Tarjeta de Video PowerColor AMD Radeon RX 7800 XT OC Red Devil / 16GB 256-bit GDDR6 / PCI Express 4.0 / RX7800XT 16G-E/OC",
  price: 10699,
  categories: ["graphic Card", "AMD RADEON"],
  model: "RX7800XT",
  dato1: "Descrip 1",
  dato2: "Descrip 2",
  dato3: "Descrip 3",
  compatibilidad:["Mother Board 5689", "Mother Board 202000"],
  imprimirPrecioMxN: function(){
    return `$ ${this.price} M.N.`
  },
  imprimirPrecioDolares: function(){
    return `$ ${this.price/20} dolares.`
  }
};

const mouseGamerPixArt = {
  id: "mou1",
  title:
    "Mouse Gamer NZXT LIFT ELITE WIRELESS / Sensor PixArt PAW3395 / Ergonómico / 100 Millones de clicks / 26,000 DPI / Negro / MS-101NB-01",
  price: 1629,
  categories: ["mouse", "NZXT"],
  model: "MS-101NB-01",
  imprimirPrecioMxN: function(){
    return `$ ${this.price} M.N.`
  },
  imprimirPrecioDolares: function(){
    return `$ ${this.price/20} dolares.`
  }
};

const instinctRawBoost = {
  id: 1,
  title: "Instinct Raw Boost salmon",
  marca: "Instinct",
  price: 2500,
  description:
    "Alimento de salmon para perro adulto, libre de grano, contiene probioticos, megas y antioxidantes que ayudan a la digestion, la piel, el cabello y su sistema inmunológico",
  category: [
    {
      idCategory: 1,
      description: "Adulto",
    },
    {
      idCategory: 2,
      lifeStage: "Croquetas",
    },
  ],
  flavor: "Salmon",
  image: "/",
};

export default instinctRawBoost;
export { amdRadeonRx, mouseGamerPixArt };
