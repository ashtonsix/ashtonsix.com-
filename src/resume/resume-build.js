const fs = require('fs')
const path = require('path')
const marked = require('marked')
const puppeteer = require('puppeteer')

const headPath = path.resolve(__dirname, 'resume-head.html')
const bodyPath = path.resolve(__dirname, 'resume.md')
const donePath = path.resolve(process.cwd(), 'public/resume.pdf')

const main = async () => {
  const head = fs.readFileSync(headPath, 'utf8')
  const body = marked(fs.readFileSync(bodyPath, 'utf8'))
  const html = head + body

  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.setContent(html, {waitUntil: 'networkidle0'})
  const pdf = await page.pdf({
    path: donePath,
    format: 'A4',
    margin: {top: '0.75cm', bottom: '0.75cm', left: '0.5cm', right: '0.5cm'}
  })

  await browser.close()
  return pdf
}

main()

module.exports = main
