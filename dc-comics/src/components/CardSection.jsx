import comics from '../assets/comics.js'
import Card from './Card.jsx'


export default function CardSection() {

    return (

        <section className='card-section'>
            <div className="card-s-container">

                {comics.map((comic) => {
                    return (
                        <Card
                            comic={comic}
                        />
                    )
                  })}

            </div>
        </section>

    )
}