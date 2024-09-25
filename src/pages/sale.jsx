import Header from "../components/Header"
import {Button} from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import './sale.css';
import { useNavigate } from 'react-router-dom';
const Sale = () => {
	let navigate = useNavigate();
	return (
		<div className="flex flex-col min-h-screen">
			<Header/>
			<div className='grid items-center justify-items-center self-center flex-grow'>
				<div className='grid items-center justify-items-center max-w-lg self-center'>
					<img src="/allowance.png" alt="Offer Logo" className="w-[50%] max-w-sm self-end"/>
				</div>
				<div className="grid justify-items-center self-start gap-y-4">
					<h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-white text-center">Keine laufende Rabattaktionen</h2>
					<h3 className="text-gray-600 dark:text-white">Hier werden bald neue Rabattaktionen eingeführt</h3>
					<Button size="lg" className="w-full py-6 text-xl max-w-sm mt-10 group" onClick={() => navigate("/")}><LuArrowLeft className='hover-animated opacity-0 h-0 w-0 group-hover:opacity-100 group-hover:mr-10 group-hover:h-fit group-hover:w-fit'/>Zurück zur Startseite</Button>
				</div>
			</div>
		</div>
	)
}
 
export default Sale