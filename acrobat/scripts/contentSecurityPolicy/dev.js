const connectSrc = [
  '"self"',
  'blob:',
  '14257-chimera-stage.adobeioruntime.net',
  '*.adobe.com',
  '*.adobe.io',
  '*.adobelogin.com',
  '*.amazonaws.com',
  '*.blob.core.windows.net',
  '*.clarity.ms',
  '*.clicktale.net/',
  '*.mktoresp.com',
  'accounts.google.com/gsi/log',
  'accounts.google.com/gsi/status',
  'adobe.tt.omtrdc.net',
  'adobeioruntime.net',
  'analytics.tiktok.com',
  'api.company-target.com/api/v2/',
  'api.iperceptions.com',
  'c.go-mpulse.net',
  'cdn.cookielaw.org',
  'dc-api-dev.adobe.io',
  'dc.dev.dexilab.acrobat.com',
  'dpm.demdex.net',
  'geolocation.onetrust.com',
  'lasteventf-tm.everesttech.net',
  'p13n-stage.adobe.io/fg/api/',
  'pdfnow-dev.adobe.io',
  'privacyportal.onetrust.com',
  'tr.snapchat.com/',
  ';',
];

const defaultSrc = [
  '"self"',
  'auth-stg1.services.adobe.com',
  ';',
];

const fontSrc = [
  '"self"',
  'use.typekit.net',
  ';',
];

const formAction = [
  '*.snapchat.com',
  '*.adobelogin.com',
  'helpx.adobe.com',
  'www.facebook.com/tr/',
  ';',
];

const frameSrc = [
  '"self"',
  'data:',
  'blob:',
  '*.amazonaws.com',
  '*.blob.core.windows.net',
  '9212252.fls.doubleclick.net',
  'accounts.google.com',
  'adobe.demdex.net',
  'bid.g.doubleclick.net',
  'dc-api-dev.adobecontent.io',
  'dc.dev.dexilab.acrobat.com',
  'dev.acrobat.adobe.com',
  'servedby.flashtalking.com',
  'tr.snapchat.com/',
  'tr6.snapchat.com/',
  'universal.iperceptions.com',
  'video.tv.adobe.com',
  'vimeo.com',
  'www.facebook.com',
  'www.youtube.com',
  ';',
];

const imgSrc = [
  '"self"',
  'about:',
  'blob:',
  'data:',
  '*.clarity.ms',
  '*.services.adobe.com',
  'alb.reddit.com/rp.gif',
  'bat.bing.com/action/',
  'cdn.cookielaw.org',
  'cm.everesttech.net/cm/',
  'dpm.demdex.net',
  'googleads.g.doubleclick.net/pagead/',
  'id.rlcdn.com/',
  'match.prod.bidr.io/',
  'match.prod.bidr.io/cookie-sync/demandbase/',
  'match.prod.bird.io/cookie-sync/',
  'p.adsymptotic.com/d/px/',
  'pt.ispot.tv/',
  'px.ads.linkedin.com',
  'segments.company-target.com',
  't.co/i/',
  'www.adobe.com',
  'www.dev01.adobe.com',
  'www.facebook.com/tr/',
  'www.google.ch/pagead/',
  'www.google.co.in/pagead/',
  'www.google.co.jp/pagead/',
  'www.google.com.au/pagead/',
  'www.google.com/pagead/',
  'www.google.ie/pagead/',
  'www.linkedin.com',
  ';',
];

const manifestSrc = [
  '"self"',
  ';',
];

const scriptSrc = [
  '"self"',
  '"unsafe-eval"',
  '*.adobe.com',
  '*.clarity.ms',
  'accounts.google.com/gsi/client',
  'adobe.demdex.net',
  'adobe.tt.omtrdc.net',
  'analytics.tiktok.com/',
  'analytics.twitter.com',
  'assets.adobedtm.com',
  'bat.bing.com',
  'bid.g.doubleclick.net',
  'cdn.cookielaw.org/',
  'cdn.pdst.fm',
  'cdnssl.clicktale.net/',
  'connect.facebook.net',
  'dc.dev.dexilab.acrobat.com',
  'geolocation.onetrust.com',
  'googleads.g.doubleclick.net/pagead/viewthroughconversion/',
  'local-test.acrobat.com:*',
  'pixel.everesttech.net/',
  's2.go-mpulse.net',
  'sc-static.net/',
  'scripts.demandbase.com',
  'sd.iperceptions.com',
  'servedby.flashtalking.com',
  'snap.licdn.com/li.lms-analytics/',
  'so.rlcdn.com/',
  'static.ads-twitter.com',
  'universal.iperceptions.com',
  'use.typekit.net',
  'www.everestjs.net/static/le/',
  'www.facebook.com',
  'www.google.com',
  'www.googleadservices.com/pagead/',
  'www.googletagmanager.com/gtag/',
  'www.redditstatic.com/ads/pixel.js',
  ';',
];

const styleSrc = [
  '"self"',
  '"unsafe-inline"',
  '*.adobe.com',
  'accounts.google.com/gsi/style',
  'dc.dev.dexilab.acrobat.com',
  'use.typekit.net',
  ';',
];

const workerSrc = [
  '"self"',
  'cdnssl.clicktale.net',
  'blob:',
  ';',
];

const reportUri = [
 'https://dc-api-dev.adobe.io/system/csp',
  ';',
];

const reportTo = [
  'default',
  ';',
];

// TRY This
// use variables for the different domians

export default { connectSrc, defaultSrc, fontSrc, formAction, frameSrc, imgSrc, manifestSrc, scriptSrc, styleSrc, workerSrc, reportUri, reportTo };
