import { Link, useLocation } from "react-router-dom"
import { bottombarLinks } from "@/constans"

const BottomBar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (

          <Link
            to={link.route}
            key={link.label}
            className={`${isActive && 'background-color:yellow rounded-[10px]'} flex-center flex-col  gap-1 p-2 transition`}
          >
            <img src={link.imgURL} alt={link.label}
              className={`${isActive && 'invert-white'}`}
              width={16}
              height={16}
            />
            <p className="tiny-medium text-align-2 background-color:yellow">{link.label}</p>
          </Link>

        )
      })}
    </section>
  )
}

export default BottomBar