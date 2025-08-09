import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  console.log(fetcher.data);
  const isLoading = fetcher.state === 'loading';

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button disabled={isLoading} type="primary">
        {isLoading ? 'making....' : 'Make priority'}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
