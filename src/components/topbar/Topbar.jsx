import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarLeft">
          <a href='/' className="logo"> <span>Live</span>Decor
          </a>
        </div>

        <div className="topbarCenter">
            <span className="topbarLinks">Home</span>
            <span className="topbarLinks">About</span>
            <span className="topbarLinks">Features</span>
            <span className="topbarLinks">Contacts</span>
        </div>

    <div className="searchBar">
        <SearchIcon  className='searchIcon'/>
        <input placeholder="Search Products" className="searchinput" />
    </div>



        

    </div>
  )
}

export default Topbar