export const ADS_CONVERSION_EVENT = "ads_conversion_Purchase_1";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtagSendEvent?: (url?: string) => boolean;
  }
}

/** Fire Google Ads conversion; runs callback after the event is sent (or on timeout). */
export function reportAdsConversion(onComplete?: () => void) {
  if (typeof window === "undefined") {
    onComplete?.();
    return;
  }

  const gtag = window.gtag;
  if (!gtag) {
    onComplete?.();
    return;
  }

  gtag("event", ADS_CONVERSION_EVENT, {
    event_callback: onComplete,
    event_timeout: 2000,
  });
}
