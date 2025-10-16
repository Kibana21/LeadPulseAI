// Simple PDF converter using Puppeteer (if available) or instructions
const fs = require('fs');
const { execSync } = require('child_process');

console.log('Attempting to generate PDF from HTML presentation...\n');

// Method 1: Try using system Chrome/Chromium with headless mode
try {
  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium'
  ];

  let chromePath = null;
  for (const path of chromePaths) {
    if (fs.existsSync(path)) {
      chromePath = path;
      break;
    }
  }

  if (chromePath) {
    console.log(`Found Chrome at: ${chromePath}`);
    console.log('Generating PDF...\n');

    const htmlPath = `file://${__dirname}/LeadPulseAI-Prototype/presentation-journey.html`;
    const outputPath = `${__dirname}/LeadPulseAI-Presentation.pdf`;

    execSync(`"${chromePath}" --headless --disable-gpu --print-to-pdf="${outputPath}" --print-to-pdf-no-header --no-margins "${htmlPath}"`, {
      stdio: 'inherit'
    });

    console.log('✓ PDF generated successfully!');
    console.log(`Location: LeadPulseAI-Presentation.pdf`);
  } else {
    throw new Error('Chrome/Chromium not found');
  }
} catch (error) {
  console.log('Automated conversion not available.');
  console.log('\nMANUAL CONVERSION INSTRUCTIONS:');
  console.log('================================\n');
  console.log('1. Open the presentation in your browser:');
  console.log('   - Open: LeadPulseAI-Prototype/presentation-journey.html\n');
  console.log('2. Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)\n');
  console.log('3. In the print dialog:');
  console.log('   - Destination: Save as PDF');
  console.log('   - Layout: Landscape');
  console.log('   - Margins: None');
  console.log('   - Background graphics: ON (IMPORTANT for colors)\n');
  console.log('4. Click "Save" and choose location\n');
  console.log('This will preserve all colors, gradients, and layouts perfectly!');
}
