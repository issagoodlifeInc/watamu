import map from '../images/map.png';


export default function Travel(props) {

  // const src = require (`../images/${props.imageUrl}`);
  // const src = require (props.imageUrl);

  return(
    <div className="travel--card">
      <div className="travel-img">
        <img src={props.imageUrl} alt="Unsplash Img" />
      </div>
      <div className="travel--content">
        <div className="travel--content_top">
          <img src={map} alt="Map Icon" />
          <h5 className="travel--content_top-location">{props.location}</h5>
          <a href={props.googleMapsUrl} className="travel--content_link">View on Google Maps</a>
        </div>
        <h1 className="travel--title">{props.title}</h1>

        <h4 className="travel-dates">{props.startDate} - {props.endDate}</h4>
        <p className="travel--content-text">
          {props.description}
        </p>
      </div>
    </div>
  )
}
