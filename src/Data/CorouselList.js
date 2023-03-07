import { Image } from "../data";

const { FeatureImage1, FeatureImage2, FeatureImage3, } = Image;

const CarouselList = [
    {
        counterText: '01',
        title: "Do more with Educat",
        heading: 'Offline learning',
        description: 'The ideal solution to empower learners with no access to an internet cinnection',
        image: FeatureImage1,
    },
    {
        title: "Do more with Educat",
        counterText: '02',
        heading: 'Supplementary Learning Materials',
        description: 'Our printed and interactive learning materials are perfect to help strengthen your learning.',
        image: FeatureImage2,
    },
    {
        title: "Do more with Educat",
        counterText: "03",
        heading: "All-in-one LMS Platform",
        description: "All the solutions you need in one powe  rful platform.",
        image: FeatureImage3,
    }
]

export default CarouselList;