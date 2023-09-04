const Title = ({title}) => {
    const inlineHeadingStyles = {
        color: 'darkcyan',
        fontSize: '1.5rem',
        marginTop: '0.5rem'
    }
    return <h2 style={inlineHeadingStyles}>{title}</h2>
}
export default Title