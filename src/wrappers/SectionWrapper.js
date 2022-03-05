const SectionWrapper = ( { sectionClass, children } ) => {
    return (
        <div className={ `${ sectionClass }-section-con` }>
            <section className={ `${ sectionClass }-section-inside` }>
                { children }
            </section>
        </div>
    )
}

export default SectionWrapper;