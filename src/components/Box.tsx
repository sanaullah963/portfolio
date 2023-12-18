interface prop{
  children? : React.ReactNode | React.ReactNode[];
  className? : any;
}

function Box({children, className}:prop) {
  return (
    <div className={`${className}  px-4 md:px-7  py-10`}>
      {children}
    </div>
  )
}

export default Box