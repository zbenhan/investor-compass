// 宏观经济指标关联关系脚本

// 指标数据模型
const indicators = {
    interestRate: {
        name: "利率",
        status: "stable", // stable, rising, falling
        element: null,
        valueElement: null,
        position: { x: 200, y: 100 }
    },
    gdp: {
        name: "GDP",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 450, y: 150 }
    },
    unemployment: {
        name: "失业率",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 700, y: 100 }
    },
    bondYield: {
        name: "债券收益率",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 200, y: 350 }
    },
    export: {
        name: "出口",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 450, y: 400 }
    },
    import: {
        name: "进口",
        status: "stable",
        element: null,
        valueElement: null,
        position: { x: 700, y: 350 }
    }
};

// 指标关联关系
const relationships = [
    // 利率影响
    { from: "interestRate", to: "gdp", effect: "negative", description: "利率↑ → 融资成本↑ → 投资消费↓ → GDP↓" },
    { from: "interestRate", to: "bondYield", effect: "positive", description: "利率↑ → 债券价格↓ → 债券收益率↑" },
    { from: "interestRate", to: "unemployment", effect: "positive", description: "利率↑ → 经济活动↓ → 失业率↑" },
    { from: "interestRate", to: "export", effect: "negative", description: "利率↑ → 本币升值 → 出口商品价格↑ → 出口↓" },
    { from: "interestRate", to: "import", effect: "positive", description: "利率↑ → 本币升值 → 进口商品价格↓ → 进口↑" },
    
    // GDP影响
    { from: "gdp", to: "interestRate", effect: "positive", description: "GDP↑ → 通胀压力↑ → 央行加息 → 利率↑" },
    { from: "gdp", to: "unemployment", effect: "negative", description: "GDP↑ → 经济活动↑ → 就业机会↑ → 失业率↓" },
    { from: "gdp", to: "bondYield", effect: "positive", description: "GDP↑ → 经济增长预期↑ → 债券收益率↑" },
    { from: "gdp", to: "export", effect: "positive", description: "GDP↑ → 生产能力↑ → 出口↑" },
    { from: "gdp", to: "import", effect: "positive", description: "GDP↑ → 国内需求↑ → 进口↑" },
    
    // 失业率影响
    { from: "unemployment", to: "interestRate", effect: "negative", description: "失业率↑ → 央行降息 → 利率↓" },
    { from: "unemployment", to: "gdp", effect: "negative", description: "失业率↑ → 消费能力↓ → GDP↓" },
    { from: "unemployment", to: "bondYield", effect: "negative", description: "失业率↑ → 经济衰退预期↑ → 债券收益率↓" },
    
    // 债券收益率影响
    { from: "bondYield", to: "interestRate", effect: "positive", description: "债券收益率↑ → 市场利率预期↑ → 利率↑" },
    { from: "bondYield", to: "gdp", effect: "negative", description: "债券收益率↑ → 融资成本↑ → GDP↓" },
    
    // 出口影响
    { from: "export", to: "gdp", effect: "positive", description: "出口↑ → 净出口↑ → GDP↑" },
    { from: "export", to: "interestRate", effect: "positive", description: "出口↑ → 经济增长↑ → 利率↑" },
    
    // 进口影响
    { from: "import", to: "gdp", effect: "negative", description: "进口↑ → 净出口↓ → GDP↓" },
    { from: "import", to: "interestRate", effect: "negative", description: "进口↑ → 经济压力↑ → 利率↓" }
];

// 连接线条数组
let connectionLines = [];

// 初始化函数
document.addEventListener("DOMContentLoaded", function() {
    initIndicatorNetwork();
    updateIndicatorDisplay();
});

// 初始化指标关系网络
function initIndicatorNetwork() {
    const networkContainer = document.getElementById("indicatorNetwork");
    
    // 创建指标节点
    for (const [id, indicator] of Object.entries(indicators)) {
        const node = document.createElement("div");
        node.className = `indicator-node ${indicator.status}`;
        node.style.left = `${indicator.position.x}px`;
        node.style.top = `${indicator.position.y}px`;
        node.innerHTML = `
            <div class="node-label">${indicator.name}</div>
            <div class="node-value">${getStatusText(indicator.status)}</div>
        `;
        networkContainer.appendChild(node);
        indicator.element = node;
        
        // 保存值元素引用
        indicator.valueElement = node.querySelector(".node-value");
    }
    
    // 创建连接线条
    for (const relationship of relationships) {
        const fromIndicator = indicators[relationship.from];
        const toIndicator = indicators[relationship.to];
        
        const line = document.createElement("div");
        line.className = `connection-line ${relationship.effect}`;
        
        // 计算线条位置和角度
        const dx = toIndicator.position.x - fromIndicator.position.x;
        const dy = toIndicator.position.y - fromIndicator.position.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        line.style.left = `${fromIndicator.position.x + 60}px`;
        line.style.top = `${fromIndicator.position.y + 60}px`;
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        networkContainer.appendChild(line);
        connectionLines.push({
            element: line,
            relationship: relationship,
            active: false
        });
    }
}

