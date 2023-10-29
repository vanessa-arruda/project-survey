export const Report = ({ formData }) => {

    return (
        <div className="report">
            <div>Name: {formData.name}</div>
            <div>Type of costume: {formData.characterData}</div>
            <div>{formData.characterData === "Zombie" ? `Scary Level: ${formData.scaryLevel}` : ``}{formData.characterData === "Ghost" ? `Head accessory: ${formData.headItem}` : ``}</div>
            <div>Face accesorry: {formData.faceItem}</div>
            <div>Email: {formData.email}</div>
        </div>
    )
}