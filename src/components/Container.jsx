export default function Container({ children }) {
    return ( 
        <section className="w-full p-4 lg:max-w-5xl xl:max-w-6xl lg:mx-auto lg:p-0">
            {children}
        </section>
    )
}
