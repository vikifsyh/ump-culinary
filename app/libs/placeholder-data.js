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

const products = [
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
];

module.exports = {
  users,
  products,
};
