import {filters} from './filters'
import {List,Btn} from './NoticesCategoriesNav.styled'


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
                <Btn to={`/notices/${path}`}>{filter}</Btn>
            </li>
        )

    })
    
    return (
        <List>{items}</List>
    );
}

export default NoticesCategoriesNav;