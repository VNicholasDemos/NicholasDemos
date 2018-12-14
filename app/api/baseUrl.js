export default function getBaseUrl() {
  if (window.location.hostname === 'verynicholas.com') {
    // Prod
    return 'http://verynicholas.com/graphql';
  } if (window.location.hostname === '18.216.230.25') {
    // Prod
    return 'http://18.216.230.25/graphql';
  }
  // Development
  return 'http://localhost:80/graphql';
}
