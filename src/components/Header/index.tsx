import { IHeaderProps } from './interface'
import './header.scss'

const Header = (props: IHeaderProps) => {
  const { title } = props
  return (
    <div className='header'>
      <h1 className='header__title sr-only'>{title}</h1>
    </div>
  )
}

export default Header
