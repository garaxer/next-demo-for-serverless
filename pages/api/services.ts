// pages/api/services.js
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function services(req, res) {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant

  const s = getSession(req, res);
  
  const response = await fetch('https://bpqc2pxzub.execute-api.ap-southeast-2.amazonaws.com/dev/services/9ed6dc2c-5c96-4218-9ac6-dde908ff4c65/book', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${s?.idToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });
  const products = await response.json();
  console.log(products);
  
  res.status(200).json(products);
});