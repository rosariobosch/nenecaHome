import './filter-card.scss'

const FilterCard = ({filter, bgImage}) => {

    const styles = {
        backgroundImage: `url(${bgImage})`,
    }

    return(
        <div className='filter-card' style={styles}>
            <h2 className='filter-name'>{filter}</h2>
        </div>
    )
}
export default FilterCard