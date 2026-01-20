export default function Card({ comic }) {
    return ( 
        <figure>
            <img src={comic.thumb} alt="" className='card-section-img'/>
            <figcaption className= "c-white">
                {comic.title}
            </figcaption>
        </figure>
        
    )
}