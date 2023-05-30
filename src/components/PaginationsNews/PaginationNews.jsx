import css from '../PaginationsNews/PaginationNews.module.css';
import { ReactComponent as PagLeftIcon } from 'image/icons/iconPagLeft.svg';
import {ReactComponent as PagRightIcon} from 'image/icons/iconPagRight.svg';


const Pagination = ({

    currentPage,
    totalPages,
    onPageChange,
    paginationLength, }) => {

    const getPageNumbers = () => {

        const step = 2;
        const range = [];
        const left = currentPage - step;
        const right = currentPage + step + 1;

        for (let i = 1; i <= totalPages; i++) {

            if (i === 1 || i === totalPages || (i >= left && i <= right)) {
                range.push(i);
            }
        }

        return range.splice(0, paginationLength);
    };

    const handlePageChange = page => {

        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPagination = () => {

        const pageNumbers = getPageNumbers();

        return ( 

            <div className={css.wrapperPaginations}>

                <ul className={css.listPaginations}>

                    <li className={css.itemPaginations}>

                        <button className={css.btnPaginations.btnPaginationsArrow}
                            
                            onClick = {() => handlePageChange(currentPage - 1)}
                            disabled = {currentPage === 1} > 

                            <PagLeftIcon className={css['paginationsSvg']} />
                            
                        </button>
                    </li>

                    {pageNumbers.map(number => (

                        <li className={css.itemPaginations} key={number}>
                            
                        {currentPage === number ? (
                        
                            <button className={css.btnPaginations.btnPaginationsActive} onClick={() => onPageChange(number)}>
                            
                                {number}
                        
                            </button>) : (
                                    
                            <button className={css.btnPaginations} onClick={() => onPageChange(number)}>
                        
                                {number}
                    
                            </button>)
                        }
                        </li>
                    ))}
                    
                    <li className={css.itemPaginations}>

                        <button className={css.btnPaginations.btnPaginationsArrow}
                            
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}>
                            
                            <PagRightIcon className={css['paginationsSvg']} />
                        </button>
                    </li>
                </ul>
            </div>
        );
    };

    return <> {renderPagination()} </>;
};



export default Pagination;
