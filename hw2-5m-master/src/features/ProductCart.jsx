import { Button } from "antd";

// пропсы - это элементы что передаются от родительского компонента к дочернему компоненту (ссылки, текста, функции, обекты, массивы и т.д.)
export default function ProductCard({ image, title, count, description, lon }) {
//   const { image, title, count, description, lon } = props
  return (
    <div className='item'>
        <div className='item-image'>
            <img src={image} alt="product1" />
        </div>
        <h3>{title}</h3>
        <p className='item-count'>Тираж: от {count} штук</p>
        <p className='item-description'>{description}</p>
        <p>{lon}</p>
        <Button style={{color: '#7875FE', padding: 0}} color="#7875FE" variant="text">
            Подробнее
        </Button>
    </div>
  )
}
