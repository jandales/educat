
import { Image } from '../data'

const { ProductImage1, ProductImage2, ProductImage3 } = Image

let products = [
    {
        name: 'Educat LMS',
        image: ProductImage1,
        description: 'A Learning Management System and content library that offers a variety of ways on how to learn through blended learning.'
    },
    {
        name: 'Educat Library',
        image: ProductImage2,
        description: 'An online library that contains Digital Modules, Worksheets and Assessments aligned with DepEd’s K to 12 Curriculum.'
    },
    {
        name: 'Educat Rover',
        image: ProductImage3,
        description: 'An offline solution run by mini-computers that are equipped with wireless local area network for contactless file transfers.'
    },
]

export default products