import PropTypes from 'prop-types';
import moment from 'moment/moment';
import css from './News.module.css';
import  NewsItem  from './NewsItem';


export const NewsList = ({ news }) => {

    return (
    <>
        {news.length === 0 ? (
              
            <div className={css.notNewsFound}>
                  
                <h4 className={css.notNewsFoundText}>
                        
                    Sorry, your search did not match any results.
                        
                </h4>
                    
            </div> ) : (
        
            <ul className={css.newsList}>
          
                {news.map(({ _id, imgUrl, title, description, date, url }) => {
                        
                    const formatDate = moment(date, 'YYYYY-MM-DD').format('DD/MM/YYYY');
            
                    return (

                        <NewsItem
                                
                            key = {_id}
                            imgUrl = {imgUrl}
                            title = {title}
                            description = {description}
                            date={formatDate}
                            url = {url}
                        />
                    );
                })}
            </ul>
        )}
    </>
    );
};


NewsList.propTypes = {
    _id: PropTypes.string,
    imgUrl: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  
};

export default NewsList;