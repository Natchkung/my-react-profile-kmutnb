import {useEffect,React} from 'react'
import './about.css'
import Carousel from "./Carousel";
import { countries } from "./Data";
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  useEffect(() =>{
    VanillaTilt.init(document.querySelectorAll(".content_photo_me"),{
      max: 10,
      speed: 20,
      glare: true,
      'max-glare': 0.10
    })
  })

  return (
    <section id="about">
      <div className="container_about">
        <div className="container_photo_me">
        <div className="content_photo_me">
            <Carousel images={countries} />
          </div>
        </div>
        <div className="detail_me">
        <h5 className='mt-4 text-center font-medium text-slate-500'>INTRODUCTION</h5>
            <h1 className='text-center'>ABOUT ME</h1>
          <div className="main-detail_me">
          <h5 className='mt-4 text-center font-medium text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam minus magni placeat voluptate dolorum nobis, perferendis aperiam rem in modi magnam ratione dolores saepe velit voluptatum porro alias iusto maiores. Quos laudantium sint aperiam natus alias vel quod iusto, in cumque error ipsam a iure maiores magni tempora officia libero dicta totam laborum. Deserunt eaque totam sapiente iusto nulla perspiciatis inventore saepe a ratione aut, dolorum reiciendis ea voluptatem facilis nihil, adipisci quo dolorem iure dolores tempora harum id! Quasi nesciunt rem nemo, itaque consequatur, pariatur consectetur placeat molestias tempora sit dolores eveniet illum maxime tempore odio quisquam labore incidunt neque inventore debitis dolorem molestiae! Quae odio, vel aliquid vitae quos illo quisquam cum placeat pariatur veniam eligendi libero mollitia culpa! Sint nesciunt impedit ea odio exercitationem rerum placeat, ipsa pariatur magni dignissimos dolore? Eos id tempore perspiciatis quas ipsum alias saepe porro praesentium facere magni voluptatibus sequi, labore error suscipit earum molestias dignissimos nostrum. Earum odio deserunt saepe quia sint dicta sapiente excepturi reprehenderit atque ut quos dignissimos, nesciunt et harum sit optio perferendis dolor eaque sunt doloribus facilis error commodi architecto. Exercitationem, assumenda nesciunt. Unde explicabo debitis, dolore facere distinctio illum tenetur ad sint adipisci! Nostrum laudantium quas debitis vitae adipisci optio animi aut, quibusdam modi illum earum nam eum, fuga eligendi repellendus voluptatum cum iusto quasi autem commodi et. Rerum amet est facere, voluptatem id reiciendis vel praesentium tempora quo inventore fugiat nam consequuntur! Officia, ratione neque. Porro quos quam veniam non iusto sed impedit dignissimos, laborum accusamus repellendus perferendis necessitatibus animi ullam natus quaerat officia nemo fuga deleniti, aliquid recusandae. Quaerat dolor unde atque vel qui non dolorem temporibus repudiandae modi enim illum beatae repellat impedit sunt ullam tempora eum maxime ut, quis delectus eveniet cumque error. Mollitia nulla, quam quasi dolorem, maiores rerum magnam, quas autem recusandae necessitatibus suscipit! Eveniet debitis mollitia consequuntur architecto nostrum quidem corporis dolorem, iure voluptas veritatis. Odit, atque reiciendis? Vel commodi quam assumenda nostrum magnam maxime ipsum nihil id, recusandae vero nisi cum consectetur! Reprehenderit voluptates eaque explicabo molestiae adipisci, porro dignissimos dicta consequatur! Sapiente, deserunt! Hic, at! Rem distinctio architecto, qui dicta amet tempore ullam explicabo earum ex inventore consequatur ipsum neque dolorem aliquam eos excepturi iusto eius quo quaerat animi modi? Animi ea, unde hic natus quo quod odit eos ipsam vel quis? Deserunt minus vitae suscipit temporibus quaerat repellendus incidunt officia soluta, porro et maxime expedita?</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About