import Product from '../product/Product'
import Title from '../Base/title'
import Heading from '../Base/heading'
import products from '../../Data/Products'
import Container from '../Container'

function Products() {
    return (
            <Container>
                <div data-aos="fade-up" id="products" className="w-full pt-12 lg:h-[526px] lg:mx-auto">

                    <Heading text="Our Products" />

                    <Title text='Learn without Limits' />

                    <div className="flex justify-center gap-14 w-full mt-20 items-center flex-col md:flex-row">

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
                        }
                        )
                        }
                    </div>
                </div>
            </Container>
          
        )    
}

export default Products;

