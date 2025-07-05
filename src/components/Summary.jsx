export default function Summary(props) {
    const { lifeExpectancy, birthDate } = props
    const finalYear = parseInt(birthDate.split('-')[0]) + lifeExpectancy
    return (

        <section id="summary">
            <div>
                <p className="text-gradient">
                    <i className="fa-solid fa-heart-crack" /> You&apos;ll probably die in the year <strong>{finalYear}</strong> at the age of <strong>{lifeExpectancy}</strong>.
                </p>
            </div>
            <h4>Live as if you were to die tomorrow. Learn as if you were to live forever<br /></h4>
            <h4>Mahatma Gandhi</h4>
            

        </section>
    )
}