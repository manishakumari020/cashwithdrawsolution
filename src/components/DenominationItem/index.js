import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenominationButton = () => {
    updateBalance(value)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenominationButton}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
