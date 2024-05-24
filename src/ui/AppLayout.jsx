import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Spinner />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </>
  );
}

export default AppLayout;
