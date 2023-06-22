export default function reducer (context, action) {

switch (action.type) {

        case 'currency/set':
            return {
                ...context,
                currency: action.payload
            }
            break;

        case 'exchangeRate/set':
            return {
                ...context,
                exchangeRate: action.payload
            }
            break;

        case 'cart/addItem':
            return {
                ...context,
                shoppingCart: [
                    ...context.shoppingCart,
                    action.payload
                ]
            }
            break;
    }

    return context;
}