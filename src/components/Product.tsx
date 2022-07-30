import { useState } from "react";
import { IProduct } from "../models";

// Не забыть прописать ProductProps в 'props' / Облегчает работу с кодом
// Это помогает описать типы данных
interface ProductProps {
    product: IProduct
}

// Экспортирование функции / props - это объект, который содержит в себе / все параметры, которые мы передаем в 'product' / 'props' можно переименовать в 'product' для удобства
export function Product({ product }: ProductProps) {
    // Хук состояния
    const [details, setDetails] = useState(false)
    /* Наличие состояние и присвоение классов */
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    /* Применяемый массив классов-стилей */
    const btnClasses = ['py-2 px-4 border', btnBgClassName] // Сначала статические стили, далее динамический массив стилей

    return (
        /* Весь контент */
        <div
            className="border py-2 px-4 flex flex-col items-center mb-2"
        >
            {/* Картинка */}
            <img src={product.image} className="w-1/6" alt={product.title} />
            {/* Заголовок */}
            <p>{product.title}</p>
            {/* Цена */}
            <span className="font-bold">{product.price}</span>

            {/* Кнопка */}
            <button
                className={btnClasses.join(" ")}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>

            {/* Так выглядит оператор if в TS */}
            {details && <div>
                {/* Описание */}
                <p>{product.description}</p>
                {/* Рейтинг */}
                <p>Rate:
                    {/* Использование inline стилей {{styleName:..}} */}
                    <span style={{ fontWeight: 'bold' }}
                    >{product.rating.rate}</span>
                </p>
            </div>}

        </div>
    )
}