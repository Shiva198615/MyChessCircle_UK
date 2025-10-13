# MyChessCircle_UK - Chess Gaming Platform

A comprehensive chess gaming platform built with React, featuring E-sports Championships, tutorials, and secure payment processing.

## Features

### 🏆 Core Features
- **Home Page** - Welcome to MyChessCircle_UK
- **About Chess** - Learn about chess history and rules
- **E-sports Championship** - Participate in chess competitions
- **Tutorials** - Improve your chess skills
- **Products** - Chess-related merchandise
- **Downloads** - Get the mobile app
- **Contact Us** - Get in touch with support

### 💳 Payment Checkout System
- **Wallet Topup** - Secure payment processing
- **Mobile Verification** - Registered number validation
- **Order Summary** - Complete transaction details
- **Real-time Validation** - Instant feedback on inputs
- **Responsive Design** - Works on all devices 

## Payment Checkout Testing


### Mock Registered Numbers (for testing):
- `9876543210` ✅
- `8765432109` ✅
- `7654321098` ✅
- `6543210987` ✅
- `5432109876` ✅

### User Experience:
1. **Enter 10-digit mobile number** (must be registered)
2. **Click "Verify" button** to validate registration
3. **Enter amount** (₹100 - ₹1,00,000)
4. **Review order summary** with transaction details
5. **Click "Proceed to Pay"** to complete transaction

### Validation Features:

### Coupon Codes
You can apply the following coupon codes during payment checkout:

| Coupon Code | Discount         |
|-------------|------------------|
| CHESS10     | ₹10 off          |
| CHESS50     | ₹50 off          |
| TOPUP5      | 5% off amount    |

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyChessCircle_UK
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm test`
Launches the test runner in the interactive watch mode.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── layout/         # Header, Footer, Navigation
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── PaymentCheckout.js  # Payment processing
│   ├── Tournaments.js  # Tournament listings
│   └── ...            # Other pages
├── assets/             # Images, fonts, etc.
└── App.js              # Main application component
```

## Technologies Used

- **Frontend**: React.js, CSS3
- **Routing**: React Router
- **State Management**: React Hooks
- **Styling**: Custom CSS with responsive design
- **Validation**: Custom validation logic

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.