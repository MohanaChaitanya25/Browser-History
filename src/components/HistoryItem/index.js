import './index.css'

const HistoryItem = props => {
  const {historyItem, onDelete} = props

  const {id, domainUrl, title, logoUrl, timeAccessed} = historyItem

  const onDeleteHistoryItem = () => {
    onDelete(id)
  }

  return (
    <li className="history-item">
      <p className="history-item-time">{timeAccessed}</p>
      <div className="history-item-container">
        <div className="history-item-name-container">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <div className="history-item-name">
            <p className="history-item-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-btn"
          onClick={onDeleteHistoryItem}
          type="button"
          testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
