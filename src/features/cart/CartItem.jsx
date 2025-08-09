import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpadateItemsQuntities from './UpadateItemsQuntities';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <UpadateItemsQuntities
        pizzaId={pizzaId}
        quantity={quantity}
      ></UpadateItemsQuntities>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId}></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
