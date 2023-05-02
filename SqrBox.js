const SqrBox = ({colorValue, hexvalue, isDark}) => {
  return (
    <section
        className='sqr-box'
        style={{
            backgroundColor: colorValue,
            color: isDark ? "#000" : "#FFF"
        }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexvalue ? hexvalue : null}</p>
    </section>
  )
}

SqrBox.defaultProps = {
    colorValue: "empty color value"
}
export default SqrBox