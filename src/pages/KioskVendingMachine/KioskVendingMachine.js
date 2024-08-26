import CottonVendingMachine from "./CottonVendingMachine";
import MobilePhoneBatteryBankChargeKioskStation from "../../components/Vendors/Carku/MobileBatteryBankCharegeKioskStation";
import Partners from "../Partners";

export default function KioskVendingMachine() {
  console.log("KioskVendingMachine");
  return (
    <>
      <CottonVendingMachine />
      <MobilePhoneBatteryBankChargeKioskStation />
    </>
  );
}
