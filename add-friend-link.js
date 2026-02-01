const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'test.html',
    'result.html',
    'articles.html',
    'macro-indicators.html',
    'report-generator.html',
    'about.html',
    'privacy.html',
    'terms.html',
    'articles/zh/10-macro-economic-data.html',
    'articles/zh/fed-interest-rates.html',
    'articles/zh/fundamental-vs-technical.html',
    'articles/zh/graham-vs-growth.html',
    'articles/zh/investment-schools.html',
    'articles/zh/investment-narrative.html',
    'articles/zh/long-term-vs-short-term.html',
    'articles/zh/macro-indicators-analysis.html',
    'articles/zh/macro-investing.html',
    'articles/zh/merrill-lynch-investment-clock.html',
    'articles/zh/metaverse-ai-new-energy-narratives.html',
    'articles/zh/narrative-investing-traps.html',
    'articles/zh/technical-analysis-foundations.html',
    'articles/zh/narrative-investing.html',
    'articles/zh/technical-analysis.html',
    'articles/zh/top-5-technical-trading-strategies.html',
    'articles/zh/value-investing-criteria.html',
    'articles/zh/value-investors-market-irrationality.html',
    'articles/zh/value-investing.html',
    'articles/zh/volume-price-relationship.html',
    'articles/zh/paul-tudor-jones.html',
    'articles/zh/buffett-coca-cola.html',
    'articles/zh/john-murphy-technical-analysis.html',
    'articles/zh/michael-burry-big-short.html',
    'articles/zh/tesla-2020-review.html',
    'articles/zh/lynch-to-wood.html',
    'articles/zh/roe-roic-profitability-metrics.html',
    'articles/zh/dcf-cash-flow-discount-model.html',
    'articles/zh/buffett-investment-philosophy.html',
    'articles/zh/value-investing-history.html',
    'articles/es/10-macro-economic-data.html',
    'articles/es/fed-interest-rates.html',
    'articles/es/fundamental-vs-technical.html',
    'articles/es/graham-vs-growth.html',
    'articles/es/index.html',
    'articles/es/investment-narrative.html',
    'articles/es/investment-schools.html',
    'articles/es/long-term-vs-short-term.html',
    'articles/es/macro-indicators-analysis.html',
    'articles/es/metaverse-ai-new-energy-narratives.html',
    'articles/es/merrill-lynch-investment-clock.html',
    'articles/es/macro-investing.html',
    'articles/es/narrative-investing-traps.html',
    'articles/es/narrative-investing.html',
    'articles/es/technical-analysis-foundations.html',
    'articles/es/technical-analysis.html',
    'articles/es/top-5-technical-trading-strategies.html',
    'articles/es/value-investing-criteria.html',
    'articles/es/value-investing.html',
    'articles/es/value-investors-market-irrationality.html',
    'articles/es/volume-price-relationship.html',
    'articles/es/michael-burry-big-short.html',
    'articles/es/john-murphy-technical-analysis.html',
    'articles/es/tesla-2020-review.html',
    'articles/es/lynch-to-wood.html',
    'articles/fr/10-macro-economic-data.html',
    'articles/fr/fed-interest-rates.html',
    'articles/fr/fundamental-vs-technical.html',
    'articles/fr/graham-vs-growth.html',
    'articles/fr/index.html',
    'articles/fr/investment-narrative.html',
    'articles/fr/investment-schools.html',
    'articles/fr/long-term-vs-short-term.html',
    'articles/fr/macro-indicators-analysis.html',
    'articles/fr/metaverse-ai-new-energy-narratives.html',
    'articles/fr/merrill-lynch-investment-clock.html',
    'articles/fr/macro-investing.html',
    'articles/fr/narrative-investing-traps.html',
    'articles/fr/narrative-investing.html',
    'articles/fr/technical-analysis-foundations.html',
    'articles/fr/top-5-technical-trading-strategies.html',
    'articles/fr/value-investing-criteria.html',
    'articles/fr/value-investing.html',
    'articles/fr/value-investors-market-irrationality.html',
    'articles/fr/technical-analysis.html',
    'articles/fr/volume-price-relationship.html',
    'articles/fr/buffett-coca-cola.html',
    'articles/fr/paul-tudor-jones.html',
    'articles/fr/michael-burry-big-short.html',
    'articles/fr/john-murphy-technical-analysis.html',
    'articles/fr/tesla-2020-review.html',
    'articles/fr/lynch-to-wood.html',
    'articles/en/index.html',
    'articles/en/10-macro-economic-data.html',
    'articles/en/fed-interest-rates.html',
    'articles/en/fundamental-vs-technical.html',
    'articles/en/graham-vs-growth.html',
    'articles/en/investment-narrative.html',
    'articles/en/investment-schools.html',
    'articles/en/long-term-vs-short-term.html',
    'articles/en/merrill-lynch-investment-clock.html',
    'articles/en/metaverse-ai-new-energy-narratives.html',
    'articles/en/macro-investing.html',
    'articles/en/narrative-investing-traps.html',
    'articles/en/narrative-investing.html',
    'articles/en/technical-analysis-foundations.html',
    'articles/en/value-investors-market-irrationality.html',
    'articles/en/value-investing.html',
    'articles/en/top-5-technical-trading-strategies.html',
    'articles/en/value-investing-criteria.html',
    'articles/en/technical-analysis.html',
    'articles/en/macro-indicators-analysis.html',
    'articles/en/volume-price-relationship.html',
    'articles/en/buffett-coca-cola.html',
    'articles/en/competitive-advantage-sustainability.html',
    'articles/en/value-investing-history.html',
    'articles/zh/how-to-analyze-moat.html',
    'articles/zh/free-cash-flow-calculation-and-application.html',
    'articles/zh/financial-statement-analysis-techniques.html',
    'articles/zh/enterprise-value-vs-equity-value.html',
    'articles/zh/competitive-advantage-sustainability.html',
    'articles/en/financial-statement-analysis-techniques.html',
    'articles/zh/pe-pb-ps-peg-valuation-metrics.html',
    'articles/zh/fisher-growth-stock-investing.html',
    'articles/zh/index.html',
    'articles/zh/munger-quality-investing.html',
    'articles/zh/graham-securities-analysis.html',
    'articles/en/munger-quality-investing.html',
    'articles/en/graham-securities-analysis.html',
    'articles/en/buffett-investment-philosophy.html'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const oldLink1 = '<a href="https://valuegu.com" target="_blank">ValueGu.com</a>';
        const oldLink2 = '<a href="https://valuegu.com" target="_blank" >ValueGu.com</a>';
        const newLink = '<a href="https://valuegu.com" target="_blank">ValueGu.com</a><br>\n                    <a href="https://caiju.link" target="_blank">财信聚合</a>';
        
        let updated = false;
        if (content.includes(oldLink1) && !content.includes('https://caiju.link')) {
            content = content.replace(oldLink1, newLink);
            updated = true;
        } else if (content.includes(oldLink2) && !content.includes('https://caiju.link')) {
            content = content.replace(oldLink2, newLink);
            updated = true;
        }
        
        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${file}`);
        }
    }
});

console.log('All files updated successfully!');
