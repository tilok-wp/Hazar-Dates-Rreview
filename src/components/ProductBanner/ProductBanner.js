import React from 'react';
import productImage from './../../images/Hajar-dates.jpg'

const ProductBanner = () => {
    return (
        <section className='md:grid grid-cols-2'>
            <div>
                <img src={productImage} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h2>Heading text</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum fugiat ducimus maiores perspiciatis ullam vero, nulla sint provident beatae alias ipsa! Obcaecati reprehenderit quod, ullam doloremque eum, earum tempore mollitia quis quibusdam architecto eaque dolores quas! Rem impedit incidunt neque omnis dicta, eius molestiae eos molestias, dolorem vel fuga.</p>
                <button>More info</button>
            </div>
        </section>
    );
};

export default ProductBanner;