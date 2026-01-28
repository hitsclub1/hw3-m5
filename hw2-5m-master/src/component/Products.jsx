import ProductCart from '../features/ProductCart';
import product1 from '../img/product1.png';
import product2 from '../img/product2.png';
import product3 from '../img/product3.png';
import product4 from '../img/pruduct4.png'
import { Button } from 'antd';

export default function Products() {
  return (
    <section className='products container'>
        <ProductCart
            image={product3} 
            title={"Упаковка"} 
            count={50} 
            description={"Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ."}/>
        <ProductCart 
            image={product1} 
            title={"Пакеты"} 
            count={200} 
            description={"С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн."}
        />
        <ProductCart
            image={product4} 
            title={"Кейсы"} 
            count={30} 
            description={"Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."}
        />
        <ProductCart
            image={product2} 
            title={"Другие изделия "} 
            count={100} 
            description={"Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."}
        />
    </section>
  )
}
