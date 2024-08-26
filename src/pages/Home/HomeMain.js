import Team from "../../components/ContactUs/Team/Team";
import KioskVendingMachine from "../KioskVendingMachine/KioskVendingMachine";
import Partners from "../Partners";

export default function HomeMain() {
  return (
    <main>
      <KioskVendingMachine />
      <div className="mt-3">
        <Partners />
      </div>
      <Team />
    </main>
  );
}
