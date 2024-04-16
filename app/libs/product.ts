export const product = [
  {
    id: 1,
    stall: "Pentol Pak Bambang",
    nomor: "6281225661530",
    makanan: [
      {
        id: Math.random() * 100 + 1,
        name: "Pentol Mercon",
        price: 10000,
        image: "/img/pentol.png",
      },
      {
        id: Math.random() * 100 + 1,
        name: "Pentol Isi Telur",
        price: 13000,
        image: "/img/pentolisi.jpg",
      },
      {
        id: Math.random() * 100 + 1,
        name: "Pentol Kuah",
        price: 5000,
        image: "/img/pentolbiasa.jpg",
      },
    ],
  },
  {
    id: 2,
    stall: "Gusto's",
    nomor: "6281223344556",
    makanan: [
      {
        id: Math.random() * 100 + 1,
        image: "/img/ikan.jpg",
        name: "Paket Ikan Bakar",
        price: 20000,
      },
      {
        id: Math.random() * 100 + 1,
        image: "/img/ayambakar.jpg",
        name: "Paket Ayam Bakar",
        price: 11000,
      },
      {
        id: Math.random() * 100 + 1,
        image: "/img/tempetahu.jpg",
        name: "Tempe Tahu Goreng",
        price: 4000,
      },
    ],
  },
  {
    stall: "Mas Bro",
    id: 3,
    nomor: "6281223344886",
    makanan: [
      {
        id: Math.random() * 100 + 1,
        image: "/img/kwetiauw.jpg",
        name: "Kwetiau Goreng",
        price: 13000,
      },
      {
        id: Math.random() * 100 + 1,
        image: "/img/nasgor.jpg",
        name: "Nasi Goreng",
        price: 13000,
      },
      {
        id: Math.random() * 100 + 1,
        image: "/img/nasigila.jpg",
        name: "Nasi Gila",
        price: 13000,
      },
    ],
  },
];
