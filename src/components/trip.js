import "./trip.css";
import TripData from "./TripData";
import innova from "../assets/innova.jpg";
import duke from "../assets/duke.jpg";
import baleno from "../assets/baleno.jpg"
function Trip() {
    return(
    <div className="trip">
        <h1>Hot Wheels</h1>
        <p>
           Rent a dream wheele  you want.
        </p>
        <div className="tripcard">
            <TripData image={innova}
            heading = "Ride on innova"
            text="riding an innova long vehchiles in easy for a family trip to enjoy the movements 
            and it is very comfortable for both the family and driver.It will alwys provides rthe more comfort to all the 
            people in car and easy to ride in heavy traffics."
            />
            <TripData image={duke}
            heading = "Ride on duke"
            text="Riding on a bike in our loved destination is another type of love.Enjoying each and every movement on 
            buike is wonderfull and it is easy for riding in the traffic and a east to go wherever you want and it is
            very good for couples especially ."
            />
            <TripData image={baleno}
            heading = "Ride on baleno"
            text="It is a good 5 seater car , which is easy to drive ina ny type of roads and it is mostly choosen
            by the small family and it contain a good music system and every music lover can enjoy the feel of trip."
            />
        </div>
    </div>
    );
}
export default Trip;