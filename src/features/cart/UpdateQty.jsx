import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQty, getQtyById, increaseItemQty } from "./cartSlice";

function UpdateQty({ id }) {
  const dispatch = useDispatch();
  const currentQty = useSelector(getQtyById(id));

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQty(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQty;
