type prop = {
headding : any;
className? : any;
}

function BoxHeadding({headding, className}:prop) {
  return (
    <h2 className={`${className} text-3xl font-semibold capitalize mb-4`}>{headding}</h2>
  )
}

export default BoxHeadding