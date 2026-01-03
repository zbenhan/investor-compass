// Macro Economic Indicator Relationship Script

// Indicator Data Model - Using percentage positions for responsive design
const indicators = {
    interestRate: {
        name: "利率",
        status: "stable", // stable, rising, falling
        element: null,
        valueElement: null,
        position: { x: 20, y: 20 } // Percentage
    },
    gdp: {
        name: "GDP",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 50, y: 30 } // Percentage
    },
    unemployment: {
        name: "失业率",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 80, y: 20 } // Percentage
    },
    bondYield: {
        name: "债券收益率",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 20, y: 70 } // Percentage
    },
    export: {
        name: "出口",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 50, y: 80 } // Percentage
    },
    import: {
        name: "进口",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 80, y: 70 } // Percentage
    }
};

// Indicator Relationships - Corrected based on macroeconomic theory
const relationships = [
    // Interest Rate impacts
    { from: "interestRate", to: "gdp", effect: "negative", descriptionKey: "interestRateToGdp" },
    { from: "interestRate", to: "bondYield", effect: "positive", descriptionKey: "interestRateToBondYield" },
    { from: "interestRate", to: "unemployment", effect: "positive", descriptionKey: "interestRateToUnemployment" },
    { from: "interestRate", to: "export", effect: "negative", descriptionKey: "interestRateToExport" },
    { from: "interestRate", to: "import", effect: "positive", descriptionKey: "interestRateToImport" },
    
    // GDP impacts
    { from: "gdp", to: "interestRate", effect: "positive", descriptionKey: "gdpToInterestRate" },
    { from: "gdp", to: "unemployment", effect: "negative", descriptionKey: "gdpToUnemployment" },
    { from: "gdp", to: "bondYield", effect: "positive", descriptionKey: "gdpToBondYield" },
    { from: "gdp", to: "import", effect: "positive", descriptionKey: "gdpToImport" },
    
    // Unemployment impacts
    { from: "unemployment", to: "interestRate", effect: "negative", descriptionKey: "unemploymentToInterestRate" },
    { from: "unemployment", to: "gdp", effect: "negative", descriptionKey: "unemploymentToGdp" },
    { from: "unemployment", to: "bondYield", effect: "negative", descriptionKey: "unemploymentToBondYield" },
    
    // Bond Yield impacts
    { from: "bondYield", to: "interestRate", effect: "positive", descriptionKey: "bondYieldToInterestRate" },
    { from: "bondYield", to: "gdp", effect: "negative", descriptionKey: "bondYieldToGdp" },
    
    // Export impacts
    { from: "export", to: "gdp", effect: "positive", descriptionKey: "exportToGdp" },
    { from: "export", to: "interestRate", effect: "positive", descriptionKey: "exportToInterestRate" },
    { from: "export", to: "unemployment", effect: "negative", descriptionKey: "exportToUnemployment" },
    
    // Import impacts
    { from: "import", to: "gdp", effect: "negative", descriptionKey: "importToGdp" },
    { from: "import", to: "interestRate", effect: "negative", descriptionKey: "importToInterestRate" },
    { from: "import", to: "unemployment", effect: "positive", descriptionKey: "importToUnemployment" },
    
    // Additional: GDP to Export impact
    { from: "gdp", to: "export", effect: "positive", descriptionKey: "gdpToExport" },
    
    // Additional: Bond Yield to Unemployment impact
    { from: "bondYield", to: "unemployment", effect: "positive", descriptionKey: "bondYieldToUnemployment" }
];

// Connection lines array
let connectionLines = [];

// Track the currently active indicator (manually clicked)
let activeControlId = null;

// Initialize function
document.addEventListener("DOMContentLoaded", function() {
    initIndicatorNetwork();
    updateIndicatorDisplay();
});

