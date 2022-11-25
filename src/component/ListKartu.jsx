import Kartu from "./Kartu"

const ListKartu = () => {
    return (
        <>
            <div className="mt-5 flex flex-col gap-2 justify-center w-2/5 mx-auto">
                <Kartu />
                <Kartu />
            </div>
        </>
    )
}

export default ListKartu