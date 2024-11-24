import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

// lets use a generic loader here

function AppLayout() {
  const navigation = useNavigation();
  // eslint-disable-next-line no-unused-vars
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_ifr_auto] ">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll ">
        <main className=" max-w-3xl mx-auto ">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
