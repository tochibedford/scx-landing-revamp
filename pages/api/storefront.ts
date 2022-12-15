import type { NextApiRequest, NextApiResponse } from 'next'

//   
//shopify token setup
const storefront = process.env.ACCESS_KEY

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse //can be NextApiResponse<Data>
) {
    res.json({ status: "ok" })
}