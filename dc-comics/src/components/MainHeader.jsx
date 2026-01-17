import Logo from "../img/dc-logo.png";

export default function MainHeader() {
    return (
        <div>

            <header class="header">

                <div>
                    <img src={Logo} alt="" class="header-logo" />
                </div>


                <div class="h-list-container">
                    <ul class="header-ul">
                        <li class= "header-li"><a href="#"></a>CHARACTERS</li>
                        <li class= "header-li"><a href="#"></a>COMICS</li>
                        <li class= "header-li"><a href="#"></a>MOVIES</li>
                        <li class= "header-li"><a href="#"></a>TV</li>
                        <li class= "header-li"><a href="#"></a>GAMES</li>
                        <li class= "header-li"><a href="#"></a>COLLECTIBLES</li>
                        <li class= "header-li"><a href="#"></a>VIDEOS</li>
                        <li class= "header-li"><a href="#"></a>FANS</li>
                        <li class= "header-li"><a href="#"></a>NEWS</li>
                        <li class= "header-li"><a href="#"></a>SHOP</li>
                    </ul>
                </div>


            </header>


        </div>
    )
}
