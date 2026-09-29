// Content for the page. Ratings, review counts and amenities come from the
// three Airbnb listings linked on linktr.ee/labellotaba.

// next/image does not prefix basePath on string paths, so every public
// asset goes through here.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const contact = {
  // Host profile: lists the three rooms together (hostId shared by all three listings).
  airbnb: "https://www.airbnb.com.ar/users/show/13854315",
  whatsapp: "https://api.whatsapp.com/send?phone=541128795279",
  instagram: "https://instagram.com/Labellota_ba",
  facebook: "https://www.facebook.com/Labellotaba/",
  linktree: "https://linktr.ee/labellotaba",
  map: "https://www.google.com/maps/search/?api=1&query=Recoleta,+Buenos+Aires",
};

export type Photo = { src: string; alt: string };

export type Room = {
  id: string;
  name: string;
  rating: string;
  reviews: number;
  description: string;
  tags: string[];
  airbnb: string;
  badge?: string;
  photos: Photo[];
};

const roomPhotos = (id: string, order: number[], alt: string): Photo[] =>
  order.map((n) => ({ src: `/img/rooms/${id}-${n}.jpg`, alt }));

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard",
    rating: "4,86",
    reviews: 35,
    description:
      "Pared de ladrillo a la vista, piso de madera y ventanal con balcón francés hacia la avenida.",
    tags: ["Cama Queen", "Balcón francés", "2 huéspedes"],
    airbnb: "https://airbnb.com.ar/h/labellota2",
    photos: roomPhotos("standard", [1, 2, 3, 4, 5, 6], "Habitación Standard"),
  },
  {
    id: "superior",
    name: "Superior",
    rating: "4,87",
    reviews: 30,
    description:
      "Luminosa y serena, en blanco y madera, con ventanales altos y un escritorio para trabajar.",
    tags: ["Cama Queen", "Escritorio", "2 huéspedes"],
    airbnb: "https://airbnb.com/h/labellota3",
    photos: roomPhotos("superior", [1, 2, 3, 4, 5], "Habitación Superior"),
  },
  {
    id: "premium",
    name: "Premium",
    rating: "4,98",
    reviews: 64,
    description:
      "La más amplia: sala con sillón, techo de bovedilla y balcón con vista a la plaza.",
    tags: ["Cama Queen", "Vista a la plaza", "Sala de estar"],
    airbnb: "https://airbnb.com.ar/h/labellota1",
    badge: "Mejor puntuada",
    photos: roomPhotos("premium", [4, 1, 2, 3, 5], "Habitación Premium"),
  },
];

export const totalReviews = rooms.reduce((sum, r) => sum + r.reviews, 0);

export const sharedSpaces: (Photo & { caption: string; tall?: boolean })[] = [
  { src: "/img/house/recibidor.jpg", alt: "Recibidor con vitral de colores", caption: "Recibidor con vitral", tall: true },
  { src: "/img/house/cocina-1.jpg", alt: "Cocina equipada en blanco", caption: "Cocina equipada" },
  { src: "/img/house/bano-2.jpg", alt: "Baño completo en mármol blanco", caption: "Baño completo" },
  { src: "/img/house/galeria-1.jpg", alt: "Galería con postigos rojos al patio de luz", caption: "Patio de luz", tall: true },
  { src: "/img/house/vista-plaza.jpg", alt: "Vista desde el balcón a la plaza arbolada", caption: "Vista a la plaza" },
  { src: "/img/house/escalera.jpg", alt: "Escalera de mármol de la entrada", caption: "La escalera" },
];

export const amenities: { title: string; items: string[] }[] = [
  {
    title: "En tu habitación",
    items: [
      "Cama Queen, ropa de cama y toallas",
      "Armario y perchas",
      "Escritorio y WiFi de alta velocidad",
      "Televisión",
      "Aire acondicionado y calefacción",
      "Cerradura en la puerta",
    ],
  },
  {
    title: "En la cocina",
    items: [
      "Anafe de inducción y horno eléctrico",
      "Microondas, heladera y freezer",
      "Pava eléctrica, tostadora y café",
      "Vajilla y utensilios",
      "Mesa para comer",
    ],
  },
  {
    title: "Servicios",
    items: [
      "Check-in autónomo con cerradura de teclado",
      "Guardado de equipaje",
      "Estadías largas",
      "Shampoo, acondicionador y jabón",
      "Lavandería cerca",
      "Estacionamiento gratis en la calle",
    ],
  },
];

export const navLinks = [
  { href: "#la-casa", label: "La casa" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#espacios", label: "Espacios" },
  { href: "#ubicacion", label: "Ubicación" },
];
