import TextStyleFactory from './textStyle'
import ButtonStyleFactory from './buttonStyle'
import ModalStyleFactory from './modal'

import Theme from '../theme'

export default globalStyles = (theme) => ({
    textStyle: TextStyleFactory.getSheet(Theme[theme]),
    buttonStyle: ButtonStyleFactory.getSheet(Theme[theme]),
    modalStyle: ModalStyleFactory(Theme[theme])
})
