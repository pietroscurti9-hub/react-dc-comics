import comics from '../assets/comics.js'



export default function CardSection() {

    console.log(comics);



    return (

        <section className='card-section'>
            <div className="card-s-container">

                {comics.map((comic) => {

                    return (
                        <figure>
                            <img src={comic.thumb} alt="" className='card-section-img'/>
                            <figcaption className= "c-white">
                                {comic.title}
                            </figcaption>
                        </figure>
                    )
                  }
                 )
                }


                

            </div>
        </section>








               
















    )
}