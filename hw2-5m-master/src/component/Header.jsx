import logo from '../img/logo.svg'
import search from '../img/searchExit.svg'
export default function Header() {
  return (
    <header>

    <div className="container links">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <nav>
            <li>Продукция</li>
            <li>Материал</li>
            <li> О нас</li>
            <li>Контакты</li>
            <img src={search} alt="" />
        </nav>
    </div>
    </header>
  )
}
