import { useState } from "react";
import "../userComponents.scss";
import { Outlet, Link } from "react-router-dom";
import ActiveButton from "../../needful/activeButton";

function UserHome() {
  const [path, setPath] = useState(document.location.pathname);

  return (
    <div className="user_home">
      <div className="user_home-top">
        <img
          className="user_home-top-img bor-white"
          src="https://i.imgur.com/RCwLEoQm.jpg"
          alt=""
        />
        <div className="user_home-info">
          <div className="user_home-top-names">
            <p className="user_home-top-name tx-white">
              Dilshod Xojimuhammedov
            </p>
            <p className="user_home-top-userName tx-white">@Xojimuhammedov</p>
          </div>

          <div className="user_home-follow">
            <div className="user_home-follow-s">
              <p className="user_home-follow-title tx-white">Obuna:</p>
              <p className="user_home-follow-number tx-white">15</p>
            </div>
            <div className="user_home-follow-s">
              <p className="user_home-follow-title tx-white">Obunachi:</p>
              <p className="user_home-follow-number tx-white">15</p>
            </div>
          </div>

          <p className="user_home-bio tx-white">
            Hi bro 👋{"\n"}
            I'm web devoloper 🌐{"\n"}
            Phone number: 998 95 044 77 24
          </p>
        </div>
      </div>

      <div className="user_home-links">
        <ActiveButton to={"/user"} isActive={path === "/user"}>
          <p className="user_home-links-text">Nashrlar</p>
        </ActiveButton>
        <ActiveButton to={"/user/saved"} isActive={path === "/user/saved"}>
          <p className="user_home-links-text">Saqlanganlar</p>
        </ActiveButton>
        <ActiveButton to={"/user/about"} isActive={path === "/user/about"}>
          <p className="user_home-links-text">Men haqimda</p>
        </ActiveButton>
      </div>
      {/* <Outlet /> */}
      <p  className="bg-black tx-white"> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea molestiae, quae enim eveniet similique? Sequi est, voluptates in, eaque fuga consequuntur obcaecati aperiam delectus et eligendi aut dolores, doloremque error perspiciatis cumque a dolorem rem asperiores. Officia, libero pariatur voluptatum deleniti obcaecati fugiat eaque unde. Officiis rerum numquam incidunt mollitia. Nihil, dicta? Totam, doloribus? Natus corrupti optio facilis quo cum ratione, quis explicabo, distinctio vero officia ab, ut repellat. Laboriosam maxime accusantium alias ipsam consectetur distinctio? Aliquid beatae esse ipsa est doloremque? Magni vero similique tempore ipsam expedita atque inventore. Pariatur velit magnam eveniet optio accusantium consequuntur sed suscipit soluta explicabo doloremque laboriosam nulla ut voluptatum, quidem minima architecto ipsum nam vitae aut. Aperiam quod nihil quo aliquid amet enim temporibus sit, illo, impedit sint fuga excepturi dicta veniam sed omnis nesciunt! Est adipisci quae sint dicta cumque consectetur. Deserunt perferendis, quaerat eveniet natus possimus fuga vel explicabo voluptas, earum id quam adipisci libero quis est asperiores pariatur nostrum doloribus! Est quisquam mollitia ab ipsum repellat corporis minus, rem tempora, consectetur molestias nobis incidunt, dolor nam error ipsa doloremque ex neque quasi? Quae vero qui ex corrupti earum nihil numquam alias ratione maiores laboriosam quos, voluptate molestias nemo aliquid dolorem placeat eligendi eum beatae. Neque sit nulla labore excepturi facilis reiciendis facere optio vitae nobis esse natus debitis impedit iure, molestiae quod! Tempora soluta nulla totam, temporibus eum aliquid velit corporis sed! Enim amet magni error harum nulla consectetur ullam facilis illo, eaque numquam sequi aspernatur quae inventore porro recusandae illum molestiae earum omnis nemo totam dolorem quam iure vitae! Obcaecati, est quaerat beatae dolorum id aspernatur fugit harum perspiciatis suscipit in totam repellendus nostrum, nulla ipsum? Neque nihil quam quod repudiandae ducimus molestiae aliquam non hic praesentium voluptatum saepe ut nostrum omnis quae, rerum quasi at vero veritatis temporibus dolorum! Perspiciatis at consequuntur minus inventore sapiente, incidunt itaque eligendi veniam mollitia libero pariatur numquam! Deserunt ad, accusamus, rem nam nemo optio illum porro aliquid veniam repudiandae veritatis a eveniet aliquam excepturi suscipit numquam modi autem atque nostrum debitis hic totam omnis dolorem! Magni est a nostrum minus? Laboriosam veritatis sint a quae, vitae, esse quam deserunt eaque qui excepturi accusantium totam soluta cum. Consectetur explicabo enim aspernatur aut ex, repellendus quas laboriosam aliquid eum architecto quae reiciendis tempore fugiat non, possimus aperiam, at quasi impedit. Id, sint dignissimos doloribus molestiae ratione sed necessitatibus laboriosam vero labore fugiat nam reiciendis pariatur repellat neque? Iusto rem excepturi error fuga nam ipsa voluptas sapiente quod in iure pariatur quis numquam magnam reprehenderit culpa, omnis laborum ipsam. Aut, debitis! Commodi qui unde et ab, possimus placeat esse minus molestias odit sapiente ad mollitia quaerat doloremque dicta error magnam in ipsam similique quisquam repudiandae. Reprehenderit, beatae mollitia velit officia itaque repellat? Libero exercitationem obcaecati ad iure nam ipsum, dolorum reprehenderit nihil numquam cupiditate et officiis alias omnis dicta? Quidem nesciunt pariatur tempora aut odit asperiores voluptatem reprehenderit, cupiditate quasi optio nostrum minima? Quis nostrum esse velit at eaque libero, blanditiis adipisci error! Quae officia illo aperiam recusandae laborum, amet debitis. Dolorum velit magnam impedit! Iste vel eos cumque, natus ad animi quis quo minima, culpa earum nihil unde quaerat quibusdam tenetur. At nostrum rerum asperiores accusantium dicta unde dolore ratione. Accusamus obcaecati id dicta sequi sed quibusdam iste nisi magni! Qui molestias, aliquid fugiat, corporis ipsam, facilis minus veritatis est eos voluptate assumenda. Delectus, ducimus nemo? Totam ipsa excepturi qui optio suscipit aperiam sint, nemo aspernatur, quos dolore accusantium tempora earum quam id libero veritatis culpa voluptates voluptatum adipisci quisquam iure, magnam mollitia quidem! Velit obcaecati cumque libero veniam eum, harum rem nostrum praesentium autem id? Dicta adipisci ea facere inventore dolor consequatur molestias illum quod consectetur illo fugit iusto nobis, dignissimos repellat non nemo deserunt similique! Odit in dignissimos porro minus? Nesciunt maxime necessitatibus, perspiciatis labore tempora quas quam est aliquid asperiores eveniet neque dignissimos suscipit. Illo doloribus, laboriosam et numquam obcaecati tempora, quam nostrum voluptate molestias aspernatur fugiat repellat consequuntur, optio corporis impedit aliquam repudiandae sint. Totam atque ipsam nihil consectetur explicabo similique? Voluptatibus natus dicta tempore aut cumque magni saepe eligendi mollitia temporibus quam autem reprehenderit, nobis explicabo delectus libero et possimus quos nam ex ea modi, repudiandae voluptatem ullam. Nemo, possimus in! Aliquam impedit ea excepturi delectus odio exercitationem consequuntur alias doloremque quisquam voluptas, neque, ut unde iusto, nesciunt quasi est eaque eveniet autem veritatis sequi quos possimus. Quo tenetur ipsum iste blanditiis eaque mollitia error ut repellendus harum quod beatae quisquam aperiam vel libero tempora assumenda, corrupti recusandae soluta illo? Deserunt, quam. Dolores officiis suscipit quibusdam voluptatum tenetur laudantium corporis magni facilis aliquid cupiditate fuga veniam nesciunt quaerat dignissimos, culpa eveniet quam laborum, sint saepe numquam? Iste fugit amet inventore neque? Qui, velit! Fugiat laboriosam eveniet obcaecati iste suscipit dignissimos nostrum temporibus placeat magni natus sint maxime perferendis sunt quaerat, illum itaque aperiam distinctio. Modi dolorem numquam consequuntur eius doloremque incidunt illo, dolore temporibus tenetur expedita nulla ratione dignissimos sunt aspernatur et id minus vitae eligendi, nostrum repellat vero. Velit ex mollitia accusamus quos qui non corrupti sint incidunt. Perferendis aliquid quod minima, hic libero officia possimus doloremque ducimus modi maxime quae neque quas, maiores veritatis similique sit qui quisquam quia excepturi consequatur esse nemo blanditiis? Repellendus vitae labore aliquam aut enim qui vero deleniti culpa blanditiis, eveniet nulla earum hic soluta iusto sed error incidunt in, nisi impedit? Quia ea consectetur similique itaque quos optio eos sit dolor recusandae, qui earum, quod voluptatem rem omnis porro tempore fugit consequuntur nam rerum. Accusantium doloremque vero praesentium consequatur quos labore ipsa quasi accusamus repudiandae dolorum inventore reiciendis blanditiis architecto sunt soluta dolores aperiam cumque, dolorem mollitia? Dolor vero totam sint itaque reiciendis labore neque a consequuntur cum repudiandae repellendus corrupti commodi culpa, earum quas? Fugiat nihil possimus incidunt numquam nemo? Aliquid repudiandae nobis ex, itaque eos quaerat, aliquam eaque cupiditate explicabo, qui voluptas iure sed odit dolor sequi doloribus consequuntur voluptates debitis magnam aut sit totam consectetur beatae? Reprehenderit voluptas odio mollitia laborum optio adipisci officia ut incidunt? Doloribus!</p>
    </div>
  );
}

export default UserHome;
