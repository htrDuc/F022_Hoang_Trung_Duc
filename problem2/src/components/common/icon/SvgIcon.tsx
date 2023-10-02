import { useDynamicSvgImport } from '@hooks/useDynamicSvgImport'
import { ISvgIconProps } from './SvgIcon.type'

export function SvgIcon(props: ISvgIconProps) {
  const { iconName, wrapperStyle, svgProp } = props
  const { loading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <>
      {loading && <div className='rounded-full bg-slate-400 animate-pulse h-8 w-8'></div>}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  )
}
