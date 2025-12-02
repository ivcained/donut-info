// Mock data for demonstration - Replace with actual API calls
const mockData = {
    totalMiners: 15234,
    currentAPY: 127.5,
    totalRewards: '12.5M',
    networkHashrate: '2.3 TH/s',
    difficulty: 45678,
    hashrate: '2.3 TH/s',
    blockReward: '50 DONUT',
    roundDuration: '45s',
    tokenPrice: 0.0892,
    marketCap: '187.2M',
    volume: '5.4M',
    supply: '2,100,000',
    miningAPY: 127.5,
    stakingAPY: 18.3,
    refinementAPY: 12.7,
    combinedAPY: 158.5,
    totalBlocks: 1245678,
    activeMiners: 15234,
    avgBlockTime: '58s',
    nextHalving: '45 days'
};

// Update hero stats
function updateHeroStats() {
    document.getElementById('total-miners').textContent = mockData.totalMiners.toLocaleString();
    document.getElementById('current-apy').textContent = mockData.currentAPY + '%';
    document.getElementById('total-rewards').textContent = mockData.totalRewards;
    document.getElementById('network-hashrate').textContent = mockData.networkHashrate;
}

// Update analytics
function updateAnalytics() {
    // Mining Overview
    document.getElementById('difficulty').textContent = mockData.difficulty.toLocaleString();
    document.getElementById('hashrate').textContent = mockData.hashrate;
    document.getElementById('block-reward').textContent = mockData.blockReward;
    document.getElementById('round-duration').textContent = mockData.roundDuration;

    // Token Metrics
    document.getElementById('token-price').textContent = '$' + mockData.tokenPrice;
    document.getElementById('market-cap').textContent = '$' + mockData.marketCap;
    document.getElementById('volume').textContent = '$' + mockData.volume;
    document.getElementById('supply').textContent = mockData.supply;

    // Yield Opportunities
    document.getElementById('mining-apy').textContent = mockData.miningAPY + '%';
    document.getElementById('staking-apy').textContent = mockData.stakingAPY + '%';
    document.getElementById('refinement-apy').textContent = mockData.refinementAPY + '%';
    document.getElementById('combined-apy').textContent = mockData.combinedAPY + '%';

    // Network Stats
    document.getElementById('total-blocks').textContent = mockData.totalBlocks.toLocaleString();
    document.getElementById('active-miners').textContent = mockData.activeMiners.toLocaleString();
    document.getElementById('avg-block-time').textContent = mockData.avgBlockTime;
    document.getElementById('next-halving').textContent = mockData.nextHalving;
}

// Mining Calculator
function calculateMiningRewards() {
    const hashrate = parseFloat(document.getElementById('hashrate-input').value) || 0;
    const powerConsumption = parseFloat(document.getElementById('power-input').value) || 0;
    const electricityCost = parseFloat(document.getElementById('electricity-cost').value) || 0;
    const poolFee = parseFloat(document.getElementById('pool-fee').value) || 0;
    const referralBonus = parseFloat(document.getElementById('referral-bonus').value) || 0;

    // Mock calculation - Replace with actual mining calculation logic
    const networkHashrate = 2300000000; // 2.3 TH/s in H/s
    const blockReward = 50;
    const blocksPerDay = 1440; // Assuming 60s block time
    const tokenPrice = mockData.tokenPrice;

    // Calculate share of network hashrate
    const hashrateShare = hashrate / networkHashrate;

    // Calculate daily rewards
    const dailyBlocks = blocksPerDay * hashrateShare;
    const dailyRewards = dailyBlocks * blockReward;

    // Apply pool fee
    const afterPoolFee = dailyRewards * (1 - poolFee / 100);

    // Apply referral bonus
    const withReferralBonus = afterPoolFee * (1 + referralBonus / 100);

    // Calculate electricity costs
    const dailyPowerUsage = (powerConsumption / 1000) * 24; // kWh per day
    const dailyElectricityCost = dailyPowerUsage * electricityCost;
    const monthlyElectricityCost = dailyElectricityCost * 30;

    // Calculate earnings in USD
    const dailyUSD = withReferralBonus * tokenPrice;
    const weeklyUSD = dailyUSD * 7;
    const monthlyUSD = dailyUSD * 30;
    const yearlyUSD = dailyUSD * 365;

    // Calculate net profit
    const netMonthlyProfit = monthlyUSD - monthlyElectricityCost;
    const netYearlyProfit = yearlyUSD - (monthlyElectricityCost * 12);

    // Calculate APY (assuming some initial investment)
    const estimatedHardwareCost = 1000; // Example hardware cost
    const estimatedAPY = (netYearlyProfit / estimatedHardwareCost) * 100;

    // Update UI
    document.getElementById('daily-earnings').textContent =
        `${withReferralBonus.toFixed(2)} DONUT ($${dailyUSD.toFixed(2)})`;
    document.getElementById('weekly-earnings').textContent =
        `${(withReferralBonus * 7).toFixed(2)} DONUT ($${weeklyUSD.toFixed(2)})`;
    document.getElementById('monthly-earnings').textContent =
        `${(withReferralBonus * 30).toFixed(2)} DONUT ($${monthlyUSD.toFixed(2)})`;
    document.getElementById('yearly-earnings').textContent =
        `${(withReferralBonus * 365).toFixed(2)} DONUT ($${yearlyUSD.toFixed(2)})`;

    document.getElementById('daily-cost').textContent = `$${dailyElectricityCost.toFixed(2)}`;
    document.getElementById('monthly-cost').textContent = `$${monthlyElectricityCost.toFixed(2)}`;
    document.getElementById('net-profit').textContent = `$${netMonthlyProfit.toFixed(2)}/month`;
    document.getElementById('estimated-apy').textContent = `${estimatedAPY.toFixed(2)}%`;
}

