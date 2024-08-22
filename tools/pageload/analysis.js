const playwright = require('playwright');

const desktopViewport = {
  width: 1366,
  height: 768,
};

const mobileViewport = {
  width: 412,
  height: 915,
};

const getVisbleSections = () => {
  const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  const sections = document.querySelectorAll('.section');
  return [...sections].map((x) => elementIsVisibleInViewport(x));
};

async function main() {
  let url = process.argv[2];

  if (url.endsWith('.json')) return;

  if (!url.startsWith('https://') && url.endsWith('.md')) {
    url = url.replace('.md', '');
    url = `https://main--dc--acomhack.hlx.live${url}`;
  }

  const browser = await playwright['chromium'].launch();

  const context = await browser.newContext({
    viewport: desktopViewport,
    userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 ${process.env.USER_AGENT_SUFFIX}`,
  });

  const page = await context.newPage();

  // Get network calls
  const requests = [];
  page.on('request', (req) => requests.push({ method: req.method(), url: req.url() }));

  const urlObj = new URL(url);

  await page.goto(urlObj.href);

  await page.waitForLoadState('networkidle');

  const preloads = [];

  const milolibs = ['/libs/utils/', '/libs/deps/', '/libs/features/'];

  requests.forEach((req) => {
    milolibs.forEach((lib) => {
      if (req.url.includes(lib)) {
        preloads.push(`$MILOLIBS${new URL(req.url).pathname.replace('/libs/', '/')}`);
      }
    });
  });

  requests.map((x) => x.url).forEach((x) => {
    if (x.startsWith(`https://${urlObj.hostname}/acrobat/`)) {
      preloads.push(new URL(x).pathname);
    }
  });

  console.log(preloads);
  console.log(preloads.join(','));

  // Get visible sections
  const visibleSections = await page.evaluate(getVisbleSections);

  console.log(visibleSections);

  await page.setViewportSize(mobileViewport);

  const visibleMobile = await page.evaluate(getVisbleSections);

  console.log(visibleMobile);

  await context.close();
  await browser.close();
}

main();
