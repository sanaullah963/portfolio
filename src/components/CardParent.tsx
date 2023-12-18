interface prop{
  children : React.ReactNode | React.ReactNode[];
  className?: any;
}
function CardParent({children, className}:prop) {
  return (
    <div className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-14`}>{children}</div>
  )
}

export default CardParent