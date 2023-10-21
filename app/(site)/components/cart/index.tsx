import Breadcrumb from "../ui/Breadcrumb";
import CartBody from "./CartBody";

const CartPage = () => {
  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto pb-10">
        <div className="mt-10">
          <CartBody />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