// Initialize indicator relationship network
function initIndicatorNetwork() {
    const networkContainer = document.getElementById("indicatorNetwork");
    
    // Clear container
    networkContainer.innerHTML = "";
    connectionLines = [];
    
    // Get container dimensions
    const containerWidth = networkContainer.offsetWidth;
    const containerHeight = networkContainer.offsetHeight;
    
    // Create indicator nodes
    for (const [id, indicator] of Object.entries(indicators)) {
        const node = document.createElement("div");
        node.className = `indicator-node ${indicator.status}`;
        
        // Calculate position using percentage, node size is 90px, so subtract 45px to center
        const x = (indicator.position.x / 100) * containerWidth - 45;
        const y = (indicator.position.y / 100) * containerHeight - 45;
        
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        
        // Get indicator name from translation file
        const indicatorName = languageManager.translations.macro?.indicators?.[id] || indicator.name;
        
        node.innerHTML = `
            <div class="node-label">${indicatorName}</div>
        `;
        networkContainer.appendChild(node);
        indicator.element = node;
        
        // Save reference to value element (keeping code structure even if no value element exists)
        indicator.valueElement = node.querySelector(".node-value");
        
        // Save actual pixel position for connection line calculation, node size is 90px, so center is x+45, y+45
        indicator.actualPosition = { x: x + 45, y: y + 45 };
    }
    
    // Create connection lines
    for (const relationship of relationships) {
        const fromIndicator = indicators[relationship.from];
        const toIndicator = indicators[relationship.to];
        
        const line = document.createElement("div");
        line.className = `connection-line ${relationship.effect}`;
        
        // Calculate line position and angle
        const dx = toIndicator.actualPosition.x - fromIndicator.actualPosition.x;
        const dy = toIndicator.actualPosition.y - fromIndicator.actualPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        
        // Calculate line start and end from node edges, not center
        // Node radius is 45px
        const radius = 45;
        const startX = fromIndicator.actualPosition.x + Math.cos(angle) * radius;
        const startY = fromIndicator.actualPosition.y + Math.sin(angle) * radius;
        const endX = toIndicator.actualPosition.x - Math.cos(angle) * radius;
        const endY = toIndicator.actualPosition.y - Math.sin(angle) * radius;
        
        // Calculate adjusted line length
        const adjustedDx = endX - startX;
        const adjustedDy = endY - startY;
        const adjustedLength = Math.sqrt(adjustedDx * adjustedDx + adjustedDy * adjustedDy);
        
        line.style.left = `${startX}px`;
        line.style.top = `${startY}px`;
        line.style.width = `${adjustedLength}px`;
        line.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
        
        networkContainer.appendChild(line);
        connectionLines.push({
            element: line,
            relationship: relationship,
            active: false
        });
    }
}

// Add window resize event listener
window.addEventListener("resize", function() {
    initIndicatorNetwork();
});

// Update indicator display
function updateIndicatorDisplay() {
    for (const [id, indicator] of Object.entries(indicators)) {
        // Update node in network
        if (indicator.element) {
            indicator.element.className = `indicator-node ${indicator.status}`;
            // Only set textContent if valueElement exists
            if (indicator.valueElement) {
                indicator.valueElement.textContent = '';
            }
        }
        
        // Update value in control area
        const valueElement = document.getElementById(`${id}Value`);
        if (valueElement) {
            valueElement.className = `indicator-value ${indicator.status}`;
            valueElement.textContent = '';
        }
        
        // Update button colors
        // Only highlight the button if it's the one the user manually clicked
        if (id === activeControlId) {
            updateIndicatorButtons(id, indicator.status);
        } else {
            // Reset other buttons to default state
            updateIndicatorButtons(id, 'stable');
        }
    }
}

// Get status text
function getStatusText(status) {
    switch (status) {
        case "rising": return "上涨";
        case "falling": return "下跌";
        default: return "";
    }
}

