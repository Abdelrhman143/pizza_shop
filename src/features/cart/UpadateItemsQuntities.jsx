import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItem, increaseItem } from './cartSlice';

function UpadateItemsQuntities({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={() => dispatch(increaseItem(pizzaId))} type="round">
        +
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button onClick={() => dispatch(decreaseItem(pizzaId))} type="round">
        -
      </Button>
    </div>
  );
}

export default UpadateItemsQuntities;
