import React from 'react';
import { createRoot } from 'react-dom/client';
import TabNavigationApp from './tab_navigation_app.jsx';

// Import Tailwind CSS if needed
import './tailwind.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<TabNavigationApp />);
