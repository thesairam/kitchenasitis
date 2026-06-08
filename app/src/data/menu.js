export const biryanis = [
  {
    name: 'Hyderabadi Dum Biryani',
    description: 'Slow-sealed dum cooking, saffron basmati, caramelised onions, whole spices. Served with raita and mirchi salan.',
    tags: ['Halal', 'Signature'],
    price: 14,
    vegPrice: 12,
    image: '/media/biryani/hyderabadi-biryani-saffron-thali-amsterdam.jpeg',
    imageAlt: 'Hyderabadi dum biryani with vivid saffron rice in a steel thali, Amsterdam home kitchen',
  },
  {
    name: 'Fry Piece Biryani',
    description: 'Andhra-style biryani with deep-fried masala chicken pieces layered into dum-cooked rice. Intense, aromatic. Eaten on special occasions.',
    tags: ['Halal', 'Spicy'],
    price: 15,
    vegPrice: 12,
    image: '/media/biryani/fry-piece-biryani-masala-chicken-amsterdam.jpeg',
    imageAlt: 'Fry piece biryani close-up, deep-fried masala chicken with egg, Amsterdam',
  },
  {
    name: '65 Biryani',
    description: 'Named after the legendary Chicken 65. Crispy spiced chicken folded into dum biryani. Bold, punchy, street-food classic elevated.',
    tags: ['Halal', 'Spicy', 'Street style'],
    price: 15,
    vegPrice: 12,
    image: '/media/biryani/65-biryani-crispy-chicken-amsterdam.jpeg',
    imageAlt: '65 biryani with crispy spiced chicken pieces, dark masala rice, Amsterdam kitchen',
  },
]

export const proteinBowl = {
  name: 'Protein Bowl',
  tagline: 'Strength, in a bowl.',
  description:
    "A complete Andhra meal: slow-cooked toor dal pappu over steamed rice, topped with a rotating green, protein, and seasonal vegetable. Finished with ghee tadka and house pickle. Available veg and non-veg. The protein and greens rotate with each week's menu.",
  components: [
    { slot: 'Base', options: ['Toor dal pappu', 'Steamed rice'] },
    { slot: 'Green', options: ['Spinach', 'Moringa', 'Methi'] },
    { slot: 'Protein', options: ['Chicken tikka', 'Paneer tikka'] },
    { slot: 'Vegetable', options: ['Broccoli', 'Cabbage', 'Carrot', 'Beetroot'] },
  ],
  prices: [
    { variant: 'Veg (paneer)', price: 11 },
    { variant: 'Non-veg (chicken)', price: 13 },
    { variant: 'Double protein', price: 15 },
  ],
}

export const drinks = [
  {
    name: 'Andhra Majjiga',
    tagline: 'The coolant after the fire.',
    description: 'Spiced buttermilk, the Andhra way. Thin-set curd whisked with fresh curry leaves, green chilli, ginger, and a pinch of asafoetida.',
    price: 4,
  },
  {
    name: 'Rose & Cardamom Lassi',
    tagline: 'The one they serve at celebrations.',
    description: 'Thick yoghurt blended with homemade rose syrup, green cardamom, and a whisper of saffron. Cold, fragrant, satisfying enough to be dessert.',
    price: 5,
  },
  {
    name: 'Tulsi Nimbu Sharbat',
    tagline: 'Temple water, bottled.',
    description: 'Fresh lemon, holy basil-infused water, raw cane sugar, black salt, and roasted cumin. Bright, earthy, vegan, made the old way.',
    price: 4,
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'cuisines' },
  { value: 100, suffix: '%', label: 'home-cooked' },
  { value: 0, suffix: '', label: 'shortcuts' },
]

export const steps = [
  { n: 1, title: 'Browse the week', body: 'Each Monday I post the rotating biryani and protein bowl for the week on Kookxtra and WhatsApp.' },
  { n: 2, title: 'Pre-order', body: 'Order 24–48h ahead. I only cook what is ordered. Zero waste, zero shortcuts.' },
  { n: 3, title: 'I cook on the day', body: 'Dum-cooked, sealed, slow. Every batch fresh from the kitchen.' },
  { n: 4, title: 'Pick up or delivered', body: 'Self-pickup in Amsterdam, or delivery via Kookxtra.' },
]
