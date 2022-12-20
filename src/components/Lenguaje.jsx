import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Lenguaje({setLengua}) {
    const handleChange = (val) => setLengua(val);
  return (
    <ToggleButtonGroup type="radio" name="options" size="sm" defaultValue={"eng"} onChange={handleChange}>
    <ToggleButton variant="secondary" id="tbg-radio-1" value={"eng"}>
      Eng <img src="https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/media/flag-usa.svg" alt="usa" className='iconflag' />
    </ToggleButton>
    <ToggleButton variant="secondary" id="tbg-radio-2" value={"esp"}>
      Esp <img src="https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/media/flag-spain.svg" alt="spain" className='iconflag' />
    </ToggleButton>
  </ToggleButtonGroup>
  );
}



export default Lenguaje;