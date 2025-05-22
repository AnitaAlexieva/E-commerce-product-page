export default function Navigation() {
    return(
       <nav>
        <ul className="pages">
          <li className="logo"><img src="\assets\images\logo.svg" alt="logo" /></li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="profile">
          <li><img src="\assets\images\icon-cart.svg" alt="basket" /></li>
          <li><img className="avatar" src="\assets\images\image-avatar.png" alt="person-photo" /></li>
        </ul>
      </nav>
    )
}