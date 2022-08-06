import { useEffect, useRef } from 'react'

export default function PdfViewer(props) {
const viewer = useRef(null)
// const file=props.src

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: props.source,
        },
        viewer.current
      ).then((instance) => {
          const { docViewer } = instance
          // you can now call WebViewer APIs here...
      })
    })
  }, [])
  return (
    <div className='header'>
        <div className='webviewer' ref={viewer} style={{ height: '80vh', padding: '70px 10px'}}></div>
    </div>
  )
}