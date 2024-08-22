async function main() {
  let url = process.argv[2];

  if (!url.endsWith('.md')) return;

  url = url.replace('.md', '');

  fetch(process.env.UPDATE_METADATA_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      URL: url,
      Preloads: "$MILOLIBS/martech/martech.js,$MILOLIBS/blocks/marquee/marquee.js,$MILOLIBS/blocks/marquee/marquee.css,$MILOLIBS/utils/decorate.js,$MILOLIBS/utils/lana.js,$MILOLIBS/utils/samplerum.js,$MILOLIBS/features/personalization/personalization.js"
    }),
  }).then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Something went wrong');
    }
  });
}
  
main();