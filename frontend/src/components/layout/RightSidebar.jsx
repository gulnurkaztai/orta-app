import { useDispatch, useSelector } from 'react-redux'

const RightSidebar = () => {
  const {user} = useSelector((state)=>state.auth)
  console.log(user)
  return (
    <>
                <div className="mx-2 w-3/12 hidden lg:block font-display bg-gray-800 rounded-2xl">
                    <div className="mt-10 px-8">
                        <h1 className=" text-xl font-bold text-gray-700">Avtorlar</h1>
                        <users-list></users-list>
                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-700">Pıkırler</h1>
                        <categories></categories>
                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-700">Jarnama</h1>
                        <recent-post></recent-post>
                    </div>
                </div>
    </>
  )
}
export default RightSidebar