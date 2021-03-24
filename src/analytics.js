/*global gtag*/

export function sendToGoogleAnalytics({ name, delta, value, id }) {
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/ga4
  gtag("event", name, {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.
    // Any additional params or metadata (e.g. debug information) can be
    // set here as well, within the following limitations:
    // https://support.google.com/analytics/answer/9267744
  });
}
