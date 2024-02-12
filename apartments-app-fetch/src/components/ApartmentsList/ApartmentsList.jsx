import axios from "axios"
import { useEffect, useState } from "react"

const ApartmentsList = () => {

    const [apartments, setApartments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadApartments(), [])

    const loadApartments = () => {

        axios
            .get("https://ironbnb-m3.herokuapp.com/apartments")
            .then(response => {
                setApartments(response.data)               // en axios la respuesta del server está en .data
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ApartmentsList">
            <h1>Listado de apartamentos</h1>
            <hr />
            {

                isLoading
                    ?
                    <h1>Cargando...</h1>
                    :
                    apartments.map(apt => {

                        return (
                            <article className="ApartmentCard" key={apt._id}>
                                <img src={apt.img} alt="apartment" />
                                <h3>{apt.title}</h3>
                                <p>Price: {apt.pricePerDay}</p>
                            </article>
                        )
                    })
            }
        </div>
    )
}

export default ApartmentsList