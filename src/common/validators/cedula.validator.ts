import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsCedulaValidConstraint implements ValidatorConstraintInterface {
  
  validate(value: any): boolean {
    if (this.validaCedula(value)) {
      return true;
    }
    if (this.validaRNC(value)) {
      return true;
    }
    return false; 
  }

  defaultMessage(args: ValidationArguments): string {
    return 'El número proporcionado no es una cédula ni un RNC válido.';
  }

  private validaCedula(pCedula: string): boolean {
    let vnTotal = 0;
    const vcCedula = pCedula.replace("-", "");
    const pLongCed = vcCedula.trim().length;
    const digitoMult = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

    if (pLongCed < 11 || pLongCed > 11) {
        return false;
    }

    for (let vDig = 1; vDig <= pLongCed; vDig++) {
        const vCalculo = parseInt(vcCedula.substring(vDig - 1, vDig)) * digitoMult[vDig - 1];
        if (vCalculo < 10) {
            vnTotal += vCalculo;
        } else {
            vnTotal += parseInt(vCalculo.toString().charAt(0)) + parseInt(vCalculo.toString().charAt(1));
        }
    }

    return vnTotal % 10 === 0; 
  }

  private validaRNC(pRNC: string): boolean {
    let vnTotal = 0;
    const digitoMult: number[] = [7, 9, 8, 6, 5, 4, 3, 2];
    const vcRNC = pRNC.replace(/-/g, "").replace(/ /g, "");
    const vDigito = vcRNC.substring(8, 9);

    if (vcRNC.length === 9) {
        if (!["1", "4", "5"].includes(vcRNC.substring(0, 1))) {
            return false;
        }
    }

    for (let vDig = 1; vDig <= 8; vDig++) {
        const vCalculo = parseInt(vcRNC.substring(vDig - 1, vDig)) * digitoMult[vDig - 1];
        vnTotal += vCalculo;
    }

    if ((vnTotal % 11 === 0 && vDigito === "1") || 
        (vnTotal % 11 === 1 && vDigito === "1") || 
        (11 - (vnTotal % 11) === parseInt(vDigito))) {
        return true;
    } else {
        return false;
    }
  }
}