// 更新指标显示
function updateIndicatorDisplay() {
    for (const [id, indicator] of Object.entries(indicators)) {
        // 更新网络中的节点
        if (indicator.element) {
            indicator.element.className = `indicator-node ${indicator.status}`;
            indicator.valueElement.textContent = getStatusText(indicator.status);
        }
        
        // 更新控制区域的值
        const valueElement = document.getElementById(`${id}Value`);
        if (valueElement) {
            valueElement.className = `indicator-value ${indicator.status}`;
            valueElement.textContent = getStatusText(indicator.status);
        }
    }
}

// 获取状态文本
function getStatusText(status) {
    switch (status) {
        case "rising": return "上涨";
        case "falling": return "下跌";
        default: return "稳定";
    }
}

// 计算指标变化
function calculateIndicatorChanges(sourceId, direction) {
    const changes = {};
    const transmissionPaths = [];
    
    // 深度优先搜索所有关联指标
    function dfs(indicatorId, path, visited) {
        if (visited.has(indicatorId)) return;
        visited.add(indicatorId);
        
        for (const relationship of relationships) {
            if (relationship.from === indicatorId) {
                const targetId = relationship.to;
                const effect = relationship.effect;
                const newDirection = effect === "positive" ? direction : (direction === "rise" ? "fall" : "rise");
                
                changes[targetId] = newDirection;
                
                const newPath = [...path, relationship];
                transmissionPaths.push(newPath);
                
                dfs(targetId, newPath, new Set(visited));
            }
        }
    }
    
    dfs(sourceId, [], new Set());
    return { changes, transmissionPaths };
}

// 改变指标状态
function changeIndicator(indicatorId, direction) {
    // 更新源指标
    indicators[indicatorId].status = direction;
    
    // 计算影响
    const { changes, transmissionPaths } = calculateIndicatorChanges(indicatorId, direction);
    
    // 更新所有受影响的指标
    for (const [id, newDirection] of Object.entries(changes)) {
        indicators[id].status = newDirection;
    }
    
    // 更新显示
    updateIndicatorDisplay();
    
    // 更新传导路径
    updateTransmissionPaths(transmissionPaths);
    
    // 更新传导解释
    updateTransmissionExplanation(indicatorId, direction, transmissionPaths);
}

// 更新传导路径
function updateTransmissionPaths(transmissionPaths) {
    // 重置所有线条
    for (const line of connectionLines) {
        line.active = false;
        line.element.classList.remove("active");
    }
    
    // 激活传导路径上的线条
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

// 更新传导解释
function updateTransmissionExplanation(sourceId, direction, transmissionPaths) {
    const explanationContainer = document.getElementById("transmissionExplanation");
    const sourceIndicator = indicators[sourceId];
    
    let html = `
        <h3>${sourceIndicator.name}${direction === "rise" ? "上涨" : "下跌"}的传导路径</h3>
        <div class="mb-3">
            <strong>初始变化：</strong>${sourceIndicator.name}${direction === "rise" ? "上涨" : "下跌"}
        </div>
        <h4>传导路径：</h4>
    `;
    
    // 按长度分组路径
    const pathsByLength = {};
    for (const path of transmissionPaths) {
        const length = path.length;
        if (!pathsByLength[length]) {
            pathsByLength[length] = [];
        }
        pathsByLength[length].push(path);
    }
    
    // 输出传导路径
    for (let length = 1; length <= Object.keys(pathsByLength).length; length++) {
        const paths = pathsByLength[length];
        if (paths) {
            html += `<h5>第${length}级传导：</h5>`;
            html += `<ul>`;
            
            for (const path of paths) {
                const lastRelationship = path[path.length - 1];
                const toIndicator = indicators[lastRelationship.to];
                html += `<li>${lastRelationship.description} → ${toIndicator.name}${lastRelationship.effect === "positive" ? direction === "rise" ? "上涨" : "下跌" : direction === "rise" ? "下跌" : "上涨"}</li>`;
            }
            
            html += `</ul>`;
        }
    }
    
    explanationContainer.innerHTML = html;
}

// 重置所有指标
function resetIndicators() {
    // 重置所有指标状态
    for (const indicator of Object.values(indicators)) {
        indicator.status = "stable";
    }
    
    // 重置传导路径
    for (const line of connectionLines) {
        line.active = false;
        line.element.classList.remove("active");
    }
    
    // 重置显示
    updateIndicatorDisplay();
    
    // 重置传导解释
    const explanationContainer = document.getElementById("transmissionExplanation");
    explanationContainer.innerHTML = `
        <h3>等待指标变化...</h3>
        <p>点击上方指标的"上涨"或"下跌"按钮，观察指标间的传导路径和详细解释。</p>
    `;
}

// 初始化页面
window.addEventListener("load", function() {
    // 确保DOM完全加载
    initIndicatorNetwork();
    updateIndicatorDisplay();
});