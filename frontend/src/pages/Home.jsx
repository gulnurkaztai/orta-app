import LeftSidebar from "../components/layout/LeftSidebar"
import Posts from "../components/layout/Posts"
import RightSidebar from "../components/layout/RightSidebar"

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-200'>
      <RightSidebar/>

      <Posts/> home
      <LeftSidebar/>
    </div>
  )
}
export default Home