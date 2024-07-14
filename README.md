Crypto Aggregator

Crypto Aggregator is a DeFi application that aggregates cryptocurrency price data from multiple sources. The project fetches price feeds from CoinGecko and CoinCap, computes an average price, and displays it on the frontend along with detailed information from each source.


Features

•	Fetches cryptocurrency price data from CoinGecko and CoinCap.

•	Computes the average price of each cryptocurrency.

•	Displays detailed information including market cap, total volume, and price changes.

•	Interactive UI with toggles to view detailed information from both sources.

•	Search functionality to find specific cryptocurrencies.

•	Responsive design with a dark theme.


Prerequisites

•	Node.js (>=14.x)

•	npm (>=6.x) or yarn (>=1.x)


Getting Started

1.	Clone the repository:

git clone https://github.com/enkdeveloper/defi-oracle-aggregator.git

cd defi-oracle-aggregator

2.	Install dependencies:

npm install

# or

yarn install

3.	Run the development server:

npm run dev

# or

yarn dev

4.	Open your browser and navigate to:

http://localhost:5173


How to Use

1.	Homepage:

o	The homepage displays a list of cryptocurrencies with their images, names, and current prices from CoinGecko.

o	Click on any cryptocurrency to toggle and view detailed information from both CoinGecko and CoinCap.

2.	Search:

o	Use the search bar at the top to find specific cryptocurrencies.

o	As you type, the list will filter to show matching results.


Screenshots and Videos


Screenshots

![Ekran görüntüsü 2024-07-14 032400](https://github.com/user-attachments/assets/375dffcd-8af7-42c8-99d9-06c171c8e553)

![Ekran görüntüsü 2024-07-14 032414](https://github.com/user-attachments/assets/aca7e840-9abb-413c-b833-a9ffb0d3ff00)

![Ekran görüntüsü 2024-07-14 032443](https://github.com/user-attachments/assets/29afbb88-6b66-462d-b409-79295aa3fa38)



Video

https://www.loom.com/share/d00fca0e8d004255beb901f8effeb0e2?sid=46ca62cc-62f6-4189-9ab8-b5de38ceb6b4



Technologies Used

•	React

•	TypeScript

•	Styled-Components

•	Axios

•	Vite


Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.


License

This project is licensed under the MIT License - see the LICENSE file for details.


Acknowledgments

•	CoinGecko API

•	CoinCap API


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
