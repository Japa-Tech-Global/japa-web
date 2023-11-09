//@ts-nocheck

const Price = ({price}) => {
  return (
    <div>
        <div className="flex flex-col">
            <div className="flex">
                <p>Price:</p>
                <h2 className="mb-4 pl-4 font-bold text-2xl">#{price}</h2>
            </div>
            <div className="flex flex-col">
                <p>Written to Fit the preferred Job</p>
                <p>Stand out among Recuiters</p>
                <p>Keyword Optimization</p>
                <p>ATS Scanning</p>
            </div>
        </div>
    </div>
  )
}

export default Price;