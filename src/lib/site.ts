export const site = {
  name: "Albion Fish Bar",
  tagline: "Proper fish & chips on Albion Street",
  phoneDisplay: "020 7237 2123",
  phoneHref: "tel:+442072372123",
  addressLines: ["36 Albion Street", "Rotherhithe", "London SE16 7JQ"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=36+Albion+Street+London+SE16+7JQ",
  hours: [
    { day: "Monday", slots: "11:00–14:00 · 17:00–22:00" },
    { day: "Tuesday", slots: "11:00–14:00 · 17:00–22:00" },
    { day: "Wednesday", slots: "11:00–14:00 · 17:00–22:00" },
    { day: "Thursday", slots: "11:00–14:00 · 17:00–22:00" },
    { day: "Friday", slots: "11:00–14:00 · 17:00–22:00" },
    { day: "Saturday", slots: "11:00–14:00 · 17:00–22:00" },
    { day: "Sunday", slots: "Closed" },
  ],
  menu: [
    {
      name: "Cod & chips",
      blurb: "Thick batter, flaky white fish, chips fried to order.",
      image: "/images/menu-cod.jpg",
      alt: "Battered cod with thick-cut chips, lemon and parsley",
    },
    {
      name: "Proper chips",
      blurb: "Golden, salted, and piled high — the SE16 standard.",
      image: "/images/chips.jpg",
      alt: "Tray piled with golden chips",
    },
    {
      name: "From the fryer",
      blurb: "Scampi, sausages, and crispy bites when you want more than fish.",
      image: "/images/takeaway.jpg",
      alt: "Crispy battered pieces in a metal pan with dipping sauce",
    },
  ],
} as const;
