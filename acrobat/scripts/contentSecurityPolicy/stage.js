const connectSrc = [
  '"self"',
  'blob:',
  '14257-chimera-stage.adobeioruntime.net',
  '*.adobe.com',
  '*.adobe.io',
  '*.adobelogin.com',
  '*.amazonaws.com',
  '*.blob.core.windows.net',
  '*.clicktale.net/',
  '*.mktoresp.com',
  'accounts.google.com/gsi/log',
  'accounts.google.com/gsi/status',
  'acom-reviews--adobe.hlx.live/reviews-api/',
  'ade0164.d41.co/',
  'adobe.tt.omtrdc.net',
  'adobedc.demdex.net/',
  'adobeioruntime.net',
  'adobesearch-stage.adobe.io',
  'analytics.tiktok.com',
  'api.company-target.com/api/v2/',
  'api.iperceptions.com',
  'bat.bing.com/',
  'c.go-mpulse.net',
  'cchome.adobe.io/',
  'cdn.cookielaw.org',
  'dc-api-stage.adobe.io',
  'dc.stage.acrobat.com',
  'dpm.demdex.net/',
  'geolocation.onetrust.com/',
  'lasteventf-tm.everesttech.net',
  'p13n-stage.adobe.io/fg/api/',
  'p13n.adobe.io/',
  'pdfnow-stage.adobe.io',
  'privacyportal.geolocation.onetrust.com/rust.com',
  'privacyportal.onetrust.com',
  'siteintercept.qualtrics.com/',
  'tr.snapchat.com/',
  ';',
];

const defaultSrc = [
  '"self"',
  'auth-stg1.services.adobe.com',
  'dc.stage.acrobat.com',
  'stage.acrobat.adobe.com',
  ';',
];

const fontSrc = [
  '"self"',
  'use.typekit.net',
  ';',
];

const formAction = [
  '*.adobelogin.com',
  '*.snapchat.com/',
  'helpx.adobe.com',
  'survey.adobe.com/',
  'www.adobe.com',
  'www.facebook.com/tr/',
  'www.stage.adobe.com',
  ';',
];

const frameSrc = [
  '"self"',
  'data:',
  'blob:',
  '*.amazonaws.com',
  '*.blob.core.windows.net',
  '*.snapchat.com/',
  '9212252.fls.doubleclick.net',
  'accounts.google.com',
  'adobe.demdex.net',
  'bid.g.doubleclick.net',
  'dc-api-stage.adobecontent.io',
  'dc-api.adobecontent.io',
  'dc.stage.acrobat.com',
  'servedby.flashtalking.com',
  'stage.acrobat.adobe.com',
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
  '*.adobe.com',
  '*.clarity.ms',
  '*.services.adobe.com',
  'alb.reddit.com/rp.gif',
  'analytics.twitter.com/',
  'bat.bing.com/action/',
  'c.clicktale.net',
  'cc-prod.scene7.com/',
  'cdn.cookielaw.org',
  'cm.everesttech.net/cm/',
  'cx.atdmt.com',
  'dpm.demdex.net',
  'googleads.g.doubleclick.net/pagead/',
  'id.rlcdn.com/',
  'match.prod.bidr.io/cookie-sync/',
  'match.prod.bidr.io/cookie-sync/demandbase/',
  'match.prod.bird.io/cookie-sync/',
  'p.adsymptotic.com/d/px/',
  'pt.ispot.tv/',
  'px.ads.linkedin.com',
  'segments.company-target.com',
  't.co/i/',
  'www.facebook.com/',
  'www.facebook.com/tr/',
  'www.google.ch/pagead/',
  'www.google.co.in/pagead/',
  'www.google.co.jp/pagead/',
  'www.google.com.au/pagead/',
  'www.google.com/pagead/',
  'www.google.ie/pagead/1p-user-list/',
  'www.googletagmanager.com/',
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
  'ade0164.d41.co/sync/',
  'adobe.demdex.net',
  'adobe.tt.omtrdc.net',
  'adobedc.demdex.net/',
  'adobeioruntime.net/api',
  'adobeioruntime.net/api/',
  'analytics.tiktok.com/',
  'analytics.twitter.com',
  'api.company-target.com/api/v2/',
  'api.demandbase.com/api/',
  'api.iperceptions.com',
  'assets.adobedtm.com',
  'bat.bing.com',
  'bid.g.doubleclick.net',
  'cdn.cookielaw.org/scripttemplates/',
  'cdn.pdst.fm',
  'cdnssl.clicktale.net/',
  'cm.everesttech.net',
  'connect.facebook.net',
  'cx.atdmt.com',
  'dc.stage.acrobat.com',
  'dpm.demdex.net',
  'geolocation.onetrust.com',
  'googleads.g.doubleclick.net',
  'googleads.g.doubleclick.net/pagead/viewthroughconversion/',
  'lasteventf-tm.everesttech.net',
  'local-test.acrobat.com:*',
  'match.prod.bidr.io/cookie-sync/',
  'p.adsymptotic.com/d/px',
  'pixel.everesttech.net/rlsa/',
  'px.ads.linkedin.com',
  'rs.gwallet.com',
  's.go-mpulse.net',
  's2.go-mpulse.net',
  'sc-static.net/',
  'scripts.demandbase.com',
  'sd.iperceptions.com',
  'segments.company-target.com',
  'servedby.flashtalking.com',
  'siteintercept.qualtrics.com/',
  'snap.licdn.com',
  'snap.licdn.com/li.lms-analytics',
  'snap.licdn.com/li.lms-analytics/',
  'so.rlcdn.com/',
  'stage.adobeccstatic.com',
  'static.ads-twitter.com',
  't.co/i',
  'tag.clrstm.com',
  'tr.snapchat.com/',
  'universal.iperceptions.com',
  'use.typekit.net',
  'www.everestjs.net/static/le/',
  'www.facebook.com',
  'www.google.com',
  'www.googletagmanager.com',
  'www.googleadservices.com/pagead',
  'www.googletagmanager.com/gtag/',
  'www.linkedin.com/px',
  'www.redditstatic.com/ads/pixel.js',
  'zn3n5vyia1vy8b4ly-adobe.siteintercept.qualtrics.com/',
  ';',
];

const styleSrc = [
  '"self"',
  '"unsafe-inline"',
  '*.adobe.com',
  'accounts.google.com/gsi/style',
  'dc.stage.acrobat.com',
  'stage.adobeccstatic.com',
  'use.typekit.net',
  ';',
];

const workerSrc = [
  '"self"',
  'blob:',
  'cdnssl.clicktale.net',
  ';',
];

const reportUri = [
  '"https://dc-api-stage.adobe.io/system/csp"',
  ';',
];

const reportTo = [
  '"default"',
  ';',
];



export default { connectSrc, defaultSrc, fontSrc, formAction, frameSrc, imgSrc, manifestSrc, scriptSrc, styleSrc, workerSrc, reportUri, reportTo};
