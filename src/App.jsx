import "./App.css";
import OrderSummary from "./assets/components/OrderSummary";
function App() {
  return (
    <div className="flex h-full justify-center items-center bg-no-repeat md:bg-[url(./assets/images/pattern-background-desktop.svg)] bg-paleBlue">
      <OrderSummary></OrderSummary>
    </div>
  );
}

export default App;
