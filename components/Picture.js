/*      Picture like place for some image 
 *    you will need to load this on all
 *    pages manualy passing the
 *    path of the image in source
 *    property 
 */
export default function Picture(props) {

    return (
        <img 
            id='unstyled'
            src={props.source}
            alt={props.description}>
        </img>
    )
}
