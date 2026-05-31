import React, { createContext, useContext, useMemo, useReducer } from 'react';

export const categories = ['All', 'Starters', 'Pasta', 'Pizza', 'Mains', 'Desserts', 'Drinks'];

export const menuItems = [
 {
 id: 'bruschetta-classica',
 category: 'Starters',
 name: 'Bruschetta Classica',
 emoji: '',
 price: 14,
 description: 'Toasted sourdough, heirloom tomatoes, fresh basil, garlic, olive oil drizzle',
 },
 {
 id: 'burrata-prosciutto',
 category: 'Starters',
 name: 'Burrata & Prosciutto',
 emoji: '',
 price: 19,
 description: 'Fresh burrata, San Daniele prosciutto, rocket, balsamic reduction',
 },
 {
 id: 'calamari-fritti',
 category: 'Starters',
 name: 'Calamari Fritti',
 emoji: '',
 price: 17,
 description: 'Crispy calamari, lemon aioli, sea salt, fresh herbs',
 },
 {
 id: 'arancini-truffle',
 category: 'Starters',
 name: 'Arancini Truffle',
 emoji: '',
 price: 16,
 description: 'Truffle risotto balls, parmesan, arrabiata dipping sauce',
 },
 {
 id: 'tagliatelle-ragu',
 category: 'Pasta',
 name: 'Tagliatelle al Ragù',
 emoji: '',
 price: 28,
 description: 'Slow-cooked beef ragù, handmade tagliatelle, pecorino, fresh herbs',
 },
 {
 id: 'cacio-e-pepe',
 category: 'Pasta',
 name: 'Cacio e Pepe',
 emoji: '',
 price: 24,
 description: 'Classic Roman, Tonnarelli pasta, black pepper, Pecorino Romano',
 },
 {
 id: 'seafood-linguine',
 category: 'Pasta',
 name: 'Seafood Linguine',
 emoji: '',
 price: 36,
 description: 'Prawns, scallops, clams, cherry tomatoes, white wine',
 },
 {
 id: 'pappardelle-funghi',
 category: 'Pasta',
 name: 'Pappardelle Funghi',
 emoji: '',
 price: 27,
 description: 'Wild mushrooms, truffle oil, parmesan, fresh thyme',
 },
 {
 id: 'margherita',
 category: 'Pizza',
 name: 'Margherita',
 emoji: '',
 price: 22,
 description: 'San Marzano tomato, fior di latte, fresh basil, olive oil',
 },
 {
 id: 'diavola',
 category: 'Pizza',
 name: 'Diavola',
 emoji: '️',
 price: 26,
 description: 'Spicy salami, nduja, fior di latte, chilli, fresh basil',
 },
 {
 id: 'tartufo-bianco',
 category: 'Pizza',
 name: 'Tartufo Bianco',
 emoji: '',
 price: 32,
 description: 'Truffle cream base, mushrooms, fontina, prosciutto',
 },
 {
 id: 'quattro-formaggi',
 category: 'Pizza',
 name: 'Quattro Formaggi',
 emoji: '',
 price: 28,
 description: 'Gorgonzola, mozzarella, fontina, parmesan',
 },
 {
 id: 'bistecca-fiorentina',
 category: 'Mains',
 name: 'Bistecca Fiorentina',
 emoji: '',
 price: 65,
 description: '600g T-bone, herb butter, roasted rosemary potatoes',
 },
 {
 id: 'branzino-al-forno',
 category: 'Mains',
 name: 'Branzino al Forno',
 emoji: '',
 price: 48,
 description: 'Whole roasted sea bass, capers, lemon, cherry tomatoes, olives',
 },
 {
 id: 'osso-buco',
 category: 'Mains',
 name: 'Osso Buco alla Milanese',
 emoji: '',
 price: 54,
 description: 'Slow-braised veal shank, gremolata, saffron risotto',
 },
 {
 id: 'tiramisu',
 category: 'Desserts',
 name: 'Tiramisu',
 emoji: '',
 price: 16,
 description: 'Classic recipe, Savoiardi, mascarpone, espresso, cocoa',
 },
 {
 id: 'panna-cotta',
 category: 'Desserts',
 name: 'Panna Cotta',
 emoji: '',
 price: 15,
 description: 'Vanilla, seasonal berry coulis, mint',
 },
 {
 id: 'cannoli-siciliani',
 category: 'Desserts',
 name: 'Cannoli Siciliani',
 emoji: '',
 price: 14,
 description: 'Crispy shells, ricotta, pistachios, candied orange',
 },
 {
 id: 'aperol-spritz',
 category: 'Drinks',
 name: 'Aperol Spritz',
 emoji: '',
 price: 18,
 description: 'Classic Venetian aperitivo with prosecco and soda.',
 },
 {
 id: 'negroni',
 category: 'Drinks',
 name: 'Negroni',
 emoji: '',
 price: 22,
 description: 'A bold Italian classic with gin, vermouth and Campari.',
 },
 {
 id: 'italian-sparkling-water',
 category: 'Drinks',
 name: 'Italian sparkling water',
 emoji: '',
 price: 8,
 description: 'Chilled premium sparkling mineral water.',
 },
];

const initialState = {
 phase: 'home',
 selectedCategory: 'All',
 selectedDish: null,
 bookingStep: 0,
 bookingData: {
 name: '',
 email: '',
 phone: '',
 date: '',
 time: '',
 guests: 2,
 notes: '',
 },
};

const RestaurantContext = createContext(null);

function reducer(state, action) {
 switch (action.type) {
 case 'SET_PHASE':
 return {
 ...state,
 phase: action.phase,
 bookingStep: action.phase === 'booking' ? state.bookingStep : 0,
 };
 case 'SELECT_CATEGORY':
 return { ...state, selectedCategory: action.category };
 case 'SELECT_DISH':
 return { ...state, selectedDish: action.dish, phase: 'dish' };
 case 'UPDATE_BOOKING_FIELD':
 return {
 ...state,
 bookingData: {
 ...state.bookingData,
 [action.field]: action.value,
 },
 };
 case 'SET_BOOKING_STEP':
 return { ...state, bookingStep: action.step, phase: 'booking' };
 case 'RESET_BOOKING':
 return {
 ...state,
 phase: 'home',
 bookingStep: 0,
 bookingData: initialState.bookingData,
 };
 case 'APPEND_BOOKING_NOTE':
 return {
 ...state,
 phase: 'booking',
 bookingStep: 0,
 bookingData: {
 ...state.bookingData,
 notes: state.bookingData.notes
 ? `${state.bookingData.notes}\n${action.note}`
 : action.note,
 },
 };
 default:
 return state;
 }
}

export function RestaurantProvider({ children }) {
 const [state, dispatch] = useReducer(reducer, initialState);

 const value = useMemo(
 () => ({
 state,
 dispatch,
 categories,
 menuItems,
 }),
 [state]
 );

 return <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>;
}

export function useRestaurant() {
 const context = useContext(RestaurantContext);
 if (!context) {
 throw new Error('useRestaurant must be used within RestaurantProvider');
 }
 return context;
}
