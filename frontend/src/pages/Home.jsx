import LeftSidebar from "../components/layout/LeftSidebar"
import RightSidebar from "../components/layout/RightSidebar"
import Posts from "./Posts"

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-200'>
      <RightSidebar/>

      <Posts/>
      <LeftSidebar/>
    </div>
  )
}
export default Home