const LeftSidebar = () => {
  return (
    <> 
    {/* needs to become a hamburger menu in the logo */}
                <div className="mx-2 mt-2 w-3/12 hidden lg:block font-display">
                    <div className="mt-10 px-8">
                        <h1 className=" text-xl font-bold text-gray-400 hover:text-gray-100">Jazbalar</h1>
                        <users-list></users-list>
                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-400 hover:text-gray-100">Pıkırler</h1>
                        <categories></categories>
                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-400 hover:text-gray-100">Jarnama</h1>
                        <recent-post></recent-post>
                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-400 hover:text-gray-100">Jūmys</h1>
                        <recent-post></recent-post>
                    </div>
                </div>

    </>
  )
}
export default LeftSidebar