namespace FactoryMethod {

  interface IInsurance {
    id: number;
    status: string;
    setVehicle(vecicle: any): void;
    submit(): Promise<boolean>;
  }

  class TFIInsurance implements IInsurance {
    id: number;
    status: string;
    private vecicle: any;

    setVehicle(vecicle: any): void {
      this.vecicle = vecicle;
    }

    async submit(): Promise<boolean> {
      const res = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ vecicle: this.vecicle
      })});
      const data = await res.json();
      return data.isSuccess;
    }
  }

  class ABIInsurance implements IInsurance {
    id: number;
    status: string;
    private vecicle: any;

    setVehicle(vecicle: any): void {
      this.vecicle = vecicle;
    }

    async submit(): Promise<boolean> {
      const res = await fetch('ab', {
        method: 'POST',
        body: JSON.stringify({ vecicle: this.vecicle
      })});
      const data = await res.json();
      return data.yes;
    }
  }

  abstract class InsuranceFactory {
    db: any;
    abstract createInsurance(): IInsurance;
    saveHistory(ins: IInsurance) {
      this.db.save(ins.id, ins.status);
    }
  }

  class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFIInsurance {
      return new TFIInsurance();
    }
  }

  class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): ABIInsurance {
      return new ABIInsurance();
    }
  }

  // С помощью мапов типов
  const tfInsuranceFactory = new TFInsuranceFactory();
  const ins = tfInsuranceFactory.createInsurance();
  tfInsuranceFactory.saveHistory(ins);

  const INSURANCE_TYPE = {
    tf: TFIInsurance,
    ab: ABIInsurance
  }

  type IT = typeof INSURANCE_TYPE;

  class InsuranceFactoryAlt {
    db: any;
    createInsurance<T extends keyof IT>(type: T): IT[T] {
      return INSURANCE_TYPE[type];
    }
    saveHistory(ins: IInsurance) {
      this.db.save(ins.id, ins.status);
    }

  }

  const insuranceFactoryAlt = new InsuranceFactoryAlt();
  const ins2 = new (insuranceFactoryAlt.createInsurance('tf'));
  insuranceFactoryAlt.saveHistory(ins2);

}