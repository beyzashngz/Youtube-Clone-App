import { Link, useNavigate } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  //navigate kurulumu
  const navigate = useNavigate()

  //form gönderilince
  const handleSubmit = (e) => {
    //sayfanın yenilenmesini engelleme
    e.preventDefault();

    //aratılan metne giriş
    const text = e.target[0].value

    //arama sonuçları sayfasına yönlendirme
    navigate(`/results?search_query=${text}`)

  }
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={'/'} className="flex items-center gap-2">
      <img className="w-[50px]" src="./src/image/yt-logo.png" />
      <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex group border-gray-200 border-solid border-2 rounded-[20px] overflow-hidden">
        <input className="rounded-l-[20px] px-5 py-2 outline-none" type="text" placeholder="Aramak istediğiniz kelimeyi giriniz..."/>
        <button className="bg-gray-200 px-4 text-2xl rounded-r-[20px] hover:bg-gray-300">
        <IoMdSearch />
        </button>
      </form>
      <div className="flex text-xl cursor-pointer gap-4 mr-9">
      <FaBell className="hover:text-gray-400 transition furation-[250ms]"/>
      <IoIosVideocam className="hover:text-gray-400 transition furation-[250ms]"/>
      <MdVideoLibrary className="hover:text-gray-400 transition furation-[250ms]"/>
      </div>
    </header>
  )
}

export default Header
