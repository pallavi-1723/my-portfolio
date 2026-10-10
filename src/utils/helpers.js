// Builds a path to a file in /public that works wherever the site is hosted.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// True only for real http(s) URLs, so empty or malformed links never render as buttons.
export function isValidUrl(value) {
  if (!value || typeof value !== 'string') return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}
