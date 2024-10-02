<p align="center">
  <a href="https://www.barkprotocol.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://ucarecdn.com/74392932-2ff5-4237-a1fa-e0fd15725ecc/bark_dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://ucarecdn.com/74392932-2ff5-4237-a1fa-e0fd15725ecc/bark_light.svg">
      <img alt="BARK logo" src="https://ucarecdn.com/74392932-2ff5-4237-a1fa-e0fd15725ecc/bark.svg">
    </picture>
  </a>
</p>

<h1 align="center">
  BARK: A Headless e-Commerce Platform Monorepo
</h1>

<h4 align="center">
  <a href="https://commerce-docs.barkprotocol.net">Documentation</a> | (Under construction)
  <a href="https://www.barkprotocol.com">Official Website</a> |
  <a href="https://github.com/barkprotocol/medusa--bark-payment-plugin/">We3 Payments Plugins</a> | (Under construction)
</h4>

BARK | Commerce is an innovative, headless e-Commerce platform that leverages the power of MedusaJS, Solana blockchain, and USDC stablecoin. Designed for modern businesses, BARK Protocol offers a decentralized, scalable, and flexible solution for all your eCommerce needs. The platform integrates seamlessly with modern technologies to provide a robust, customizable, and future-proof solution for online retailers. With its decentralized structure and powerful integrations, BARK Protocol ensures your business stays ahead in the ever-evolving digital marketplace.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Integration Details](#integration-details)
  - [Solana Integration](#solana-integration)
  - [BARK Integration](#solana-integration)
  - [USDC Integration](#usdc-integration)
- [References](#references)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The BARK eCommerce platform is built on the robust MedusaJS framework, providing a seamless headless eCommerce experience that emphasizes speed, flexibility, and cutting-edge blockchain technology. By integrating Solana for lightning-fast transactions and USDC for stable payments, BARK offers a reliable and future-proof solution for online retailers.

## Features

- **Headless Architecture:** A decoupled front-end and back-end structure for maximum flexibility and customization, allowing seamless integration with various front-end frameworks.
- **Solana Blockchain Support:** Leverage Solana's high-speed and low-cost transaction capabilities for efficient payment processing, ensuring quick and secure transactions.
- **Solana Payment Gateway & Plugin:** Utilize SOL, BARK, and USDC stablecoin to minimize currency volatility and ensure stable transactions, offering a reliable payment method for customers.
- **Customizable and Scalable:** Adapt the platform to fit your specific business requirements and scale effortlessly as you grow, providing a tailored solution for various industries.
- **Decentralized Solutions:** Enhance security and transparency through the power of blockchain technology, providing peace of mind for you and your customers by ensuring data integrity and protection.

### Features include:

- **Full e-commerce support:**

  - Product Detail Page
  - Product Overview Page
  - QR code payments features
  - Search with Algolia / MeiliSearch
  - Product Collections
  - Cart
  - Checkout with PayPal, Solana Pay, and Stripe
  - Web3 payment gateways
  - User Accounts
  - Order Details

- **Full Next.js 14 support:**
  - App Router
  - Next fetching/caching
  - Server Components
  - Server Actions
  - Streaming
  - Static Pre-Rendering

## Project Structure

The project is divided into two main folders:

### 1. **Storefront**

This folder contains the front-end components of the platform. Built with Next.js, it manages the user-facing storefront where customers can browse products, add them to the cart, and complete transactions.

- **Next.js:** For server-side rendering and static site generation.
- **Tailwind CSS:** For styling and responsive design.
- **State Management:** Uses React context for handling state.
  
**Storefront directory structure:**
- `pages/`: All Next.js routes and components.
- `components/`: Reusable UI components for the storefront.
- `lib/`: Utilities and helper functions for front-end operations.
- `styles/`: Tailwind configuration and custom styles.

### 2. **Backend**

This folder includes the back-end logic and API handling. It powers the headless architecture of BARK, connecting to MedusaJS, Solana, and USDC.

- **MedusaJS:** For the core eCommerce functionality.
- **PostgreSQL:** The database used for storing product data and order details.
- **Solana & USDC Integrations:** Handles blockchain payments and transactions.

**Backend directory structure:**
- `server/`: The core back-end logic, including APIs.
- `services/`: MedusaJS services that manage the business logic.
- `database/`: PostgreSQL configuration and migration files.
- `config/`: API keys and environment configuration files.

### 3. Web3 Payment Gateway

- **BARK Payment Plugin**:
  - **Seamless Integration**: Easily integrates with your existing MedusaJS setup to enable Web3 payments.
  - **Multi-Currency Support**: Accept payments in SOL, BARK, and USDC stablecoin, providing customers with flexible payment options.
  - **Low Transaction Fees**: Leverage the low-cost transaction capabilities of the Solana blockchain for economical payment processing.

**Payment Plugin Directory Structure:**
  - `src/`: Contains the source code for the web3 payment plugin.
  - `components/`: UI components related to payment processing.
  - `services/`: Functions for handling payment transactions and interactions with the Solana blockchain.
  - `utils/`: Utility functions for managing payment data and API interactions.
  - `config/`: Configuration files for setting up the plugin and API keys.
  - `index.ts`: Entry point for the payment plugin, exporting the main functionalities.

## Getting Started

Visit the [Quickstart Guide](https://docs.medusajs.com/create-medusa-app) to set up a server.

To get your development environment ready and start using BARK Commerce, follow these steps.

### Prerequisites

- **Node.js:** v18.x or later
- **PostgreSQL:** A reliable database solution for storing application data
- **Yarn or npm:** Your preferred package manager

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/barkprotocol/e-commerce-platform.git
   cd backend
   ```

2. **Install Dependencies:**

   ```bash
   yarn install
   ```

   or

   ```bash
   pnpm install
   ```

3. **Set Up the Database:**

   Configure your PostgreSQL database and update the environment variables accordingly.

### Configuration

1. **Environment Variables:**

   Create a `.env` file and configure it with your database and API keys:

   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   SOLANA_API_KEY=your_solana_api_key
   BARK_PAY_API_KEY=your_bark_pay_api_key
   USDC_API_KEY=your_usdc_api_key  # Circle API key
   ```

2. **Configure Medusa:**

   Ensure MedusaJS is properly set up to handle headless operations by following the [MedusaJS setup guide](https://docs.medusajs.com/development/overview).

## Usage

Start the development server:

```bash
yarn start
```

or

```bash
pnpm start
```

This will launch the server, and you can access your eCommerce platform locally at `http://localhost:YOUR_PORT`.

## Integration Details

### Solana Integration

BARK utilizes the Solana blockchain to provide fast and cost-effective transactions. Make sure your Solana API key is correctly configured in your `.env` file. For more information, refer to the [Solana documentation](https://docs.solanalabs.com/).

### BARK Integration

The BARK payment gateway enables BARK token transactions, reducing volatility risks. Ensure your API configuration is correct in the `.env` file. More details can be found in the [BARK Protocol documentation](https://).

### USDC Integration

The USDC payment gateway enables stablecoin transactions, reducing volatility risks. Ensure your API configuration is correct in the `.env` file. More details can be found in the [Circle documentation](https://circle.com/en/).

## References

- [MedusaJS Documentation](https://docs.medusajs.com/development/overview)
- [Circle Documentation](https://circle.com/en/)
- [Solana Documentation](https://docs.solanalabs.com/)
- [Solana Pay Documentation](https://solanapay.com/)

## Contributing

Contributions are welcome and appreciated. Please follow the steps below to contribute to BARK:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add a cool feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

For more detailed guidelines, please refer to the `CONTRIBUTING.md` file.

## License

The MIT License. See the `LICENSE` file for details.
