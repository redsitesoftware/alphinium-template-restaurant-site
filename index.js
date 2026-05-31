import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';

import App from './App';

if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.setAttribute('id', 'restaurant-scroll-fix');
  style.textContent = `
    html, body {
      min-height: 100%;
      background: #1A0A00;
      overflow-y: auto !important;
    }
    #root {
      min-height: 100vh;
    }
  `;
  document.head.appendChild(style);
}

registerRootComponent(App);
