const fs = require('fs');
const path = require('path');
const glob = require('glob');

const version = '1767797600000';

function updateCSSLinks(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const oldPattern = /href=["']css\/style\.css["']/g;
    const newPattern = `href="css/style.css?v=${version}"`;
    
    if (oldPattern.test(content)) {
        content = content.replace(oldPattern, newPattern);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

const htmlFiles = glob.sync('**/*.html', { cwd: __dirname });

htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    updateCSSLinks(filePath);
});

console.log('\n✅ CSS links updated successfully!');