import { ColorThemeSelector } from '~/app/_component/color-theme-selector'
import { Inner } from '~/app/_component/ui'

export const Header = () => {
  return (
    <header className="">
      <Inner>
        <div className="flex justify-end">
          <ColorThemeSelector />
        </div>
      </Inner>
    </header>
  )
}