// Referral Calculator
function calculateReferralEarnings() {
    const referralsCount = parseInt(document.getElementById('referrals-count').value) || 0;
    const avgEarnings = parseFloat(document.getElementById('avg-earnings').value) || 0;

    const referralRate = 0.05; // 5%

    const dailyReferralIncome = referralsCount * avgEarnings * referralRate;
    const monthlyReferralIncome = dailyReferralIncome * 30;
    const yearlyReferralIncome = dailyReferralIncome * 365;

    document.getElementById('ref-daily').textContent = `$${dailyReferralIncome.toFixed(2)}`;
    document.getElementById('ref-monthly').textContent = `$${monthlyReferralIncome.toFixed(2)}`;
    document.getElementById('ref-yearly').textContent = `$${yearlyReferralIncome.toFixed(2)}`;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.section, .work-card, .frontend-card, .analytics-card, .strategy-card, .benefit, .step');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        animateOnScroll.observe(el);
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Draw simple hashrate chart
function drawHashrateChart() {
    const canvas = document.getElementById('hashrate-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 300;

    // Generate mock data
    const dataPoints = 50;
    const data = [];
    for (let i = 0; i < dataPoints; i++) {
        data.push(1.8 + Math.random() * 0.8 + Math.sin(i / 5) * 0.3);
    }

    // Clear canvas
    ctx.fillStyle = '#0f0f1e';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#2a2a3e';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    // Draw line chart
    ctx.strokeStyle = '#ff6b9d';
    ctx.lineWidth = 2;
    ctx.beginPath();

    const xStep = width / (dataPoints - 1);
    const yScale = height / 3;
    const yOffset = height / 2;

    for (let i = 0; i < dataPoints; i++) {
        const x = i * xStep;
        const y = yOffset - (data[i] - 2) * yScale;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.stroke();

    // Fill area under line
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 107, 157, 0.1)';
    ctx.fill();

    // Add labels
    ctx.fillStyle = '#b8b8d1';
    ctx.font = '12px Inter';
    ctx.fillText('Network Hashrate (TH/s)', 10, 20);
    ctx.fillText('2.5', 10, 40);
    ctx.fillText('2.0', 10, height / 2 + 5);
    ctx.fillText('1.5', 10, height - 10);
}

// Event listeners
document.getElementById('calculate-btn')?.addEventListener('click', calculateMiningRewards);
document.getElementById('calc-referral-btn')?.addEventListener('click', calculateReferralEarnings);

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    updateHeroStats();
    updateAnalytics();
    calculateMiningRewards(); // Show initial calculation
    calculateReferralEarnings(); // Show initial calculation
    drawHashrateChart();

    // Simulate real-time updates every 10 seconds
    setInterval(() => {
        // Add slight random variations to simulate live data
        mockData.currentAPY = 120 + Math.random() * 15;
        mockData.networkHashrate = (2.1 + Math.random() * 0.4).toFixed(1) + ' TH/s';
        updateHeroStats();
        updateAnalytics();
        drawHashrateChart();
    }, 10000);
});

// Redraw chart on window resize
window.addEventListener('resize', () => {
    drawHashrateChart();
});
