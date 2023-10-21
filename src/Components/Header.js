const Header=()=>{
    return(
        <div className="flex justify-between p-2 shadow-lg">
            <div className="flex">
                <img className="h-10 mt-2" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="hamburger"  />
                <img className="h-14 " src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt="youtube logo" />
            </div>
            <div className="flex m-4">
                <input type="text" className="border w-[32rem] border-gray-400 rounded-l-full h-8" placeholder="   Search" />
                <button className="border border-gray-400  bg-gray-400 w-16 rounded-r-full h-8">Search</button>
                {/* <img src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" className="h-10 bg-slate-800" alt="search-logo" /> */}
            </div>
            <div>
                <img className="h-8 m-2 pt-2 pr-10" src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user-logo" />
            </div>
        </div>
    )
}

export default Header