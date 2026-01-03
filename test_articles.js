const fs = require('fs');
const path = require('path');
const http = require('http');

// 定义文章列表和语言
const articles = [
    'value-investing-criteria',
    'technical-analysis-foundations',
    'fed-interest-rates',
    'investment-narrative',
    'graham-vs-growth',
    'value-investing',
    'technical-analysis',
    'macro-investing',
    'narrative-investing',
    'long-term-vs-short-term',
    'fundamental-vs-technical',
    'investment-schools'
];

const languages = ['zh', 'en', 'fr', 'es'];

// 测试函数
function testArticle(lang, article, callback) {
    const options = {
        hostname: 'localhost',
        port: 8000,
        path: `/articles/${lang}/${article}.html`,
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        callback(null, {
            lang,
            article,
            statusCode: res.statusCode
        });
    });

    req.on('error', (error) => {
        callback(error, {
            lang,
            article,
            error: error.message
        });
    });

    req.end();
}

// 运行所有测试
function runAllTests() {
    let testsCompleted = 0;
    const totalTests = articles.length * languages.length;
    const results = [];

    languages.forEach(lang => {
        articles.forEach(article => {
            testArticle(lang, article, (error, result) => {
                results.push(result);
                testsCompleted++;

                if (testsCompleted === totalTests) {
                    // 所有测试完成，输出结果
                    console.log('=== 文章访问测试结果 ===\n');
                    
                    // 分组统计
                    const summary = {};
                    results.forEach(result => {
                        if (!summary[result.lang]) {
                            summary[result.lang] = {
                                total: 0,
                                success: 0,
                                failed: 0
                            };
                        }
                        
                        summary[result.lang].total++;
                        if (result.statusCode === 200) {
                            summary[result.lang].success++;
                        } else {
                            summary[result.lang].failed++;
                        }
                    });
                    
                    // 输出摘要
                    console.log('=== 摘要统计 ===');
                    Object.entries(summary).forEach(([lang, stats]) => {
                        console.log(`${lang.toUpperCase()}: ${stats.success}/${stats.total} 成功`);
                    });
                    
                    console.log('\n=== 详细结果 ===');
                    // 输出详细结果
                    results.forEach(result => {
                        const status = result.statusCode === 200 ? '✓' : '✗';
                        const message = result.statusCode === 200 ? 
                            `成功 (${result.statusCode})` : 
                            `失败 (${result.statusCode || result.error})`;
                        console.log(`${status} ${result.lang}/${result.article}.html: ${message}`);
                    });
                    
                    // 检查是否有失败
                    const hasFailures = results.some(r => r.statusCode !== 200);
                    if (!hasFailures) {
                        console.log('\n✅ 所有文章访问测试通过！');
                        process.exit(0);
                    } else {
                        console.log('\n❌ 部分文章访问测试失败！');
                        process.exit(1);
                    }
                }
            });
        });
    });
}

// 启动测试
console.log('开始测试所有语言版本的文章访问...\n');
runAllTests();
