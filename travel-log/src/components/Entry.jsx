
export default function Entry(props){
    
    return (
        <div className="entry">
            <img 
                className="entry-pic" 
                src={props.img.src} 
                alt={props.img.alt} 
            />
            <div className="entry-info">
                <div>
                    <img 
                        className= 'map-pin' 
                        src="src/assets/marker.png" 
                        alt="map pin icon" 
                    />
                    <span className="entry-country">{props.country}</span>
                    <a href={props.mapLink}> View on Google Maps</a>
                </div>
                <h2 className="entry-location">{props.location}</h2>
                <h3 className="entry-dates">{props.dates}</h3>
                <p className="entry-text">{props.description}</p>
            </div>
        </div>
    )
}