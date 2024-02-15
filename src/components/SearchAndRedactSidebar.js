export default function SearchAndRedactSidebar({setKeyWord}){
  function handleClick(e){
    const {target} = e
    target.value && setKeyWord(target.value)
  }

  return <div onClick={handleClick} style={{display: "flex", flexDirection:"column", gap: "10px", padding: "10px 10px"}}>
  <input type="button" value={"Flight Director"}/>
  <input type="button" value={"Auto Throttle"}/>
  <input type="button" value={"Auto Pilot"}/>
  <input type="button" value={"Nav Radio 1"}/>
  <input type="button" value={"Course Knob"}/>
  <input type="button" value={"Heading Select"}/>
  <input type="button" value={"Approach Select"}/>
  <input type="button" value={"Indicated Air Speed Select"}/>
  <input type="button" value={"Mach Select"}/>
  <input type="button" value={"Altitude Select"}/>
  <input type="button" value={"Altitude Knob"}/>
  <input type="button" value={"Backcourse Select"}/>
  <input type="button" value={"Yaw Damper Select"}/>
  </div>
}
