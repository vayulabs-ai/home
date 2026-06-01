import Script from "next/script";

const GOOGLE_ADS_ID = "AW-16783322537";
const ADS_CONVERSION_EVENT = "ads_conversion_Purchase_1";

export const GoogleAdsTag = () => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <Script id="google-ads-conversion-helper" strategy="afterInteractive">
        {`
          function gtagSendEvent(url) {
            var callback = function () {
              if (typeof url === 'string') {
                window.location = url;
              }
            };
            gtag('event', '${ADS_CONVERSION_EVENT}', {
              'event_callback': callback,
              'event_timeout': 2000,
            });
            return false;
          }
        `}
      </Script>
    </>
  );
};
