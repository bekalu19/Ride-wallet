# Driver Wallet

A simple income and expense tracker app made for ride-hailing drivers (RIDE / Feres / Yango) in Ethiopia. All data is stored only on the phone (no server, no account needed). Works in Amharic and English.

## What it does

- **Home** — shows your net balance, income, and expense for this month, plus a list of your "Books" (cash accounts).
- **Transactions** — full history, grouped by day, with filters for income/expense, and quick + / − buttons to add a new record.
- **Reports** — charts and totals for this month, last 3 months, this year, or all time, plus a "Download Full Report" button that makes a PDF you can share.
- **Settings** — switch between Amharic and English, and clear all data if you want to start over.

Built-in categories:
- **Income:** Ride Fares, Cash Trips, Bank Transfer Trips, Tips, Other Income
- **Expense:** Fuel, Maintenance/Repair, Car Wash, Commission/App Fee, Traffic Fines, Lunch/Refreshments, Other Expense

All amounts are shown in ETB (Ethiopian Birr).

## How to run it

You need [Node.js](https://nodejs.org) installed on your computer, and the **Expo Go** app on your phone (free, from Google Play).

1. Open a terminal in this folder and install everything:
   ```
   npm install
   ```
2. Start the app:
   ```
   npx expo start
   ```
3. A QR code will show up in the terminal or browser. Open the **Expo Go** app on your phone and scan it. The app will load on your phone.

## How to get a real installable APK file

The steps above only let you test the app through Expo Go — it's not a standalone app yet. To get a real `.apk` file you can install directly on your phone (no Expo Go needed), use Expo's free cloud build service:

1. Make a free account at https://expo.dev
2. On a computer, inside this folder, run: `npm install -g eas-cli`
3. Log in: `eas login`
4. Start the build: `eas build -p android --profile preview`
5. Wait about 10–20 minutes. When it's done, Expo gives you a download link — open it on your Android phone to download and install the APK.

The `eas.json` file already included in this project tells Expo to build a plain `.apk` file (the kind you can install directly), instead of the `.aab` format used for the Play Store.

## How the data is stored

Everything is saved on the phone using `AsyncStorage` (a simple local storage system). There are two things saved:
- Your list of Books
- Your list of Transactions (each one linked to a Book)

Nothing is sent anywhere. If you delete the app, the data is deleted too — the "Clear All Data" button in Settings does the same thing on purpose, so you can start fresh.

## Project layout

```
App.js                      → starting point, wires everything together
src/
  context/DataContext.js    → all app state (books, transactions) + saving/loading
  i18n/                     → Amharic + English text, language switcher
  constants/categories.js   → the preset income/expense categories
  screens/                  → the 5 screens (Dashboard, Transactions, AddTransaction, Reports, Settings)
  components/               → small reusable pieces (BookRow, TransactionRow, SummaryCard)
  navigation/                → bottom tab bar + screen routing
  utils/                    → money formatting, date formatting, storage helpers
```

## Changing things later

- **Add a new expense/income category:** edit `src/constants/categories.js`, then add its label in both languages in `src/i18n/translations.js` (look for keys starting with `cat_`).
- **Add a new language:** copy the `en` block in `src/i18n/translations.js`, translate every line, and add a button for it in `src/screens/SettingsScreen.js`.
- **Change the app colors:** the main color used everywhere is `#0F766E` (teal green). Search for it across the `src/` folder to change it.
