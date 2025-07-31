# Marsabit Cultural Events

A Next.js web application showcasing cultural events, festivals, and celebrations in Marsabit County, Kenya. Built with modern web technologies and featuring a professional design inspired by Kenyan government websites.

## 🇰🇪 About

Marsabit Cultural Events is a digital platform that celebrates the rich heritage and vibrant culture of Marsabit County. The application provides a centralized hub for discovering, exploring, and managing cultural events, festivals, and community celebrations.

## ✨ Features

### Public Features

- **Hero Section**: Stunning hero image showcasing Marsabit's natural beauty
- **Event Discovery**: Browse upcoming, current, and past cultural events
- **Event Categories**: Filter by Cultural, Sports, Music, Art, and Technology events
- **Event Gallery**: Visual galleries showcasing memories from past events
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI**: Kenya government-inspired color scheme and design
- **Smooth Navigation**: Interactive elements with smooth scrolling

### Admin Features

- **Event Management**: Create, edit, and manage cultural events
- **Gallery Management**: Upload and organize event photos
- **Dashboard**: Administrative interface for content management
- **Secure Authentication**: Simple admin login system

## 🎨 Design System

The application uses a color palette inspired by Kenyan government websites:

- **Primary Blue**: `#003366` - Deep navy blue for headers and primary text
- **Primary Green**: `#006633` - Kenya green for accents and active states
- **Accent Red**: `#cc0000` - Kenya red for important actions
- **Secondary Colors**: Lighter variations for hover states and backgrounds
- **Neutral Grays**: Professional grays for text and backgrounds

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kiganyamburu/marsabit-event.git
cd marsabit-cultural-events
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Admin Access

To access the admin dashboard:

- Navigate to `/auth/login`
- Use the demo credentials:
  - **Email**: `admin@gmail.com`
  - **Password**: `adminpass`

## 📁 Project Structure

```
marsabit-cultural-events/
├── app/
│   ├── auth/login/          # Authentication pages
│   ├── dashboard/manage/    # Admin management pages
│   ├── events/[id]/         # Individual event pages
│   ├── gallery/             # Gallery pages
│   ├── globals.css          # Global styles with Kenya theme
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── gallery/             # Gallery components
│   ├── home/                # Home page components (Hero, Events)
│   └── navbar/              # Navigation components
├── lib/
│   ├── data/                # Static data files
│   └── interfaces/          # TypeScript interfaces
├── public/
│   └── images/              # Event images and hero image
└── README.md
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 with custom Kenya theme
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **State Management**: React hooks (useState, useEffect)
- **Authentication**: Simple localStorage-based admin auth

## 📱 Pages Overview

### Public Pages

- **Home (`/`)**: Hero section with Marsabit imagery and event listings with filtering
- **Gallery (`/gallery`)**: Visual galleries for all events
- **Event Details (`/events/[id]`)**: Individual event information
- **Login (`/auth/login`)**: Admin authentication

### Admin Pages

- **Event Management (`/dashboard/manage/events`)**: Admin event CRUD operations
- **Gallery Management (`/dashboard/manage/gallery`)**: Admin gallery management

## 🎯 Key Components

## 🎯 Key Components

### Hero Component

- Stunning full-screen hero section with Marsabit landscape imagery
- Call-to-action buttons with smooth scrolling functionality
- Professional gradient overlay maintaining Kenya government theme
- Responsive design adapting to all screen sizes

### Events Component

- Displays filterable grid of cultural events
- Category filtering (Cultural, Sports, Music, Art, Technology)
- Timeline filtering (Past, Current, Upcoming)
- Color-coded event categories

### Gallery Component

- Visual showcase of event photographs
- Click-to-view individual event galleries
- Responsive image grid layout

### Navbar Component

- Fixed navigation with Kenya-themed styling
- Different navigation for public users vs admins
- Mobile-responsive hamburger menu

## 🌍 Cultural Categories

The platform supports various types of cultural events:

- **Cultural**: Traditional festivals, ceremonies, and cultural celebrations
- **Sports**: Community sports events and competitions
- **Music**: Concerts, traditional music performances, and festivals
- **Art**: Art exhibitions, craft fairs, and artistic showcases
- **Technology**: Digital literacy events and tech workshops

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- [ ] User registration and event RSVP system
- [ ] Event calendar integration
- [ ] Social media sharing features
- [ ] Multi-language support (English, Swahili, local languages)
- [ ] Event ticketing system
- [ ] Push notifications for event updates
- [ ] Integration with mapping services for event locations
- [ ] User-generated content and reviews

## 📞 Contact

For questions, suggestions, or support:

- **Project Repository**: [GitHub](https://github.com/kiganyamburu/marsabit-event)
- **Issues**: [GitHub Issues](https://github.com/kiganyamburu/marsabit-event/issues)

---

**Celebrating Marsabit's Rich Cultural Heritage** 🎭🎪🎨
