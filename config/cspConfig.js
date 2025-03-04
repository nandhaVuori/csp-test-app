function getCSPDirectives() {
  return `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
    `
    .replace(/\s+/g, ' ')
    .trim();
}

function getCSPHeader() {
  return process.env.NEXT_CSP_REPORT_ONLY === 'true'
    ? 'Content-Security-Policy-Report-Only'
    : 'Content-Security-Policy';
}

module.exports = { getCSPDirectives, getCSPHeader };
