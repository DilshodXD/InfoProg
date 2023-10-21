import { Link } from "react-router-dom";
import "../homeComponents.scss";

function Links({ link, img, title, text }) {
  return (
    <Link to={link} className="home-link-box bor-white rad-15">
      <img className="home-link-img" src={img} />
      <div className="home-link-inBox">
        <p className="home-link-title tx-white">{title}</p>
        <p className="home-link-text tx-white">{text}</p>
      </div>
    </Link>
  );
}

function HomeLink() {
  return (
    <div className="home-link d-flex jcc">
      <Links
        link={"/"}
        img={
          "https://cdn.dribbble.com/userupload/2795150/file/original-80ae8932a8ffd19542821d540ac231d2.jpg?resize=752x"
        }
        text={
          "Siz bu yerda turli hil dasturlashga oid malumotlarni o’qib o’rganishingiz bilim olishingiz mumkun."
        }
        title={"O’qish"}
      />
      <Links
        link={"/"}
        img={
          "https://as1.ftcdn.net/v2/jpg/03/00/38/90/1000_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        }
        text={
          "Siz ushbu youtube kanalda turli hil dasturlashga oid videolarni ko’rishingiz va o’rganishingiz mumkun."
        }
        title={"Video darslar"}
      />
      <Links
        link={"/"}
        img={
          "https://static.clubs.nfl.com/image/private/f_auto/ravens/anw0lbvzibgvzpjcgjhi"
        }
        text={
          "Bu sahifadan bizning ijtimoiy tarmoqlardagi sahifalamizni topishingiz mumkun."
        }
        title={"Bog’lanish"}
      />
    </div>
  );
}

export default HomeLink;
