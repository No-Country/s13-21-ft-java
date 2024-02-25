import cardImg from '../../../assets/cardImg.png'
import profilePhoto from '../../../assets/Avatar Style 6.jpg'
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FaSearch } from "react-icons/fa"
import { PiArrowSquareRight } from 'react-icons/pi'

const TABLE_HEAD = ["Entidad", "Monto Permitido", "Estado", ""]
 
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    status: "Habilitado"    
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    status: "Deshabilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    amount: "$14,000",
    status: "Deshabilitado"
  },
]

const VirtualCashierInfo = () => {

    return (
        <div className='w-[85%] mt-6 flex flex-col justify-center items-center gap-6'>
            <section className='flex gap-2 self-start'>
            <Link to='/DashboardUser'><IoIosArrowRoundBack className='text-[40px]' /></Link>
                <figure>
                <img src={profilePhoto} alt='foto de perfil' />
                </figure>
                <div className='flex justify-center items-end'>
                    <p>
                        Hola,
                        <br />
                        Pedrita
                    </p>            
                </div>
            </section>
            <section className='w-full md:w-4/5'>
                <div className="w-full flex flex-row items-center gap-4 m-4">                
                    <input label="Search" type="text" placeholder="Buscar..." className="border p-1"/>
                    <FaSearch className="h-5 w-5"/>
                </div>
                <table className="w-full table-auto text-left">
                        <thead>
                            <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">{head}</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(
                            (
                                {
                                img,
                                name,
                                amount,
                                status
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                
                                return (
                                <tr key={name}>
                                    <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        <img
                                        src={img}
                                        alt={name}
                                        size="md"
                                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 h-10 w-10"
                                        />
                                        <p className="font-bold">{name}</p>
                                    </div>
                                    </td>
                                    <td className={classes}>{amount}</td>
                                    <td className={classes}>
                                    <div className="w-max">
                                        <p 
                                        value={status}
                                        className={
                                            status === "Habilitado"
                                            ? "bg-green-600 rounded p-1 text-white"                   
                                            : "bg-red-600 rounded p-1 text-white"
                                        }>{status}</p>
                                        
                                    </div>
                                    </td>                                    
                                    <td className={classes}>
                                        <div className='bg-white w-full sticky top-full flex opacity-90 has-tooltip'>
                                            <span className='tooltip rounded shadow-lg p-2 bg-gray-100 -mt-12 ml-8'>Seleccionar Cajero Virtual</span>                  
                                            <PiArrowSquareRight className='rounded-full bg-black p-1 h-8 w-8 text-white text-center'/>
                                        </div>
                                    </td>
                                </tr>
                                );
                            },
                            )}
                        </tbody>
                </table>               
            </section>
            <section className='w-full flex gap-3 items-center  bg-gradient-center from-green-500 to-green-950 rounded-lg py-4 px-2 mt-6 '>
                <img src={cardImg} alt='Imagen tarjeta virtual EcopPay' className='rounded-3xl' />
                <p className='text-white font-medium text-lg '>
                Solicita tu tarjeta Prepaga Virtual sin Costo
                </p>
            </section>
        </div>
    )
}
  
export default VirtualCashierInfo