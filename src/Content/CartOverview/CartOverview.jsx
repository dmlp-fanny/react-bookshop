import { useContext } from "react"
import Context from "../../Context"

export default function CartOverview () {

    const { context: {shoppingCart} } = useContext(Context)

    return (
        <div>
            { shoppingCart.length } items in cart
        </div>
    )
}