const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@gmail.com",
    password: "12345678",
  },
];

const stalls = [
  {
    id: 1,
    stall: "Ayam Kenari",
    img: "/img/kenari.png",
    nomor: "62813993651112",
    location: "Jl Tegal Mulya",
    makanan: [
      {
        id: 11,
        name: "Nasi Telor Dadar",
        price: 8000,
        image: "/img/nasitelordadar.png",
      },
      {
        id: 12,
        name: "Tahu Tempe",
        price: 4000,
        image: "/img/tahutempe.png",
      },
      {
        id: 13,
        name: "Nasi Telor Ceplok",
        price: 8000,
        image: "/img/nasitelorceplok.png",
      },
      {
        id: 14,
        name: "Nasi Ayam Goreng",
        price: 12000,
        image: "/img/nasiayamgoreng.png",
      },
      {
        id: 15,
        name: "Nasi Lele",
        price: 12000,
        image: "/img/nasilele.png",
      },
      {
        id: 16,
        name: "Nasi Ayam Bakar",
        price: 13000,
        image: "/img/nasiayambakar.png",
      },
      {
        id: 17,
        name: "Mie Goreng Sambel",
        price: 8000,
        image: "/img/miegorengsambel.png",
      },
      {
        id: 18,
        name: "Ayam Bakar",
        price: 10000,
        image: "/img/ayambakar.jpg",
      },
      {
        id: 19,
        name: "Lele Goreng",
        price: 9000,
        image: "/img/lelegoreng.png",
      },
      {
        id: 20,
        name: "Ati Ampela Goreng",
        price: 4000,
        image: "/img/atiampelagoreng.png",
      },
      {
        id: 21,
        name: "Ayam Bacem",
        price: 10000,
        image: "/img/ayambacem.png",
      },
    ],
  },
  {
    id: 2,
    stall: "Plat R",
    img: "/img/platr.png",
    nomor: "6285600398436",
    location: "Dukuhwaluh III, Dukuhwaluh",
    makanan: [
      {
        id: 22,
        name: "Es Teh",
        price: 2500,
        image: "/img/esteh.png",
      },
      {
        id: 23,
        name: "Ayam Ori",
        price: 8000,
        image: "/img/ayamori.png",
      },
      {
        id: 24,
        name: "Ayam Geprek",
        price: 10000,
        image: "/img/ayamgeprek.png",
      },
      {
        id: 25,
        name: "Nasi Ayam Geprek",
        price: 12000,
        image: "/img/nasiayamgeprek.png",
      },
    ],
  },
  {
    id: 3,
    stall: "Warung Salem",
    img: "/img/salem1.png",
    nomor: "6282325555586",
    location: "Jl. Tegal Mulya",
    makanan: [
      {
        id: 31,
        name: "Nasi Totog Oncom",
        price: 13000,
        image: "/img/nasitotogoncomayam.png",
      },
      {
        id: 32,
        name: "Nasi Totog Oncom",
        price: 10000,
        image: "/img/nasisosis.png",
      },
      {
        id: 33,
        name: "Nasi Omelet",
        price: 8000,
        image: "/img/nasiomelet.png",
      },
      {
        id: 34,
        name: "Nasi Omelet",
        price: 12000,
        image: "/img/nasiayam.png",
      },
      {
        id: 35,
        name: "Nasi Ayam Suir",
        price: 12000,
        image: "/img/nasiayamsuir.png",
      },
      {
        id: 36,
        name: "Mie Tek Tek",
        price: 11000,
        image: "/img/mietektek.png",
      },
      {
        id: 37,
        name: "Nasi Ayam Teriyaki",
        price: 15000,
        image: "/img/nasiayamteriyaki.png",
      },
      {
        id: 38,
        name: "Nasi Ayam Teriyaki",
        price: 13000,
        image: "/img/nasiayambakar2.png",
      },
      {
        id: 39,
        name: "Nasi Ayam Asam Manis",
        price: 14000,
        image: "/img/nasiayamasammanis.png",
      },
    ],
  },
  {
    id: 4,
    stall: "G-PENK",
    img: "/img/g-penk.png",
    nomor: "6285643309920",
    location: "Jl. Tegal Mulya 5",
    makanan: [
      {
        id: 40,
        name: "Tumis Kangkung",
        price: 7000,
        image: "/img/tumiskangkung.png",
      },
      {
        id: 41,
        name: "Nila Goreng",
        price: 14000,
        image: "/img/nilagoreng.png",
      },
      {
        id: 42,
        name: "Nasi Lele Goreng",
        price: 13000,
        image: "/img/nasilelegoreng.png",
      },
      {
        id: 43,
        name: "Magelangan",
        price: 15000,
        image: "/img/magelangan.png",
      },
    ],
  },
];

module.exports = {
  users,
  stalls,
};
