import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


//use can use draft.js here for text editor or any new text editor library
export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-full pt-8">
                    <textarea onChange={(e) => {
                        setTitle(e.target.value)
                    }} id="message"  className="block p-2 w-full text-sm text-gray-900
                        bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500" placeholder="Title">
                    </textarea>
                    <TextEditor onChange={(e)=> {
                        setDescription(e.target.value)
                    }} />

                    <button onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content: description
                        }, {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`)
                    }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm 
                    font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4
                        focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>     
            </div>
            </div>
}

const TextEditor =({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void} ) => {
  return  <div className="mt-2">

   <div className="w-full mb-4">
       <div className="flex items-center justify-between border">
        <div className="mt-4 my-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Publish post</label>
            <textarea onChange={onChange} id="editor" rows={8} className="mt-2 focus:outline-none 
                 block w-full px-0 text-sm
                text-gray-800 bg-white border-0 pl-2" 
                placeholder="Write your blog here..." required ></textarea>
        </div>
        </div>          
   </div>
</div>

}