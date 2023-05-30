import css from './News.module.css';
import PropTypes from 'prop-types';

export const NewsItem = ({ imgUrl, title, description, date, url }) => {

    return (
      
        <li className={css.newsItem}>

            <div className={css.imgItemWrp}>

                <img className={css.imgItem} src={imgUrl} alt={title} loading="lazy" width="280" />
                    
            </div>
            
            <div className={css.itemWrp}>
                
                <h2 className={css.newsTitleItem}> {title} </h2>
      
                <p className={css.newsDescription}> {description} </p>
      
                <div className={css.newsDateAndLink}>
        
                    <p className={css.newsDate}> {date} </p>
        
                    <a
          
                        href={url}
                        className={css.newsLink}
                        target="_blank"
                        rel="noreferrer noopener">
          
                        Read more
                    </a>
                </div>
            </div>
        </li>
    );
};


NewsItem.propTypes = {
  
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default NewsItem;