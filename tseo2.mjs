import { chromium } from 'playwright'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 1000 }, locale: 'es-CL' })
const logs = []
p.on('console', m => logs.push(`[${m.type()}] ${m.text().slice(0,300)}`))
await p.goto('http://localhost:3096/work/viten', { waitUntil: 'networkidle' })
await p.waitForTimeout(3000)
console.log('--- logs ---')
console.log(logs.join('\n').slice(0,1500) || 'none')
await b.close()
