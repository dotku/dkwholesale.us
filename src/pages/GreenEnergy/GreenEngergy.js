import MobilePhoneBatteryBankChargeKioskStation from "../../components/Vendors/Carku/MobileBatteryBankCharegeKioskStation";
import MultiplePurposePowerStation from "../../components/Vendors/Carku/MultiplePurposePowerStation";
import HomePowerStorageSolution from "../../components/Vendors/Carku/HomePowerStorageSolution";

export default function GreenEnergy() {
  return (
    <section>
      <div className="h2">Green Energy</div>
      <MobilePhoneBatteryBankChargeKioskStation />
      <MultiplePurposePowerStation />
      <HomePowerStorageSolution />
    </section>
  );
}
