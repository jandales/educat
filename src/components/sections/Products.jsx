import Product from '../product/Product'
import Title from '../Base/title';
import Heading from '../Base/heading';

let products = [
    {
        name: 'Educat LMS',
        image: '../src/assets/product1-9f2d4724.svg',
        description: 'A Learning Management System and content library that offers a variety of ways on how to learn through blended learning.'
    },
    {
        name: 'Educat Library',
        image: '../src/assets/product2-6bbac318.svg',
        description: 'An online library that contains Digital Modules, Worksheets and Assessments aligned with DepEd’s K to 12 Curriculum.'
    },
    {
        name: 'Educat Rover',
        image: '../src/assets/product3-1494babf.svg',
        description: 'An offline solution run by mini-computers that are equipped with wireless local area network for contactless file transfers.'
    },
]


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

