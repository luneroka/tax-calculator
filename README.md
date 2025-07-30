## About

**tax-calculator** is a web application for simulating French real estate investment scenarios. It allows users to input property details, financing, and charges, and instantly compare the impact of different tax regimes (micro-foncier vs. réel) on annual taxes, net yield, and cashflow.

## Features

- **Dynamic Calculation:** Instantly updates results as you change any input.
- **Tax Regime Comparison:** Side-by-side comparison of micro-foncier and réel regimes.
- **Detailed Inputs:** Enter property price, notary fees, loan details, rent, charges, and more.
- **Local Storage:** Automatically saves your inputs in the browser.
- **Responsive UI:** Clean, readable tables and sections for all key data.

## How It Works

This project is built **entirely with vanilla JavaScript, HTML, and CSS**—no frameworks or libraries.  
All UI rendering, state management, and event handling are implemented from scratch.

### Key Skills Demonstrated

- **DOM Manipulation:** Dynamic rendering of tables and form sections using template literals and JavaScript.
- **Event Listeners:** Inputs and selects are wired to update calculations and save state on every change.
- **State Management:** All user inputs are stored and restored using localStorage for a persistent experience.
- **Separation of Concerns:** Logic is modularized into helpers, view renderers, and calculation modules.
- **Responsive Design:** CSS ensures usability on both desktop and mobile.
- **Comparison Logic:** Both tax regimes are always calculated and displayed for easy comparison.

## Usage

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Fill in the property and financing details.
4. Instantly see the impact on taxes, yield, and cashflow for both regimes.

## Project Structure

- `index.html` — Main HTML structure.
- `styles.css` — All styles, organized by section.
- `js/` — JavaScript modules:
  - `core/` — Helpers for storage, input management, etc.
  - `view/` — Functions for rendering dynamic table sections.
  - `mainTable/`, `reelTable/` — Calculation and update logic.

## Future Improvements

- **User Authentication:** Save and manage multiple properties and scenarios.
- **Support multiple year columns** Allow user to add years columns to plan ahead.
- **Advanced Analytics:** Deeper insights into investment performance over time.
- **Printable View:** Generate and print table view for saving or sharing.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for transparent and accessible real estate investment analysis.
- Built with a focus on performance, usability, and maintainability.
