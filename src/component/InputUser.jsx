const InputUser = () => {
    return (
        <>
            <div className="flex flex-col justify-center bg-blue-200 text-center mt-20">
                <h1 className="text-3xl font-semibold">Apa rencanamu hari ini ?</h1>
                <form action="" className="mt-5 flex flex-row justify-center items-center bg-red-200 gap-10">
                    <input type="text" className="border p-2 rounded-lg" placeholder="aku ingin..." autoFocus />
                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Tambah</button>
                </form>
            </div>
        </>
    )
}

export default InputUser