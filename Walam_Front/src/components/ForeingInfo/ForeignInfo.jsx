export default function ForeignInfo ({ moneda, compra, venta }) {
  return (
    <div className='shadow-inner rounded-2xl mt-6 p-6 flex  items-center border-2 xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md xl:outline-1 xl:border-neutral-700'>
      <h2 className="w-[60%]">
        {moneda}
      </h2>
      <div className="w-[30%]">
        <h3>Compra</h3>
        <p>{compra}</p>
      </div>
      <div>
        <h3>Venta</h3>
        <p>{venta}</p>
      </div>
    </div>
  )
}
