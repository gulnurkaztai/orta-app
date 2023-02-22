const RightSidebar = () => {
  return (
    <>
                <div class="mx-2 mt-2 w-3/12 hidden lg:block font-display">
                    <div class="mt-10 px-8">
                        <h1 class=" text-xl font-bold text-gray-700">Avtorlar</h1>
                        <users-list></users-list>
                    </div>
                    <div class="mt-5 px-8">
                        <h1 class=" text-xl font-bold text-gray-700">Pıkırler</h1>
                        <categories></categories>
                    </div>
                    <div class="mt-5 px-8">
                        <h1 class=" text-xl font-bold text-gray-700">Jarnama</h1>
                        <recent-post></recent-post>
                    </div>
                </div>
    </>
  )
}
export default RightSidebar