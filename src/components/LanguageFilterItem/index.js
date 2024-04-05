// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {each, clickLang, isClick} = props
  const {id, language} = each
  const style = isClick ? 'button' : 'style-button'

  const clickButton = () => {
    clickLang(id)
  }
  return (
    <li className="list-con">
      <button type="button" className={`${style}`} onClick={clickButton}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
