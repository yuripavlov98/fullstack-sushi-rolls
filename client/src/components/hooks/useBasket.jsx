import { useContext } from 'react'
import { Context } from '../../App'

export const useBasket = () => {
    const { basketItems, setBasketItems } = useContext(Context) // контекст для товаров в корзине
    const totalPrice = (basketItems.reduce((sum, obj) => obj.price + sum, 0))

    return { basketItems, setBasketItems, totalPrice }
}
