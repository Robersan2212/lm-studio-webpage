import { FC } from 'react';
import { ShoppingCart } from "lucide-react";

export const Header: FC = () => {
  return (
    <header className="py-6 flex justify-between items-center text-white"> 
    <nav> 
      <ul className="flex space-x-6"> 
        <li><a href="#appointments" className="hover:underline text-">Appointments</a></li> 
        <li><a href="#shop" className="hover:underline">Shop</a></li> 
      </ul> 
    </nav> 
    <h1 className="text-4xl font-bold text-blue-500">LM Studio</h1> 
    <div> <ShoppingCart className="h-6 w-6" /> 
    </div> 
    </header> 
  );
};

export default Header;