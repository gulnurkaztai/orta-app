const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 ">
      <div className="p-1 bg-gray-700 text-white text-center">
        Copyright &copy; {currYear} Gulnur
      </div>
    </footer>
  )
}
export default Footer