import ShopifyBuy from '@shopify/buy-button-js'
import { useEffect } from 'react';

const shopifyClient = ShopifyBuy.buildClient({
    domain: 'scx-revamp.myshopify.com',
    storefrontAccessToken: process.env.STOREFRONT_TOKEN
});

const ui = ShopifyBuy.UI.init(shopifyClient)

export default function BuyNow({ id }) {
    useEffect(() => {
        try {
            if (!document.querySelector(`iframe[name=frame-product-${id}]`)) {
                ui.createComponent('product', {
                    id: id,
                    node: document.getElementById(`buy-now-${id}`),
                    options: {
                        product: {
                            contents: {
                                options: false,
                                price: false,
                                title: false,
                                img: false
                            },
                            styles: {
                                div: {
                                    'margin-top': 0
                                },
                                button: {
                                    'background-color': 'transparent',
                                    'color': 'black',
                                    'font-weight': '700',
                                    'font-family': 'Courier New, Courier, monospace',
                                    'margin-top': '-20px !important',
                                    'width': '100% !important',
                                    'font-size': '1.2em',
                                    'border': '1px solid black',
                                    ':hover': {
                                        'color': 'white',
                                        'background-color': 'black',
                                        'border': '1px solid white',
                                    },
                                    ":focus": {
                                        'color': 'white',
                                        'background-color': 'black',
                                    }
                                }
                            },
                            events: {
                                afterRender: (comp) => {
                                    if (comp.node.querySelectorAll(`iframe[name=frame-product-${id}]`).length > 1) {
                                        comp.node.querySelectorAll(`iframe[name=frame-product-${id}]`).forEach((element, index) => {
                                            if (index > 0) {
                                                element.remove()
                                            }
                                        })
                                    }
                                }
                            }
                        },
                        toggle: {
                            styles: {
                                "toggle": {
                                    "font-family": 'Courier New, Courier, monospace',
                                    "background-color": "#000000",
                                    ":hover": {
                                        "color": "white",
                                        "background-color": "#525252"
                                    },
                                    ":focus": {
                                        "background-color": "#000000"
                                    }
                                },
                                "count": {
                                    "font-size": "17px"
                                }
                            },
                        },
                        cart: {
                            'font-weight': '700',
                            'font-family': 'Courier New, Courier, monospace',
                            styles: {
                                button: {
                                    'background-color': 'transparent',
                                    'color': 'black',
                                    'font-weight': '700',
                                    'font-family': 'Courier New, Courier, monospace',
                                    'width': '100% !important',
                                    'font-size': '1.2em',
                                    'border': '1px solid black',
                                    ':hover': {
                                        'color': 'white',
                                        'background-color': 'black',
                                        'border': '1px solid white',
                                    },
                                    ":focus": {
                                        'color': 'white',
                                        'background-color': 'black',
                                    }
                                }
                            }
                        }
                    },
                });
            }
        } catch {
            console.log("duplicate buttons detected and cleared")
        }
    }, [id]);

    return <div id={`buy-now-${id}`} />;
}