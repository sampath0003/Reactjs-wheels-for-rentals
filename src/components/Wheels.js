import venue from "../assets/venue.jpg"
import thar from "../assets/thar.jpg"
import duke from "../assets/duke.jpg"
import himalayan from "../assets/himalayan.jpg"
import "./Wheels.css"
const Wheels = () =>
{
    return(
        <div className="Wheels">
            <h1> Vehciles</h1>
            <p> A vehicle will help u to make your trip wonderful.</p>
            <div className="first-des">
                <div className="des-tetx">
                    <h2>
                        Cars
                    </h2>
                    <p>
                    The vehicles which are provided for the rentals are owned by us and we have 
                    full responsibility on the wheels . we are here to provide a car or bike 
                    for a rental purpose only not for a sale , maximum all the vehicles are well
                     maintained and under a best conditioned , we done the insurance for the vehicles 
                     and we got permission from all the sectors and this is fully legal and authorised.
                     We will monitor you every minute and we have some policies and agreement and customer
                      should accept and stand by the rules and regulations .
                      Prices are fixed based on the factors of customer and their requirements                   
                       </p>
                </div>
                <div className="image">
                    <img alt="img" src={venue}/>
                    <img alt="img" src={thar}/>

                </div>
                
            </div >
            <div className="first-des-reverse">
                <div className="des-tetx">
                    <h2>
                        Bikes
                    </h2>
                    <p>
                    All these bike are owned by us and well mainatained and under a good conditioned,
                    if any type of problems occured during the riding plz contact with us and our team will help and guide you
                    how to deal with the problem raised.The payment done on the bike was not reuturnable and payment reciept should be 
                    with you and if any late in submitting wheels u will have to pay an extra charge it will contain some rules
                    don't go over speed on bike and chalans are claimed by bike will be charged on cutomer bill.                 
                       </p>
                </div>
                <div className="image">
                    <img alt="img" src={duke}/>
                    <img alt="img" src={himalayan}/>

                </div>
                
            </div >
        </div>

    )

}
export default Wheels;