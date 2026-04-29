export const biryanis = [
  {
    name: 'Hyderabadi Dum Biryani',
    description: 'Slow-sealed dum cooking, saffron basmati, caramelised onions, whole spices. Served with raita and mirchi salan.',
    tags: ['Halal', 'Signature'],
    price: 14,
  },
  {
    name: 'Fry Piece Biryani',
    description: 'Andhra-style biryani with deep-fried masala chicken pieces layered into dum-cooked rice. Intense, aromatic — eaten on special occasions.',
    tags: ['Halal', 'Spicy'],
    price: 15,
  },
  {
    name: '65 Biryani',
    description: 'Named after the legendary Chicken 65. Crispy spiced chicken folded into dum biryani — bold, punchy, street-food classic elevated.',
    tags: ['Halal', 'Spicy', 'Street style'],
    price: 15,
  },
  {
    name: 'Veg Dum Biryani',
    description: 'Seasonal vegetables and paneer, same dum technique. Not a compromise, a choice.',
    tags: ['Vegetarian'],
    price: 12,
  },
]

export const shaktiBowl = {
  name: 'Andhra Shakti Bowl',
  tagline: 'Strength, in a bowl.',
  description:
    'A complete Andhra meal: slow-cooked toor dal pappu over steamed rice, topped with a rotating green, protein, and seasonal vegetable. Finished with ghee tadka and house pickle.',
  components: [
    { slot: 'Base', options: ['Toor dal pappu', 'Steamed rice'] },
    { slot: 'Green', options: ['Spinach', 'Moringa', 'Methi'] },
    { slot: 'Protein', options: ['Chicken tikka', 'Paneer tikka'] },
    { slot: 'Vegetable', options: ['Broccoli', 'Cabbage', 'Carrot', 'Beetroot'] },
  ],
  prices: [
    { variant: 'Paneer tikka', price: 11 },
    { variant: 'Chicken tikka', price: 13 },
    { variant: 'Double protein', price: 15 },
  ],
}

export const mains = [
  { name: 'Butter Chicken', description: 'North Indian murgh makhani — velvety tomato-cashew sauce, halal chicken, cardamom and fenugreek.', tags: ['Halal'], price: 13 },
  { name: 'Dal Makhani', description: 'Black lentils simmered overnight with butter and cream. The dish that rewards patience.', tags: ['Vegetarian'], price: 10 },
  { name: 'Paneer Tikka Masala', description: 'Grilled paneer in bold spiced tomato gravy.', tags: ['Vegetarian'], price: 12 },
  { name: 'Chana Masala', description: 'Punjabi chickpeas in tangy tomato-onion gravy. Vegan, high-protein.', tags: ['Vegan'], price: 10 },
  { name: 'Masala Dosa', description: 'Fermented rice-lentil crepe, spiced potato filling, coconut chutney. Weekend special.', tags: ['Vegan'], price: 11 },
  { name: 'South Indian Thali', description: 'Full meal: rice, rasam, sambar, 2 vegetable curries, papad, pickle.', tags: ['Vegetarian'], price: 14 },
]

export const drinks = [
  {
    name: 'Andhra Majjiga',
    tagline: 'The coolant after the fire.',
    description: 'Spiced buttermilk the Andhra way — thin-set curd whisked with fresh curry leaves, green chilli, ginger, and a pinch of asafoetida.',
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
  { n: 1, title: 'Browse the week', body: 'Each Monday I post the rotating biryani and any specials on Kookxtra and WhatsApp.' },
  { n: 2, title: 'Pre-order', body: 'Order 24–48h ahead. I only cook what is ordered — zero waste, zero shortcuts.' },
  { n: 3, title: 'I cook on the day', body: 'Dum-cooked, sealed, slow. Every batch fresh from the kitchen.' },
  { n: 4, title: 'Pick up or delivered', body: 'Self-pickup in Amsterdam, or delivery via Kookxtra.' },
]
