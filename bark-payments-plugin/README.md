# BARK Medusa Payment Plugin

The `bark-medusa-payment-plugin` is a custom Medusa plugin that enables merchants to accept payments via the Solana blockchain using SOL, USDC, BARK, and other SPL tokens. BARK Payments plugin integrates seamlessly with Medusa's e-Commerce platform and supports both test (`devnet`) and production (`mainnet-beta`) environments.

## Features

- **Solana-based Payments**: Accept payments using SOL, USDC, or other SPL tokens.
- **Wallet Integration**: Supports Solana wallets like Phantom, Solflare, and Backpack.
- **Efficient Transactions**: Low transaction costs and fast confirmations on the Solana blockchain.
- **Medusa Integration**: Easy integration with the Medusa eCommerce platform, providing a robust payment solution for blockchain-powered stores.

---

## How It Works ?

1. **Creating a Payment Session**: 
   - When a customer proceeds to checkout, a payment session is created on the Solana blockchain for the cart total. The payment session contains transaction data and is returned to the frontend for processing.

2. **Authorizing the Payment**: 
   - The customer signs the transaction using their Solana wallet. Once signed, the transaction is submitted to the Solana network. The Medusa backend verifies the transaction by checking its status on the blockchain.

3. **Capturing the Payment**: 
   - After successful authorization, the payment is marked as captured, and the funds are securely transferred to the merchant's wallet.

4. **Canceling a Payment**: 
   - In case of payment failure or customer cancellation, the plugin cancels the payment session and reverts any pending actions on the order.

---

## Installation

### Prerequisites

- **Medusa Backend**: You need a running Medusa backend. If you haven't set it up yet, follow [Medusa's documentation](https://docs.medusajs.com/).
- **Solana Wallet**: You’ll need a Solana wallet address to receive payments. You can use wallets like [Phantom](https://phantom.app/) or [Solflare](https://solflare.com/).

### Steps to Install

1. **Clone the Repository**:
   Clone the repository containing your Medusa backend or use your existing MedusaJs project.
   
2. **Install Dependencies**:
   Navigate to your Medusa project directory and install the required dependencies for the plugin.
   ```bash
   npm install @solana/web3.js @solana/spl-token
   ```

3. **Create Plugin Directory**:
   Create a directory for the plugin in `src/plugins/bark-medusa-payment-plugin/` and add the plugin code as outlined in the documentation.

4. **Update Configuration**:
   Update your `medusa-config.js` to include the plugin:
   ```javascript
   module.exports = {
     projectConfig: {
       // Other configurations...
       payment_providers: [
         {
           id: 'bark-payment',
           resolve: require('./src/plugins/bark-medusa-payment-plugin'),
           options: {
             network: process.env.SOLANA_NETWORK || 'devnet',
             rpcUrl: process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com',
             merchantWallet: process.env.SOLANA_MERCHANT_WALLET,
           },
         },
       ],
     },
   };
   ```

5. **Set Environment Variables**:
   Add the following environment variables to your `.env` file:
   ```plaintext
   SOLANA_NETWORK=devnet
   SOLANA_MERCHANT_WALLET=<YOUR_SOLANA_WALLET_ADDRESS>
   SOLANA_RPC_URL=https://api.devnet.solana.com
   ```

6. **Restart Your Medusa Backend**:
   Once the setup is complete, restart your Medusa backend to apply the changes.
   ```bash
   npm run start
   ```

---

## Usage

1. **Customer Checkout**:
   - When a customer proceeds to checkout, the Solana payment option will appear. 
   
2. **Wallet Interaction**:
   - The customer signs the transaction via their connected Solana wallet (Phantom, Solflare, etc.).

3. **Backend Confirmation**:
   - The Medusa backend checks the transaction status on the Solana blockchain and captures the payment.

---

## Tech Stack

- **Medusa**: An open-source headless commerce engine used for building scalable eCommerce backends.
- **Solana**: A decentralized blockchain providing high-speed, low-cost transactions.
- **SPL Tokens**: Tokens created and managed through the Solana Program Library.
- **Solana Wallet Adapter**: Handles Solana wallet connections and signing transactions with wallets like Phantom or Solflare.
- **@solana/web3.js**: The library for interacting with the Solana blockchain.
- **Next.js**: Used for building the storefront, which integrates with Medusa and handles wallet interactions.

---

## Development

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run Medusa in development mode:
   ```bash
   npm run develop
   ```

4. Test the payment flow using Solana's `devnet`.

---

## Testing and Deployment

1. **Testing**:
   - Use Solana’s `devnet` to test transactions.
   - Ensure that the payment process, including session creation, authorization, and capture, is functioning as expected.

2. **Deployment**:
   - When ready for production, switch the Solana network to `mainnet-beta` and ensure all configurations point to the live environment.

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.

---

## License

The MIT License.

