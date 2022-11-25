const InputUser = () => {
    return (
        <>
            <div className="flex flex-col justify-center text-center mt-20">
                <h1 className="text-3xl font-semibold">Apa rencanamu hari ini ?</h1>
                <form action="" className="mt-5 flex flex-row justify-center items-center gap-4">
                    <input type="text" className="w-1/4 border border-stone-500 p-2 rounded-lg" placeholder="aku ingin..." autoFocus />
                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Tambah</button>
                </form>
            </div>
        </>
    )
}

export default InputUser