// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemInfo} = props
  const {appName, imageUrl} = appItemInfo

  return (
    <li className="app-item">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
