import { chromium } from 'playwright';
import { projects } from './src/data/projects.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 }
  });

  const outputDir = join(__dirname, 'public', 'projects');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const project of projects) {
    try {
      console.log(`Capturing screenshot for ${project.title}...`);
      const page = await context.newPage();
      
      await page.goto(project.live, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      
      await page.waitForTimeout(2000);
      
      const filename = project.title.toLowerCase().replace(/\s+/g, '-');
      const filepath = join(outputDir, `${filename}.png`);
      
      await page.screenshot({ 
        path: filepath,
        fullPage: false 
      });
      
      console.log(`✓ Saved ${filename}.png`);
      await page.close();
    } catch (error) {
      console.error(`✗ Failed to capture ${project.title}:`, error.message);
    }
  }

  await browser.close();
  console.log('\nAll screenshots captured!');
}

captureScreenshots().catch(console.error);
