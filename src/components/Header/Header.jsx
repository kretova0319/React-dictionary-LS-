import { NavLink } from "react-router-dom";
import style from "./header.module.css";
// import "./header.css";

function Header() {
  return (
    <header className={style.container__header}>
      <section className={style.wrapper__header}>
        <NavLink end to="/table">
          <img
            className={style.logo}
            src="https://sstk.biz/images/studystacklogo.svg"
            alt="логотип сайта"
          ></img>
        </NavLink>

        <div className={style.links}>
          <NavLink
            end
            to="/table"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            Table
          </NavLink>
          <NavLink
            end
            to="/game"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            Game
          </NavLink>
          <NavLink
            end
            to="/tile"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            Tile
          </NavLink>
        </div>
      </section>
    </header>
  );
}

export default Header;
