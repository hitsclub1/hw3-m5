import banner from '../img/Banner.png'

export default function Banner() {
  return (
   <section className='container banner'>
    <div className='description'>
        <h1>Простые вещи. Из бумаги</h1>
        <p>Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </p>
        <button>Каталог</button>
    </div>
    <div>
        <img src={banner} alt="banner" />
    </div>
   </section>
  )
}