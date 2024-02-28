import MoneyInput from '../../../components/MoneyInput/MoneyInput'
import { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa"
import { IoIosClose } from "react-icons/io"
import { SlOptionsVertical } from "react-icons/sl"
import { TiPlus } from "react-icons/ti"
import { TiMinus } from "react-icons/ti"

const TABLE_HEAD = ["Entidad", "Monto", "Estado", ""]
 
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Mercadopago",
    status: "Habilitado"    
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "PersonalPay",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "AstroPay",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "ApplePay",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Ualá",
    status: "Deshabilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "GoogleWallet",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "NaranjaX",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "PayPall",
    status: "Habilitado"
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "NuBank",
    status: "Habilitado"
  },
]

const VirtualCashierInfo = () => { 
    const [searchText, setSearchText] = useState('');
    const [filteredRows, setFilteredRows] = useState(TABLE_ROWS);  
   
    const filterRows = (text) => {
        const filtered = TABLE_ROWS.filter(row =>
            row.name.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredRows(filtered)
    }  
    
    useEffect(() => {
        filterRows(searchText)
    }, [searchText])

    //Logica para deposito y extraccion de dinero
    const handleClick = () => {
        alert('Transaccion realizada')
    }

    return (
        <div className='w-[85%] max-w-lg mt-6 flex flex-col justify-center items-center gap-6 p-2'>
            <section className='flex gap-2 w-full justify-between items-center'>
                <h2 className='text-3xl font-semibold'>Depósitos y Extracciones</h2>
                <button className='rounded-full w-6 h-6 bg-gray-300 p-1'><SlOptionsVertical /></button>            
            </section>
            <section className='w-full h-4/5 overflow-y-auto'>
                <div className="w-full flex flex-row items-center my-4">                
                    <input label="Search" type="text" placeholder="Buscar" className="border pl-2 p-1 w-full rounded-lg" value={searchText}
                onChange={(e) => setSearchText(e.target.value)}/>                    
                </div>
                <table className="w-full table-auto">                        
                        <thead>
                            <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head}  className="bg-[#F8F8F8] px-2 py-2">{head}</th>
                            ))}
                            </tr>
                        </thead>                        
                        <tbody>
                            {filteredRows.map(
                            (
                                {
                                img,
                                name,
                                status
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                ? "p-2"
                                : "p-2 border-b border-blue-gray-50";
                
                                return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <div className="flex flex-col sm:flex-row items-center gap-3">
                                            <img
                                            src={img}
                                            alt={name}
                                            size="md"
                                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 h-10 w-10"
                                            />
                                            <p className="font-bold">{name}</p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                    {status === "Habilitado"                                        
                                        ?  <MoneyInput/>
                                        : ''
                                    } 
                                    </td>
                                    <td className={classes}>                                    
                                        {status === "Habilitado"
                                        ? <FaCheck className="p-2.5 bg-gradient-to-b from-green-500 to-lime-400 rounded text-white text-xs w-8 h-8"/>                   
                                        : <IoIosClose className="p-1 bg-[#EF8304] rounded text-white w-8 h-8"/>} 
                                    </td>
                                    <td className={classes}>
                                        <div className={status === "Habilitado"
                                                ?'flex flex-col gap-2 w-fit'
                                                :'hidden'                                            
                                        }>
                                            <button className='flex gap-2' onClick={handleClick}>          
                                                <TiPlus className='rounded-full bg-black p-1 h-6 w-6 text-white text-center'/> Depositar
                                            </button> 
                                            <button className='flex gap-2' onClick={handleClick}> 
                                                <TiMinus className='rounded-full bg-black p-1 h-6 w-6 text-white text-center'/> Extraer
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                );
                            },
                            )}
                        </tbody>
                </table>               
            </section>           
        </div>
    )
}
  
export default VirtualCashierInfo