// Calculate indicator changes with DFS that includes depth limit and path deduplication
function calculateIndicatorChanges(sourceId, direction) {
    const changes = {};
    const transmissionPaths = [];
    const MAX_DEPTH = 2; // Limit to 2 levels of transmission for better readability
    const pathSet = new Set(); // To avoid duplicate paths
    
    // Depth-first search with cycle detection, depth limit, and path tracking
    function dfs(indicatorId, currentDirection, path, visited, depth) {
        // Stop if maximum depth is reached
        if (depth > MAX_DEPTH) return;
        
        // Avoid cycles by checking if we've already processed this indicator in this path
        if (visited.has(indicatorId)) return;
        
        // Create a new visited set for each recursive call to allow different paths
        const newVisited = new Set(visited);
        newVisited.add(indicatorId);
        
        // Get all relationships where this indicator is the source
        const outgoingRelationships = relationships.filter(rel => rel.from === indicatorId);
        
        for (const relationship of outgoingRelationships) {
            const targetId = relationship.to;
            const effect = relationship.effect;
            
            // Calculate new direction based on relationship effect
            const newDirection = effect === "positive" ? currentDirection : (currentDirection === "rise" ? "fall" : "rise");
            
            // Add to changes object
            changes[targetId] = newDirection;
            
            // Create new path with this relationship
            const newPath = [...path, relationship];
            
            // Create a unique key for this path to avoid duplicates
            const pathKey = newPath.map(rel => `${rel.from}->${rel.to}`).join('|');
            
            // Only add unique paths
            if (!pathSet.has(pathKey)) {
                pathSet.add(pathKey);
                transmissionPaths.push(newPath);
            }
            
            // Recursively process the target indicator with increased depth
            dfs(targetId, newDirection, newPath, newVisited, depth + 1);
        }
    }
    
    // Start DFS from the source indicator with initial depth 0
    dfs(sourceId, direction, [], new Set(), 0);
    return { changes, transmissionPaths };
}

// Change indicator status
function changeIndicator(indicatorId, direction) {
    // Set the active control
    activeControlId = indicatorId;

    // Update source indicator
    indicators[indicatorId].status = direction;
    
    // Calculate impacts
    const { changes, transmissionPaths } = calculateIndicatorChanges(indicatorId, direction);
    
    // Update all affected indicators (excluding the source indicator to prevent feedback loops from overwriting user input)
    for (const [id, newDirection] of Object.entries(changes)) {
        if (id !== indicatorId) {
            indicators[id].status = newDirection;
        }
    }
    
    // Update display
    updateIndicatorDisplay();
    
    // Update transmission paths
    updateTransmissionPaths(transmissionPaths);
    
    // Update transmission explanation
    updateTransmissionExplanation(indicatorId, direction, transmissionPaths);
}

// Disable all indicator control buttons
function disableAllButtons() {
    const buttons = document.querySelectorAll('.indicator-controls button, button[onclick="resetIndicators()"]');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });
}

// Update indicator button styles
function updateIndicatorButtons(indicatorId, status) {
    // Reset all buttons for this indicator to their default outline state
    const buttons = document.querySelectorAll(`[data-indicator="${indicatorId}"]`);
    buttons.forEach(btn => {
        const direction = btn.getAttribute('data-direction');
        
        // Remove active filled classes and secondary outline
        btn.classList.remove('btn-success', 'btn-danger', 'btn-outline-secondary');
        
        // Ensure correct outline class is present
        if (direction === 'rise') {
            btn.classList.add('btn-outline-success');
            btn.classList.remove('btn-outline-danger');
        } else {
            btn.classList.add('btn-outline-danger');
            btn.classList.remove('btn-outline-success');
        }
    });
    
    // If status is not stable, set the active button to filled
    if (status !== 'stable') {
        const activeButton = document.querySelector(`[data-indicator="${indicatorId}"][data-direction="${status}"]`);
        if (activeButton) {
            // Remove outline class
            activeButton.classList.remove(status === 'rise' ? 'btn-outline-success' : 'btn-outline-danger');
            // Add filled class
            activeButton.classList.add(status === 'rise' ? 'btn-success' : 'btn-danger');
        }
    }
}

