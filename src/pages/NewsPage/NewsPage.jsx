import React, { useEffect, useState, useMemo } from 'react';

import Loader from '../../components/Loader/loader';
import {fetchNews} from '../../helpers';
import { sortNewsByDate } from '../../helpers';
import NewsList from '../../components/News/NewsList';
import SearchField from '../../components/SearchField/SearchField';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/PaginationsNews/PaginationNews';
import { notify } from '../../helpers';

import css from '../NewsPage/NewsPage.module.css';


const NewsPage = () => {

    const limit = 6;
    const [loading, setLoading] = useState(false);
    const [setIsError] = useState(false);
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const isTablet = window.matchMedia('(min-width: 768px)').matches;

    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    );


    useEffect(() => {
      
        setLoading(true);

        const getNews = async ({ searchQuery, page, limit }) => {

            try {
                const newNews = await fetchNews({ searchQuery, page, limit });

                if (!newNews.totalPages) {
                    return;
                }
        
                setNews(sortNewsByDate(newNews.data));

                setTotalPages(newNews.totalPages);

            } catch (error) {

                setIsError(true);
                console.log(error);
                notify('error', error.message);

            } finally {
                
                setLoading(false);
            }
        };
         
        if (!searchQuery) {
      
            getNews({ page, limit });
            return;
        }
    
        getNews({ searchQuery, page, limit });
        
    }, [searchQuery, page, limit, setIsError]);


    const handleSearchSubmit = searchQuery => {
    
        const nextParams = searchQuery !== '' ? { searchQuery } : {};
    
        setSearchParams(nextParams);
    
        setSearchQuery(searchQuery);
    
        setPage(1);
    };

    
    const handlePageChange = page => {
    
        setSearchParams({ ...params, page });

        setPage(page);
    };

 

    return (
      
        <div className={css.containerNews}>

            <h2 className={css.title}> News </h2>

            {loading && <Loader  />}

            <SearchField onSubmit={handleSearchSubmit} />
            
            {news && news.length > 0 && <NewsList news = {news} />}

            {totalPages > 1 && (
                
                <Pagination
                    
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    paginationLength={isTablet ? 5 : 4}
                />
            )}
        </div>
    );
}

export default NewsPage;