export interface ContactUsProps {
    image:string;
    title:string;
    Info: string;
    subInfo: string;
 }
 

export interface ServiceCardProps{
 title:string;
 backgroundImage:string;
 back?:string;
}



export interface ContactUsProps {
   image:string;
   title:string;
   Info: string;
   subInfo: string;
}


export interface DataProps {
    brand: string;
    name: string;
    range: string;
    type: string;
    steering: string;
    image: string;
    interior: string;
    interiorBack?:string;
    batteryType: string;
    maximumSpeed: string;
    powerConsumption?: string;
    batteryCapacity?: string;
    chargingTime: string[];
    features: string[];
  }

