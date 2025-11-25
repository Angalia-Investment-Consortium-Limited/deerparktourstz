# Tanzanian Safari Journeys

**A Premium Safari Experience Platform**

Developed and maintained by **ANGALIA INVESTMENT CONSORTIUM LIMITED**

---

## About This Project

Tanzanian Safari Journeys is a comprehensive web application designed to showcase and manage premium safari experiences in Tanzania. The platform provides an immersive digital experience for travelers seeking authentic African safari adventures, featuring detailed destination information, customizable tour packages, and seamless booking capabilities.

## Project Overview

This application serves as the digital gateway for safari enthusiasts to explore Tanzania's magnificent wildlife destinations, including:

- **Serengeti National Park** - Witness the Great Migration
- **Ngorongoro Crater** - UNESCO World Heritage Site
- **Mount Kilimanjaro** - Africa's highest peak
- **Tarangire National Park** - Elephant paradise
- **Lake Manyara** - Diverse ecosystems
- **Zanzibar** - Tropical island paradise

## Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn-ui
- **Styling**: Tailwind CSS
- **Backend CMS**: Strapi (see `strapi-backend/` directory)
- **Form Handling**: PHP handlers for contact and inquiry forms

## Getting Started

### Prerequisites

- Node.js (v16 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd tanzanian-safari-journeys
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Access the application**
   
   Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
tanzanian-safari-journeys/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages/routes
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── assets/         # Images and static assets
├── strapi-backend/     # Strapi CMS backend
├── php-forms/          # PHP form handlers
├── public/             # Public static files
└── docs/               # Documentation files
```

## Development Workflow

### Local Development

1. Make your changes in the appropriate files
2. Test locally using `npm run dev`
3. Ensure code quality with `npm run lint`
4. Build for production with `npm run build`
5. Commit changes with descriptive messages

### Code Standards

- Follow TypeScript best practices
- Use ESLint configuration provided
- Maintain component modularity
- Write clean, documented code
- Follow the existing project structure

## Deployment

### Building for Production

```sh
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

The application can be deployed to various hosting platforms:

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Traditional Hosting**: cPanel, shared hosting with Node.js support
- **Cloud Platforms**: AWS, Google Cloud, Azure

Refer to `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

### Environment Configuration

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=your_api_url
VITE_STRAPI_URL=your_strapi_url
```

## Backend Integration

This project includes a Strapi CMS backend for content management. See the `strapi-backend/README.md` for:

- Backend setup instructions
- API documentation
- Content type schemas
- Database configuration

## Features

### User-Facing Features
- Interactive destination explorer
- Detailed tour package information
- Real-time availability checking
- Inquiry and booking forms
- Customer testimonials
- Blog with safari tips and stories
- Responsive design for all devices

### Admin Features (via Strapi)
- Content management system
- Blog post management
- Tour package administration
- Booking inquiry tracking
- Customer testimonial management
- Media library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a proprietary project developed by ANGALIA INVESTMENT CONSORTIUM LIMITED. For internal development guidelines and contribution procedures, please contact the development team.

## Support & Contact

For technical support, feature requests, or inquiries:

**ANGALIA INVESTMENT CONSORTIUM LIMITED**
- Email: info@angaliainvestment.com
- Website: [Company Website]
- Technical Support: [Support Portal]

## Security

If you discover any security vulnerabilities, please report them to our security team immediately at security@angaliainvestment.com.

## License

Copyright © 2024 ANGALIA INVESTMENT CONSORTIUM LIMITED. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission from ANGALIA INVESTMENT CONSORTIUM LIMITED.

---

**Developed with excellence by ANGALIA INVESTMENT CONSORTIUM LIMITED**
