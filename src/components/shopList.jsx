import { List } from 'antd';
import {Link, useParams} from 'react-router-dom'

const data = Array.from({length: 12}).map((_, i) => ({
  href: '#',
  title: `Title ${i}`,
  description: 'bablalbalbla',
  price: `${i}Ar`
}))

const List = {
    'first':{
      title: 'element1',
      description: 'description2'
    },
    'second':{
      title: 'element2_1',
      description: 'description2_2'
    },
  }
  
export function ShopList (){
    return (<>
     
    </>)
  }
  
export function Item (){
    const {slug} = useParams();
    const post = List[slug];
    if (!post){
      return <span>Nothing found</span>
    }
    const {title, description} = post
  
    return (<>
      <h3>{title}</h3>
      <p>{description}</p>
    </>)
}



//<ul>
//{Object.entries(List).map(([slug, {title}])=>(
//  <li key={slug}>
//    <Link to={'/shop/' + slug}>
//      <h3>{title}</h3>
//    </Link>
//  </li>
//))}
//</ul>