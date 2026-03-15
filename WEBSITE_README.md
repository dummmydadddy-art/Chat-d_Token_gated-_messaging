# Awesome Online Services Website

An interactive, dynamic, and topic-oriented website for Awesome Online Services - your one-stop solution for printing, money transfer, and document services.

## Features

### Services Offered
- **Money Transfer** - Fast and secure money transfer services
- **Xerox Services** - High-quality photocopying with bulk discounts
- **Internet Prints** - Print documents directly from the internet or cloud
- **PVC Cards** - Professional PVC ID cards and membership cards
- **Lamination** - Document protection with professional lamination
- **Spiral Binding** - Durable spiral binding for reports and manuals
- **Soft Binding** - Professional soft binding for presentations
- **Large Format Prints** - Print sizes from A4 to A0

### Interactive Features
- **Dynamic Navigation** - Smooth scrolling with active section highlighting
- **Service Modals** - Click any service card to see detailed information
- **Animated Statistics** - Counter animations showing business metrics
- **Contact Form** - Interactive form for customer inquiries
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Floating Animations** - Eye-catching hero section with floating elements
- **Hover Effects** - Interactive card hover effects throughout
- **Mobile Menu** - Hamburger menu for mobile navigation

### Design Highlights
- Modern gradient backgrounds
- Card-based layout
- Professional color scheme (Purple, Cyan, Amber)
- Font Awesome icons
- Smooth transitions and animations
- Accessibility features

## File Structure
```
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── WEBSITE_README.md  # This documentation
```

## How to Use

### Viewing the Website
Simply open `index.html` in any modern web browser:
```bash
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

Or deploy to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

### Customization

#### Updating Services
Edit the `serviceDetails` object in `script.js` to modify service information:
```javascript
const serviceDetails = {
    'service-name': {
        title: 'Service Title',
        icon: 'fas fa-icon-name',
        description: 'Service description',
        features: ['Feature 1', 'Feature 2'],
        pricing: 'Pricing information'
    }
};
```

#### Changing Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #06b6d4;
    --accent-color: #f59e0b;
}
```

#### Updating Contact Information
Edit the contact section in `index.html` (lines 300-340).

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Technologies Used
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0 (via CDN)

## Performance Features
- Intersection Observer API for scroll animations
- CSS animations for smooth transitions
- Optimized DOM manipulation
- Lazy animation loading

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support (ESC to close modals)
- Responsive text sizing
- High contrast colors

## Future Enhancements
- Backend integration for form submissions
- Online payment gateway
- File upload functionality for print services
- Order tracking system
- Customer account system
- Live chat support

## License
This website is created for Awesome Online Services.

## Support
For questions or support, contact: info@awesomeonline.com
