import Logo from "../img/dc-logo.png";

export default function MainHeader() {
    return (
        <div>

            <header className="header">

                <div>
                    <img src={Logo} alt="" className="header-logo" />
                </div>


                <div className="h-list-container">
                    <ul className="header-ul">
                        <li className= "header-li"><a href="#"></a>CHARACTERS</li>
                        <li className= "header-li"><a href="#"></a>COMICS</li>
                        <li className= "header-li"><a href="#"></a>MOVIES</li>
                        <li className= "header-li"><a href="#"></a>TV</li>
                        <li className= "header-li"><a href="#"></a>GAMES</li>
                        <li className= "header-li"><a href="#"></a>COLLECTIBLES</li>
                        <li className= "header-li"><a href="#"></a>VIDEOS</li>
                        <li className= "header-li"><a href="#"></a>FANS</li>
                        <li className= "header-li"><a href="#"></a>NEWS</li>
                        <li className= "header-li"><a href="#"></a>SHOP</li>
                    </ul>
                </div>


            </header>


        </div>
    )
}
