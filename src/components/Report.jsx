export const Report = ({ formData }) => {

    const reportUrl = "https://media.giphy.com/media/QuxqWk7m9ffxyfoa0a/giphy.gif";

    return (
        <div className="report">
            <div className="questions">Thank you for Submiting! Below is the details of your costume!</div>
            <p className="questions">I hope you will have tons of fun with it!</p>
            <div className="report-container">
                <div><b>Name:</b> {formData.name}</div>
                <div><b>Type of costume:</b> {formData.characterData}</div>
                <div>{formData.characterData === "Zombie" ? (
                        <><b>Scary Level:</b> {formData.scaryLevel}</>
                    ) : ``
                    } {formData.characterData === "Ghost" ? (
                        <><b>Head accessory: </b> {formData.headItem}</>
                    ) : ``}</div>
                <div>
                <b>Face accessory:</b> {formData.faceItem.join(", ")}
                </div>

                <div><b>Email:</b> {formData.email}</div>
            </div>

            <div className="submit-img-container">
                <img src={reportUrl} className="submit-img"/>
            </div>
        </div>
    )
}