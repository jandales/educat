import Product from '../product/Product'
import Title from '../Base/title'
import Heading from '../Base/heading'
import products from '../../Data/Products'


function Products() {
        return (
            <section data-aos="fade-up" id="products" className="w-full md:w-[1132px] md:h-[526px] md:mx-auto pt-12">

                <Heading text="Our Products" />

                <Title text='Learn without Limits' />

                <div className="flex justify-center gap-14 w-full mt-20 items-center flex-col md:flex-row">

                    {products.map((item,index) => {
                        return (
                            <Product
                                index={index}
                                key={item.name}
                                name={item.name}
                                image={item.image}
                                description={item.description}
                            />
                        )
                    }
                        )
                    }
                </div>
            </section>
        )
    
}

export default Products;

