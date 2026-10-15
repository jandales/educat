import Product from '../product/Product'
import Title from '../Base/title'
import Heading from '../Base/heading'
import products from '../../Data/Products'
import Container from '../Container'

function Products() {
    return (
            <Container>
                <div data-aos="fade-up" id="products" className="w-full pt-12 lg:mx-auto">

                    <Heading text="Our Products" />

                    <Title text='Learn without Limits' />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14 w-full mt-12 md:mt-20">
                        {products.map((item, index) => {
                            return (
                                <Product
                                    index={index}
                                    key={item.name}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </Container>
          
        )    
}

export default Products;

