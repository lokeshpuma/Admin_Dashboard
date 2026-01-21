# ForesTracker 2

A comprehensive forest and wildlife tracking application built with Next.js, designed to monitor and manage forest resources, animals, water bodies, and conservation officers.

## Features

- **Dashboard**: Real-time overview of forest data and activities
- **Animal Tracking**: Monitor wildlife populations and tracking data
- **Forest Management**: Track forest resources and conservation status
- **Water Bodies**: Monitor water quality and management
- **Officer Management**: Manage conservation officers and assignments
- **Resource Management**: Track forest resources and their utilization
- **Recent Activities**: View and track recent conservation activities
- **User Authentication**: Secure login and registration system
- **Dark Mode Support**: Built-in theme support with dark and light modes

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Authentication**: Built-in auth middleware
- **Package Manager**: pnpm

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── animals/         # Animal tracking pages
│   ├── forests/         # Forest management pages
│   ├── login/           # Authentication pages
│   ├── officers/        # Officer management
│   ├── resources/       # Resource tracking
│   ├── settings/        # User settings
│   └── water-bodies/    # Water body monitoring
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Feature components
├── lib/                # Utility functions and types
├── hooks/              # Custom React hooks
├── public/             # Static assets
└── styles/             # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lokeshpuma/ForesTracker-2.git
cd ForesTracker-2
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables (if needed):
```bash
# Create a .env.local file with your configuration
```

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build for production:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## Deployment

This project is configured for GitHub Pages deployment. The static build is automatically generated and can be deployed to GitHub Pages.

### GitHub Pages Deployment

1. Ensure all changes are committed:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
```

2. Build the project:
```bash
pnpm build
```

3. Push to GitHub:
```bash
git push origin main
```

4. Enable GitHub Pages in your repository settings and select the branch for deployment.

## Available Scripts

- `pnpm dev` - Run development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm clean:deps` - Clean and reinstall dependencies

## Main Components

- **Dashboard**: Central hub displaying key metrics and recent activities
- **Animal List**: View and manage animal tracking data
- **Forest List**: Monitor forest resources and status
- **Water Quality Chart**: Display water body quality metrics
- **Resource Chart**: Track resource utilization
- **Officer List**: Manage conservation officers

## Pages

- `/` - Home/Dashboard
- `/animals` - Animal Tracking
- `/forests` - Forest Management
- `/water-bodies` - Water Body Monitoring
- `/resources` - Resource Management
- `/officers` - Officer Management
- `/settings` - User Settings
- `/login` - User Login
- `/register` - User Registration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For more information about ForesTracker 2, please visit the [GitHub repository](https://github.com/lokeshpuma/ForesTracker-2).

---

Built with ❤️ for forest conservation