// Enable all indicator control buttons
function enableAllButtons() {
    const buttons = document.querySelectorAll('.indicator-controls button, button[onclick="resetIndicators()"]');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('disabled');
    });
}

// Update transmission paths display
function updateTransmissionPaths(transmissionPaths) {
    // Reset all lines
    for (const line of connectionLines) {
        line.active = false;
        line.element.classList.remove("active");
    }
    
    // Activate lines on transmission paths
    for (const path of transmissionPaths) {
        for (const relationship of path) {
            const line = connectionLines.find(l => l.relationship === relationship);
            if (line) {
                line.active = true;
                line.element.classList.add("active");
            }
        }
    }
}

// Update transmission explanation
function updateTransmissionExplanation(sourceId, direction, transmissionPaths) {
    const explanationContainer = document.getElementById("transmissionExplanation");
    
    // Safety check: ensure sourceId, direction, and indicators exist
    if (!sourceId || !direction || !indicators[sourceId]) {
        const waitingTitle = languageManager.getValueByKey("macro.waitingForChange") || "等待指标变化...";
        const waitingDesc = languageManager.getValueByKey("macro.clickIndicatorToSee") || "点击上方指标的\"上涨\"或\"下跌\"按钮，观察指标间的传导路径和详细解释。";
        explanationContainer.innerHTML = `
            <h3>${waitingTitle}</h3>
            <p>${waitingDesc}</p>
        `;
        return;
    }
    
    const sourceIndicator = indicators[sourceId];
    
    // Safe get value from translations with default
    const safeGetValue = (key, defaultValue) => {
        const value = languageManager.getValueByKey(key);
        return value !== undefined && value !== null ? value : defaultValue;
    };
    
    // Get indicator name from translation file
    const sourceIndicatorName = languageManager.translations.macro?.indicators?.[sourceId] || sourceIndicator.name;
    const directionText = direction === "rise" ? safeGetValue("macro.rise", "上涨") : safeGetValue("macro.fall", "下跌");
    const initialChangeText = safeGetValue("macro.initialChange", "初始变化");
    const transmissionPathsText = safeGetValue("macro.transmissionPaths", "传导路径");
    
    // Format strings
    const explanationTitleFormat = safeGetValue("macro.explanationTitleFormat", "{0}{1}的{2}");
    const valueChangeFormat = safeGetValue("macro.valueChangeFormat", "{0}{1}");
    
    // Construct title
    const explanationTitle = explanationTitleFormat
        .replace("{0}", sourceIndicatorName)
        .replace("{1}", directionText)
        .replace("{2}", transmissionPathsText);

    // Construct value change
    const valueChange = valueChangeFormat
        .replace("{0}", sourceIndicatorName)
        .replace("{1}", directionText);
    
    let html = `
        <h3>${explanationTitle}</h3>
        <div class="mb-3">
            <strong>${initialChangeText}: </strong>${valueChange}
        </div>
        <h4>${transmissionPathsText}: </h4>
    `;
    
    // Group paths by length
    const pathsByLength = {};
    if (Array.isArray(transmissionPaths)) {
        for (const path of transmissionPaths) {
            if (Array.isArray(path)) {
                const length = path.length;
                if (!pathsByLength[length]) {
                    pathsByLength[length] = [];
                }
                pathsByLength[length].push(path);
            }
        }
    }
    
    // Output transmission paths
    for (let length = 1; length <= Object.keys(pathsByLength).length; length++) {
        const paths = pathsByLength[length];
        if (paths) {
            const levelFormat = safeGetValue("macro.levelFormat", "第{0}级传导");
            const levelTitle = levelFormat.replace("{0}", length);
            html += `<h5>${levelTitle}：</h5>`;
            html += `<ul>`;
            
            for (const path of paths) {
                const lastRelationship = path[path.length - 1];
                const toIndicator = indicators[lastRelationship.to];
                const toIndicatorName = languageManager.translations.macro?.indicators?.[lastRelationship.to] || toIndicator.name;
                
                // Calculate target direction
                const toDirection = lastRelationship.effect === "positive" ? direction : (direction === "rise" ? "fall" : "rise");
                const toDirectionText = toDirection === "rise" ? safeGetValue("macro.rise", "上涨") : safeGetValue("macro.fall", "下跌");
                
                // Ensure relationship and descriptionKey exist
                if (!lastRelationship || !lastRelationship.descriptionKey) {
                    continue;
                }
                
                // Calculate source direction for the last relationship in the path
                let sourceDirection = direction;
                for (let i = 0; i < path.length - 1; i++) {
                    const rel = path[i];
                    sourceDirection = rel.effect === "positive" ? sourceDirection : (sourceDirection === "rise" ? "fall" : "rise");
                }
                
                const descriptionKey = lastRelationship.descriptionKey;
                let description;
                
                // Try to get translation directly from languageManager.translations for debugging
                // Try with suffix first (e.g. _rise or _fall)
                const suffix = sourceDirection === "rise" ? "_rise" : "_fall";
                
                if (languageManager && languageManager.translations && languageManager.translations.macro) {
                    // Try specific direction key first
                    description = languageManager.translations.macro[descriptionKey + suffix];
                    // Fallback to generic key
                    if (!description) {
                        description = languageManager.translations.macro[descriptionKey];
                    }
                }
                
                // Fallback to getValueByKey method
                if (!description && languageManager && languageManager.getValueByKey) {
                    description = languageManager.getValueByKey(`macro.${descriptionKey}${suffix}`);
                    if (!description) {
                        description = languageManager.getValueByKey(`macro.${descriptionKey}`);
                    }
                }
                
                // Final fallback to default value
                if (!description) {
                    description = `[${descriptionKey}]`;
                }
                
                // Ensure all values have defaults to prevent undefined or null in output
                const safeDescription = description || "[关系描述]";
                // const safeToIndicatorName = toIndicatorName || "[指标]";
                // const safeToDirectionText = toDirectionText || "[方向]";
                
                // Description already contains the full path and result, so we don't need to append the target indicator and direction
                html += `<li>${safeDescription}</li>`;
            }
            
            html += `</ul>`;
        }
    }
    
    explanationContainer.innerHTML = html;
}

