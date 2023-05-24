import filters from './filters'


const NoticesCategoriesNav = ({isUser}) => {
    const items = filters.map(({filter,path},index)=>{
        if(!isUser&&filter ==='favorite ads'){
            return null
        }
        if(!isUser&&filter==='my ads'){
            return null;
        }

        return (
            <li key={index}>
                <button to={`/notices/${path}`}>{filter}</button>
            </li>
        )

    })
    
    return (
        <ul>{items}</ul>
    );
}

export default NoticesCategoriesNav;