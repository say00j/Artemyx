
import './StatePage.css'
import keralaImage from './assets/kerala.jpeg'

function StatePage() {
  return (
    <div className="state-page">
      <h1>State Page</h1>

      <img
        src={keralaImage}
        alt="Kerala"
        className="kerala-image"
      />
    </div>
  )
}

export default StatePage

