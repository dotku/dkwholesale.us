import Team from "../../components/ContactUs/Team/Team";
import KioskVendingMachine from "../KioskVendingMachine/KioskVendingMachine";
import Merchaindise from "../Merchaindise/Merchaindise";
import Partners from "../Partners";

export default function HomeMain() {
  return (
    <main>
      <Merchaindise />
      <div className="mt-3">
        <Partners />
      </div>
      <Team />
    </main>
  );
}
