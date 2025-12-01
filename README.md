# DONUT Info

> Your comprehensive guide to DONUT protocol mining, analytics, and optimization

A beautiful, feature-rich website inspired by [refinore.com](https://refinore.com/) that serves as the go-to resource for everything DONUT mining.

## Features

### 🏠 Landing Page
- Real-time mining statistics
- Network overview with live data
- Beautiful gradient design with smooth animations

### 📚 How It Works
- Detailed explanation of DONUT mining mechanics
- Technical specifications (algorithm, block time, rewards)
- Visual breakdown of the mining process

### 🚀 Getting Started Guide
- Step-by-step setup instructions
- Wallet recommendations
- Mining method comparisons (Web, CLI, Auto)
- Configuration examples

### 🔗 Frontends & Tools
Comprehensive directory of:
- Web miners
- Analytics platforms
- Wallets (Phantom, Solflare, Backpack)
- Developer tools
- Exchanges (DEX and CEX)
- Community links

### 📊 Live Analytics Dashboard
Real-time tracking of:
- Mining overview (difficulty, hashrate, rewards)
- Token metrics (price, market cap, volume)
- Yield opportunities (APY for mining, staking, refinement)
- Network statistics
- Interactive hashrate chart

### 🎯 Mining Strategy Guide
Expert strategies for:
- Performance optimization
- Profitability maximization
- Timing optimization
- Advanced techniques
- Pro tips from experienced miners

### 🧮 Mining Calculator & Simulator
Interactive calculator featuring:
- Hashrate input
- Power consumption tracking
- Electricity cost calculation
- Pool fee consideration
- Referral bonus integration
- Detailed profitability breakdown (daily, weekly, monthly, yearly)
- ROI and APY estimation

### 💰 Referral Program (5% Rewards)
- Earn 5% from referred miners forever
- Referral earnings calculator
- Program benefits explanation
- Easy wallet connection for referral links

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies, pure JS
- **Responsive Design** - Mobile-first approach

## Installation & Usage

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/donut-info.git
cd donut-info
```

2. Open in your browser:
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Or with Node.js:
npx serve
```

3. Visit `http://localhost:8000` (or just open index.html)

### Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

#### GitHub Pages Deployment

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://YOUR_USERNAME.github.io/donut-info/`

## Customization

### Update Mock Data

The website currently uses mock data for demonstration. To connect to real DONUT APIs:

1. Open `script.js`
2. Replace the `mockData` object with actual API calls
3. Update the data fetching functions to pull from DONUT network

Example:
```javascript
// Replace mock data with API calls
async function fetchNetworkStats() {
    const response = await fetch('YOUR_DONUT_API_ENDPOINT');
    const data = await response.json();
    return data;
}
```

### Customize Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffa07a;
    /* ... more variables */
}
```

### Add/Update Frontends

Edit the frontends section in `index.html`:
```html
<div class="frontend-card">
    <h3>Your Category</h3>
    <ul class="frontend-links">
        <li><a href="URL" target="_blank">Your Link</a></li>
    </ul>
</div>
```

## Project Structure

```
donut-info/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Features Inspired by refinore.com

✅ Complete analytics dashboard
✅ APY tracking (mining, staking, refinement)
✅ Live round monitoring
✅ Token metrics and charts
✅ Miner statistics
✅ Calculator and simulator
✅ Strategy guides
✅ Community links
✅ Responsive design
✅ Dark theme

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Connect to real DONUT API endpoints
- [ ] Add wallet connection functionality
- [ ] Implement actual referral tracking
- [ ] Add more interactive charts
- [ ] Create admin dashboard for stats
- [ ] Add multi-language support
- [ ] Implement dark/light theme toggle
- [ ] Add mining pool statistics
- [ ] Create mobile app version

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, join our community:
- Discord: [Join Server](#)
- Telegram: [Join Group](#)
- Twitter: [@DonutProtocol](#)

## Acknowledgments

- Inspired by [refinore.com](https://refinore.com/)
- Built for the DONUT mining community
- Thanks to all contributors

---

**Note:** This website is for informational purposes only. Always DYOR (Do Your Own Research) before mining or investing in cryptocurrencies.

Made with ❤️ by the DONUT community
