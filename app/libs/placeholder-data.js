const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Syafiq Fajrian Emha",
    email: "syafiqfajrianemha@gmail.com",
    password: "12345678",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442b",
    name: "Viki Flendiansyah",
    email: "vfsyah@gmail.com",
    password: "12345678",
  },
];

const stalls = [
  {
    id: 1,
    stall: "Pentol Pak Bambang",
    nomor: "6281225661530",
    makanan: [
      {
        id: 11,
        name: "Pentol Mercon",
        price: 10000,
        image: "/img/pentol.png",
      },
      {
        id: 12,
        name: "Pentol Isi Telur",
        price: 13000,
        image: "/img/pentolisi.jpg",
      },
      {
        id: 13,
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
        id: 110,
        image: "/img/ikan.jpg",
        name: "Paket Ikan Bakar",
        price: 20000,
      },
      {
        id: 111,
        image: "/img/ayambakar.jpg",
        name: "Paket Ayam Bakar",
        price: 11000,
      },
      {
        id: 112,
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
        id: 121,
        image: "/img/kwetiauw.jpg",
        name: "Kwetiau Goreng",
        price: 13000,
      },
      {
        id: 122,
        image: "/img/nasgor.jpg",
        name: "Nasi Goreng",
        price: 13000,
      },
      {
        id: 123,
        image: "/img/nasigila.jpg",
        name: "Nasi Gila",
        price: 13000,
      },
    ],
  },
];

module.exports = {
  users,
  stalls,
};
