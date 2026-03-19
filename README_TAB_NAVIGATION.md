# Duanamize Tab Navigation System

A tab-based navigation system that combines three React pages into a single application with smooth transitions and responsive design.

## Features

- **Tab Navigation**: Switch between Home, Approach, and LSS+AI Revolution pages
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Modern UI**: Built with Tailwind CSS and Lucide React icons
- **Sticky Navigation**: Easy access to tabs from both header and footer

## Pages Included

1. **Home Page** (`duanamize_homepage_previewable_fixed_footer (2).jsx`)
   - Main landing page with services overview
   - Industry coverage and insights
   - Hero section with animated elements

2. **Approach Page** (`duanamize_approach_page (3) (1).jsx`)
   - Methodology and delivery framework
   - Four subcategories: LSS+AI Methodology, Process, Technology Stack, Outcomes Framework
   - Detailed topic cards and process phases

3. **LSS+AI Revolution Page** (`duanamize_lss_ai_revolution_2025_page (1).jsx`)
   - AI-enhanced Lean Six Sigma methodology
   - Comparison between traditional and AI-enhanced approaches
   - Case studies and implementation framework

## Quick Start (Method 1: Simple HTML)

1. Open `index.html` in your web browser
2. The application will load with all three pages accessible via tabs

## Development Setup (Method 2: React Development)

### Prerequisites
- Node.js installed on your system

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Alternative Development Server

If you prefer using webpack-dev-server:

1. Install dependencies:
```bash
npm install
```

2. Start the webpack dev server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:8080`

## File Structure

```
├── index.html                          # Simple HTML entry point
├── package.json                        # Dependencies and scripts
├── webpack.config.js                   # Webpack configuration
├── tab_navigation_app.jsx              # Main tab navigation component
├── App.jsx                            # React app entry point
├── duanamize_homepage_previewable_fixed_footer (2).jsx  # Home page
├── duanamize_approach_page (3) (1).jsx              # Approach page
├── duanamize_lss_ai_revolution_2025_page (1).jsx     # LSS+AI page
└── README_TAB_NAVIGATION.md           # This file
```

## Usage

### Desktop Navigation
- Use the tab buttons in the header to switch between pages
- Hover effects and active states provide visual feedback
- Quick navigation available in the footer

### Mobile Navigation
- Click the "Menu" button to open the mobile navigation drawer
- Each tab shows the page label and description
- Tap any tab to navigate and close the menu

### Features
- **Smooth Transitions**: Pages animate in/out when switching tabs
- **Sticky Header**: Navigation always accessible at the top
- **Footer Navigation**: Quick tab switching from the bottom
- **Responsive**: Adapts to different screen sizes
- **Visual Indicators**: Active tab highlighting and icons

## Customization

### Adding New Pages
1. Import your page component in `tab_navigation_app.jsx`
2. Add a new tab object to the `tabs` array:
```javascript
{
  id: 'new-page',
  label: 'New Page',
  icon: YourIcon,
  component: YourComponent,
  description: 'Page description'
}
```

### Styling
- Modify Tailwind classes in the components
- Update colors in the gradient classes (currently using `[#0A2463]` and `blue-600`)
- Adjust animations in the Framer Motion components

## Dependencies

- **React 18**: UI framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Babel**: JavaScript transpiler
- **Webpack**: Module bundler (for development mode)

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### Common Issues

1. **Pages not loading**: Ensure all JSX files are in the same directory
2. **Icons not showing**: Check Lucide React installation
3. **Animations not working**: Verify Framer Motion is properly loaded
4. **Styles not applied**: Ensure Tailwind CSS is loaded correctly

### Development Mode Issues

1. **Port already in use**: Change port in webpack.config.js or use a different port
2. **Module not found**: Run `npm install` to install all dependencies
3. **Build errors**: Check for syntax errors in JSX files

## Production Deployment

For production deployment:

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your web server

3. Or use the simple `index.html` file for static hosting

## Support

For any issues or questions, please contact:
- Email: selvan@duanamize.org
- Phone: +91 9884919972

---

© 2025 Duanamize Global Services Private Limited. All rights reserved.
