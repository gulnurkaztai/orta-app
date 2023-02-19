import { useState } from "react"
import { useSelector } from "react-redux"

const Write = () => {
    const {user} = useSelector((state) => state.auth)
    const [article,setArticle] = useState({
        title: '',
        text:''
    })

    const {title, text} = article;

    const onChange = (e) =>{
        setArticle((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit=(e)=>{
        e.preventDefault()
        const newPost = {
            title,
            text
        }
    }


  return (
    <>
    <div className='py-12'>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-gray-200">
                    <article onSubmit={onSubmit}>
                        <div className='font-display mb-4'>
                            <label class="text-l text-gray-600">Taqyryp <span class="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="border-2 border-gray-300 bg-gray-100 p-2 rounded-2xl w-full"
                                id="title"
                                name="title"
                                value={title}
                                onChange={onChange}
                                placeholder="Taqyryp"
                                required
                            />
                        </div>
                        <div className='font-display mb-8'>
                            <label class="text-l text-gray-600">Mätın<span class="text-red-500">*</span></label>
                                <textarea
                                    type="text"
                                    className="border-2 border-gray-300 bg-gray-100 p-2 rounded-2xl w-full"
                                    id="text"
                                    name="text"
                                    value={text}
                                    onChange={onChange}
                                    placeholder="Oqiğañyzben bölısıñız... Basqalardy şabyttandyryñyz"
                                    required
                                />
                        </div>
                        <button className=" bg-green-200 py-2 px-9 font-display text-gray-900  hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">jarialau</button>
                    </article>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
export default Write