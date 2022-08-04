
function Frame(props) {
    var srcImage = props.source
    var sourceSet=` ${srcImage} 320w
                    ${srcImage} 480w,
                    ${srcImage} 800w`
    return (
        <img 
            srcSet={sourceSet}
            sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px, 800px"
            id='styled'
            src={srcImage}
            alt={props.description}>
        </img>
    )
}

export default Frame