// Reset all indicators
function resetIndicators() {
    // Reset active control
    activeControlId = null;

    // Reset all indicator statuses
    for (const indicator of Object.values(indicators)) {
        indicator.status = "stable";
    }
    
    // Reset connection lines
    for (const line of connectionLines) {
        line.active = false;
        line.element.classList.remove("active");
    }
    
    // Update display
    updateIndicatorDisplay();
    
    // Reset transmission explanation
    const explanationContainer = document.getElementById("transmissionExplanation");
    const waitingTitle = languageManager.getValueByKey("macro.waitingForChange") || "等待指标变化...";
    const waitingDesc = languageManager.getValueByKey("macro.clickIndicatorToSee") || "点击上方指标的\"上涨\"或\"下跌\"按钮，观察指标间的传导路径和详细解释。";
    explanationContainer.innerHTML = `
        <h3>${waitingTitle}</h3>
        <p>${waitingDesc}</p>
    `;
    
    // Re-initialize indicator network
    initIndicatorNetwork();
    
    // Enable all indicator control buttons
    enableAllButtons();
}

// Initialize page
window.addEventListener("load", function() {
    // Ensure DOM is fully loaded
    initIndicatorNetwork();
    updateIndicatorDisplay();
});

// Listen for language change event and update network
window.addEventListener("languageChanged", function() {
    // Wait a short time to ensure translations object has been updated
    setTimeout(function() {
        initIndicatorNetwork();
        updateIndicatorDisplay();
    }, 100);
});
