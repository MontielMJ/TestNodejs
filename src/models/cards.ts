export class Card{
    titular : string;
    numeroTarjeta :string;
    fechaExpiracion : Date;
    cvv : string;

   constructor(titular : string, numeroTarjeta : string, fechaExpiracion : Date, cvv :string){
       this.titular= titular;
       this.numeroTarjeta= numeroTarjeta;
       this.fechaExpiracion= fechaExpiracion;
       this.cvv= cvv;
   }
}

export default Card