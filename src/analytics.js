/*global gtag*/

export function sendToGoogleAnalytics({ name, delta, value, id }) {
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/ga4
  if (typeof gtag === 'function') {
    gtag('event', name, {
      value: delta,
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
    });
  }
}
