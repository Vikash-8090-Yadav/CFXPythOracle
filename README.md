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
   git clone <repository-url>
   cd CFXPythOracle
   ```

2. **Install dependencies**
   ```bash
   cd SmartContract
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the `SmartContract` directory (optional)
   - Add your private key if needed for deployment

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
npx hardhat run scripts/deploy.js --network confluxTestnet
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
npx hardhat run scripts/interact.js --network confluxTestnet
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

### Key Functions

```solidity
function getCFXPrice(bytes[] calldata priceUpdateData) 
    public payable returns (int64, uint)
```

**Parameters:**
- `priceUpdateData`: Price update data from Pyth Network

**Returns:**
- `price`: Current CFX/USD price (int64)
- `confidence`: Price confidence interval (uint)

## 🔗 Dependencies

### Core Dependencies
- `@pythnetwork/pyth-sdk-solidity`: Pyth Network Solidity SDK
- `@pythnetwork/pyth-evm-js`: Pyth Network JavaScript SDK
- `@openzeppelin/contracts`: OpenZeppelin smart contract library

### Development Dependencies
- `hardhat`: Ethereum development environment
- `@nomiclabs/hardhat-ethers`: Ethers.js integration
- `@nomiclabs/hardhat-waffle`: Testing framework
- `ethers`: Ethereum library
- `chai`: Testing assertion library

## 🌐 Networks

### Conflux Testnet
- **RPC URL**: `https://evmtestnet.confluxrpc.com`
- **Chain ID**: 71
- **Pyth Contract**: `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`

### Conflux Mainnet
- **RPC URL**: `https://evm.confluxrpc.com`
- **Chain ID**: 1030
- **Pyth Contract**: (Use mainnet Pyth contract address)

## 🧪 Testing

To run tests (if implemented):

```bash
npx hardhat test
```

## 📝 Scripts

### Available Scripts

- `npm run compile`: Compile smart contracts
- `npm run deploy`: Deploy to testnet
- `npm run interact`: Run interaction script
- `npm run test`: Run tests

## 🔍 Troubleshooting

### Common Issues

1. **"parseEther is not a function"**
   - Solution: Use `hre.ethers.utils.parseEther()` for ethers v5

2. **"estimateGas is not a function"**
   - Solution: Use `cfxPrice.estimateGas.getCFXPrice()` for ethers v5

3. **Insufficient funds for gas**
   - Ensure your account has enough CFX for gas fees

4. **Price feed not found**
   - Verify the price feed ID is correct for your network

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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