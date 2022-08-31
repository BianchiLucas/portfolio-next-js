type NavbarProps = { isScrolling: boolean }

const navbar = ({ isScrolling }: NavbarProps) => {

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className={`navbar ${isScrolling ? 'scrollable' : ''}`}>
        <div className={`navbar-logo ${isScrolling ? 'visible' : ''}`} onClick={toTop}>Lucas Bianchi</div>
    </nav>
  )
}

export default navbar