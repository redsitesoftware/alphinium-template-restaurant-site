export const COLORS = {
  background: '#1B0B06',
  surface: '#26110B',
  card: '#33201A',
  text: '#F8EDE0',
  muted: '#D7B8A2',
  primary: '#C84C2A',
  secondary: '#F09A4A',
  gold: '#D8B16A',
  border: 'rgba(240, 154, 74, 0.18)',
  success: '#76C893',
};

export const heroImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80';

export const featuredDishes = [
  {
    id: 'fire-charred-octopus',
    name: 'Fire-charred Octopus',
    category: 'Starters',
    price: '$24',
    dietary: ['GF'],
    description: 'Lemon myrtle oil, smoked peppers and crisp fennel.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
  {
    id: 'market-fillet',
    name: 'Market Fillet',
    category: 'Mains',
    price: '$42',
    dietary: ['GF'],
    description: 'Coal-roasted fish, shellfish butter and native herbs.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  },
  {
    id: 'roasted-pumpkin-risotto',
    name: 'Roasted Pumpkin Risotto',
    category: 'Mains',
    price: '$34',
    dietary: ['Veg', 'GF'],
    description: 'Burnt butter sage, macadamia crumble and parmesan snow.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
  },
  {
    id: 'woodfired-lamb',
    name: 'Woodfired Lamb',
    category: 'Mains',
    price: '$46',
    dietary: [],
    description: 'Black garlic glaze, confit shallots and jus.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  },
  {
    id: 'wattleseed-pavlova',
    name: 'Wattleseed Pavlova',
    category: 'Desserts',
    price: '$18',
    dietary: ['Veg'],
    description: 'Finger lime cream, summer berries and native mint.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80',
  },
];

export const menuCategories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];
export const dietaryFilters = ['All', 'Veg', 'GF'];

export const menuItems = [
  ...featuredDishes,
  {
    id: 'kingfish-crudo',
    name: 'Kingfish Crudo',
    category: 'Starters',
    price: '$26',
    dietary: ['GF'],
    description: 'Yuzu kosho, cucumber ribbons and sea herbs.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
  {
    id: 'ember-carrots',
    name: 'Ember Carrots',
    category: 'Starters',
    price: '$19',
    dietary: ['Veg', 'GF'],
    description: 'Whipped feta, honey glaze and pistachio dukkah.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
  },
  {
    id: 'beef-short-rib',
    name: 'Braised Short Rib',
    category: 'Mains',
    price: '$44',
    dietary: ['GF'],
    description: 'Celeriac puree, roast shallot and shiraz jus.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  },
  {
    id: 'truffle-gnocchi',
    name: 'Truffle Gnocchi',
    category: 'Mains',
    price: '$36',
    dietary: ['Veg'],
    description: 'Potato gnocchi, pecorino cream and black truffle.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  },
  {
    id: 'basque-cheesecake',
    name: 'Basque Cheesecake',
    category: 'Desserts',
    price: '$17',
    dietary: ['Veg'],
    description: 'Caramelised top, poached pear and wattleseed caramel.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80',
  },
  {
    id: 'sunset-negroni',
    name: 'Sunset Negroni',
    category: 'Drinks',
    price: '$19',
    dietary: ['GF'],
    description: 'Blood orange, native gin and smoked rosemary.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  },
  {
    id: 'garden-spritz',
    name: 'Garden Spritz',
    category: 'Drinks',
    price: '$16',
    dietary: ['Veg', 'GF'],
    description: 'Sparkling citrus aperitif with Davidson plum.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
];

export const aboutHighlights = [
  'Seasonal Australian produce with a fire-led kitchen.',
  'Curated 180-bottle wine cellar and private dining room.',
  'Open kitchen counter for chef\'s tasting experiences.',
];

export const quickInfo = [
  { label: 'Hours', value: 'Tue–Sun · 5:30pm–11:00pm' },
  { label: 'Location', value: '18 Harbour Lane, Sydney' },
  { label: 'Phone', value: '(02) 9012 4408' },
];

export const bookingDates = Array.from({ length: 7 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return {
    id: date.toISOString(),
    label: date.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
    full: date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' }),
  };
});

export const timeSlots = ['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];
export const partySizes = ['2 guests', '4 guests', '6 guests', '8 guests', '10 guests'];
