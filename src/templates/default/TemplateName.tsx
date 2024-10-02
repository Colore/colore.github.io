import { FC } from 'react'
import styles from './TemplateName.module.scss'
import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
    <div className={styles.TemplateName}>TemplateName Component</div>
)

export default TemplateName
