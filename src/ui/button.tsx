interface ButtonContactProps {
  name: string;  
}
export default function ButtonContact({ name }: ButtonContactProps) {
  return (
    <button className="w-full md:w-auto inline-flex items-center justify-center text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
      {name} 
    </button>
  );
}
