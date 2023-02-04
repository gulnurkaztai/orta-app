const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <footer className="footer  bg-gray-700 ">
      <div className=" bg-gray-700 text-white text-center font-display">
        Copyright &copy; {currYear} Gulnur
      </div>
    </footer>
  )
}
export default Footer