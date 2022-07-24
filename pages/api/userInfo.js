import {getUsersInfo} from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const handler = async (req, res) => {
  const {token: {accessToken,sub},} = await getSession({req});
  const response = await getUsersInfo(accessToken, sub);
  const {items} = await response.json();
return res.status(200).json({items});
};
export default handler;