const playwright = require('playwright');

async function main() {
  let url = process.argv[2];

  if (url.endsWith('.json')) return;

  const { playAudit } = await import('playwright-lighthouse');

  const browser = await playwright['chromium'].launch({
    args: ['--remote-debugging-port=9222'],
  });

  const context = await browser.newContext({
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 ${process.env.USER_AGENT_SUFFIX}`,
  });

  const page = await context.newPage();

  if (!url.startsWith('https://') && url.endsWith('.md')) {
    url = url.replace('.md', '');
    url = `https://main--dc--acomhack.hlx.live${url}`;
  }

  await page.goto(url);

  await playAudit({
    page,
    port: 9222,
    reports: {
      formats: {
        json: true,
        html: true,
        csv: true,
      },
      name: 'Milo Post-Publish',
    },
    thresholds: {
      performance: 0,
      accessibility: 0,
      'best-practices': 0,
      seo: 0,
    },
  });

  await browser.close();
}

main()
