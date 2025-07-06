# CFX Pyth Oracle

A smart contract implementation that integrates with the Pyth Network to fetch real-time CFX/USD price data on the Conflux Network. This project demonstrates how to use Pyth's decentralized oracle infrastructure to get accurate, high-frequency price feeds for cryptocurrency trading and DeFi applications.

## 🚀 Features

- **Real-time Price Feeds**: Get live CFX/USD price data from Pyth Network
- **Conflux Network Integration**: Deployed on Conflux Testnet and Mainnet
- **High Accuracy**: Leverages Pyth's decentralized oracle infrastructure
- **Gas Efficient**: Optimized for cost-effective price updates
- **Easy Integration**: Simple API for fetching price data

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/) (installed globally or locally)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vikash-8090-Yadav/CFXPythOracle
   cd CFXPythOracle
   ```

2. **Install dependencies**
   ```bash
   cd SmartContract
   npm install
   ```



## 🏗️ Project Structure

```
CFXPythOracle/
├── SmartContract/
│   ├── contracts/
│   │   └── price.sol          # Main CFX Price Oracle contract
│   ├── scripts/
│   │   ├── deploy.js          # Deployment script
│   │   └── interact.js        # Interaction script
│   ├── artifacts/             # Compiled contract artifacts
│   ├── hardhat.config.js      # Hardhat configuration
│   └── package.json           # Dependencies
└── README.md
```

## 🔧 Configuration

### Hardhat Configuration

The project is configured to work with Conflux Network:

- **Testnet**: `https://evmtestnet.confluxrpc.com`
- **Chain ID**: 71 (Conflux Testnet)
- **Solidity Version**: 0.8.24

### Pyth Network Integration

- **Price Feed ID**: `0x8879170230c9603342f3837cf9a8e76c61791198fb1271bb2552c9af7b33c933` (CFX/USD)
- **Pyth Contract**: `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21` (Conflux Testnet)

## 🚀 Deployment

### 1. Compile the Contract

```bash
cd SmartContract
npx hardhat compile
```

### 2. Deploy to Conflux Testnet

```bash
npx hardhat run scripts/deploy.js
```

The deployment script will:
- Deploy the `CFXPrice` contract
- Pass the Pyth contract address as constructor parameter
- Output the deployed contract address

### 3. Update Contract Address

After deployment, update the contract address in `scripts/interact.js`:

```javascript
const cfxPrice = await CFXPrice.attach("YOUR_DEPLOYED_CONTRACT_ADDRESS");
```

## 💻 Usage

### Fetching CFX Price

Run the interaction script to get real-time CFX/USD price:

```bash
npx hardhat run scripts/interact.js
```

The script will:
1. Connect to Pyth Network's Hermes price service
2. Get price update data for CFX/USD
3. Estimate gas for the transaction
4. Execute the price update transaction
5. Display the current price and confidence interval

### Example Output

```
Estimated gas: 150000
Transaction sent: 0x1234...
Transaction confirmed in block: 12345
CFX/USD Price: 0.12345678
Confidence: 0.00012345
```

## 📜 Smart Contract Details

### CFXPrice Contract

The main contract (`price.sol`) provides:

- **Constructor**: Takes Pyth contract address as parameter
- **getCFXPrice()**: Public payable function that:
  - Calculates update fee
  - Updates price feeds with the fee
  - Returns current price and confidence


## 🙏 Acknowledgments

- [Pyth Network](https://pyth.network/) for providing decentralized oracle infrastructure
- [Conflux Network](https://confluxnetwork.org/) for the blockchain platform
- [Hardhat](https://hardhat.org/) for the development framework

## 📞 Support

For questions or issues:
- Create an issue in this repository
- Check the [Pyth Network documentation](https://docs.pyth.network/)
- Review [Conflux Network documentation](https://docs.confluxnetwork.org/)

---

**Note**: This project is for educational and development purposes. Always test thoroughly on testnets before deploying to mainnet.
