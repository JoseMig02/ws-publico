// src/common/validators/cedula.validator.ts
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, IsString } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsCedulaValidConstraint implements ValidatorConstraintInterface {
  
  validate(value: any): boolean {
    return this.valida_cedula(value);
  }

  defaultMessage(args: ValidationArguments): string {
    return 'La cédula no es válida.';
  }

  valida_cedula(ced: string): boolean {  
    const c: string = ced.replace(/-/g, '');  
    const cedula: string = c.slice(0, c.length - 1);  
    const verificador: string = c.slice(c.length - 1);  
    let suma: number = 0;  
    let cedulaValida: number = 0;
    
    if (ced.length < 11) { return false; }  
    
    for (let i: number = 0; i < cedula.length; i++) {  
        let mod: number = (i % 2) === 0 ? 1 : 2;  
        let res: number = parseInt(cedula.slice(i, i + 1)) * mod; 
        
        if (res > 9) {  
            const uno: string = res.toString().slice(0, 1);  
            const dos: string = res.toString().slice(1, 2); 
            res = parseInt(uno) + parseInt(dos);  
        } 
        
        suma += res;  
    }  
    
    const el_numero: number = (10 - (suma % 10)) % 10;  
    
    if (el_numero === parseInt(verificador) && cedula.slice(0, 3) !== "000") {  
        cedulaValida = 1;
    } else {  
        cedulaValida = 0;
    }  
    
    return cedulaValida === 1;  
  }
}
