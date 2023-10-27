import CottonVendingMachine from "./CottonVendingMachine";
import MobilePhoneBatteryBankChargeKioskStation from "./MobileBatteryBankCharegeKioskStation";

export default function KioskVendingMachine() {
  console.log("KioskVendingMachine");
  return (
    <>
      <CottonVendingMachine />
      <MobilePhoneBatteryBankChargeKioskStation />
    </>
  );
}
