type NavbarProps = { isScrolling: boolean }

const navbar = ({ isScrolling }: NavbarProps) => {
  return (
    <nav className={`navbar ${isScrolling ? 'scrollable' : ''}`}>
        <div className='navbar-logo'>Lucas Bianchi</div>
    </nav>
  )
}

export default navbar