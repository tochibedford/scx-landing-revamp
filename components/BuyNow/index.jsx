import ShopifyBuy from '@shopify/buy-button-js'
import { useEffect } from 'react';

const shopifyClient = ShopifyBuy.buildClient({
  domain: 'scx-revamp.myshopify.com',
  storefrontAccessToken: process.env.STOREFRONT_TOKEN
});

const ui = ShopifyBuy.UI.init(shopifyClient)

export default function BuyNow({ id }) {
    useEffect(() => {
        ui.createComponent('product', {
            id,
            node: document.getElementById(`buy-now-${id}`),
        });
    });

    return <div id={`buy-now-${id}`} />;
}