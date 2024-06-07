// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemInfo, clickTabItem, isActive} = props
  const {displayText, tabId} = tabItemInfo

  const isActiveClass = isActive ? 'active' : ''

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="ta-item">
      <button
        type="submit"
        className={`ta-item-btn ${isActiveClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
