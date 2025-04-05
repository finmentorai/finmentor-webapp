# Finmentor - Learn, Discover, and Grow in Finance

Welcome to Finmentor, an innovative learning platform that bridges the gap between financial education and real-world applications. Our platform enables users to discover and learn about financial concepts while creating a unique marketplace where tech companies and businesses can engage through educational content and targeted advertising.

## About Finmentor

Finmentor combines educational content with practical applications to create an engaging learning experience:

- **Interactive Learning**: Discover financial concepts through interactive modules and real-world examples
- **Marketplace Integration**: Connect with tech companies and businesses through educational content
- **Smart Content Delivery**: Personalized learning paths enhanced by blockchain technology
- **Business Engagement**: Innovative ad placement through educational and news content
- **Onchain Integration**: Leveraging blockchain for transparent content verification and rewards

## Technical Features

- **Next.js** with App Router for optimal structure and routing
- **Shadcn** for beautiful, reusable UI components
- **Bun** runtime for faster builds and improved performance
- **Dynamic Wallet** integration for Web3 features
- **Onchain** blockchain integration for content verification and rewards

## Features

- **Next.js** with App Router for optimal structure and routing.
- **Shadcn** for beautiful, reusable UI components.
- **Bun** runtime for faster builds and improved performance.
- Configured for **Dynamic Wallet** (powered by [dynamic.xyz](https://dynamic.xyz)) to handle wallet creation and connection.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Ensure Bun is installed as your runtime)
- [Bun](https://bun.sh/docs/installation)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/finmentorai/finmentor-webapp.git
   cd finmentor-webapp
   ```

2. **Install dependencies using Bun:**

   ```bash
   bun install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add the following variables:

   ```plaintext
   NEXT_PUBLIC_DYNAMIC_API_KEY=your_dynamic_api_key
   NEXT_PUBLIC_BLOCKCHAIN_RPC_URL=https://blockchain-rpc-url
   ```

   Replace `your_dynamic_api_key` with your API key from [dynamic.xyz](https://dynamic.xyz) and `https://blockchain-rpc-url` with your preferred Blockchain RPC endpoint.

### Running the Project

To start the development server, run:

```bash
bun run dev
```

This will launch the app at `http://localhost:3000`.

### Build and Production

For production builds, use:

```bash
bun run build
bun run start
```

## Project Structure

```plaintext
.
├── public/          # Static assets and images
├── src/
│   ├── app/        # Next.js pages and routing
│   ├── components/ # Reusable React components
│   ├── features/   # Feature-specific components and logic
│   │   ├── auth/   # Authentication related components
│   │   ├── learn/  # Learning modules and components
│   │   └── marketplace/ # Marketplace related features
│   ├── lib/        # Utility functions and shared logic
│   ├── styles/     # Global stylesheets
│   └── types/      # TypeScript type definitions
├── contracts/      # Smart contracts for content verification
├── .env           # Environment variables
└── ...            # Other configuration files
```

## Environment Setup

Create a `.env` file in the root of your project and add the following variables:

```plaintext
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXT_PUBLIC_DYNAMIC_API_KEY=your_dynamic_api_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Blockchain Configuration
NEXT_PUBLIC_BLOCKCHAIN_RPC_URL=https://blockchain-rpc-url
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address

# Database (if applicable)
DATABASE_URL=your_database_url
```

## Development Workflow

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Start the development server:**

   ```bash
   bun run dev
   ```

3. **Build for production:**
   ```bash
   bun run build
   bun run start
   ```

## Contributing

We welcome contributions to Finmentor! Whether it's:

- Adding new learning modules
- Improving the marketplace functionality
- Enhancing the user experience
- Fixing bugs or improving documentation

Please feel free to submit issues or pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).
