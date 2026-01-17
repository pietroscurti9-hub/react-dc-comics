import CDigital from "../img/buy-comics-digital-comics.png"
import CMerchandise from "../img/buy-comics-merchandise.png"
import CShopLocator from "../img/buy-comics-shop-locator.png"
import CSubscription from "../img/subscription.png"
import DcVisa from "../img/buy-dc-power-visa.svg"



export default function BlueSection () {
    return(

        <section class="blue-section">

            <div class="b-s-container">
                
                    <figure className="card-container">
                        <img src={CDigital} alt="" className="img-card" />
                        <figcaption className="figcaption-size">
                            <a href="" className="c-white">DIGITAL COMICS</a>
                        </figcaption>
                    </figure>



                    <figure className="card-container">
                        <img src={CMerchandise} alt="" className="img-card" />
                        <figcaption className="figcaption-size">
                            <a href="" className="c-white">DC MERCHANDISE </a>
                        </figcaption>
                    </figure>


                    <figure className="card-container">
                        <img src={CSubscription} alt="" className="img-card" />
                        <figcaption className="figcaption-size">
                            <a href="" className="c-white">SUBSCRIPTION</a>
                        </figcaption>
                    </figure>


                    <figure className="card-container">
                        <img src={CShopLocator} alt="" className="img-card" />
                        <figcaption className="figcaption-size">
                            <a href="" className="c-white">COMIC SHOP LOCATOR</a>
                        </figcaption>
                    </figure>

                            
                    <figure className="card-container">
                        <img src={DcVisa} alt="" className="img-card" />
                        <figcaption className="figcaption-size">
                            <a href="" className="c-white">DC POWER VISA</a>
                        </figcaption>
                    </figure>
            </div>








                


        </section>

    )

}