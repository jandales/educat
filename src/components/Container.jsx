export default function Container({ children }) {
    return ( 
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            {children}
        </section>
    )
}
