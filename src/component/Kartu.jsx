import { iconPen, iconTrash } from "../assets"
import { AiOutlineEdit, AiOutlineDelete, AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import { useState } from 'react'

const Kartu = () => {
    const [check, setCheck] = useState(false)



    return (
        <>
            <div className=" border border-stone-500 flex items-center justify-between py-2 px-4 rounded-lg bg-white drop-shadow-2xl">
                <button>
                    <AiOutlineBorder fontSize='1.5em' />
                </button>
                <p>Aktivity</p>
                <div className="flex items-center gap-2">
                    <button className="bg-stone-400 p-1 rounded-lg">
                        <AiOutlineEdit color='white' fontSize='1.5em' />
                    </button>
                    <button className="bg-red-500 p-1 rounded-lg">
                        <AiOutlineDelete color="white" fontSize='1.5em' />
                    </button>
                </div>
            </div >
        </>
    )
}

export default Kartu