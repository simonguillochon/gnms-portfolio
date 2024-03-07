import { useTranslation } from "react-i18next";
import DownloadIcon from "../icons/DownloadIcon";
import ProfilePicture from '../resources/profile.jpg';

export default function PresentationComponent() {
  const { t } = useTranslation();

  return (
    <div className="hero bg-base-200 p-12 justify-start">
      <div className="hero-content max-w-full">
        <img className="grow-0 max-h-56 rounded-lg grayscale shadow-2xl" src={ProfilePicture} />
        <div className='ps-6 text-start grow'>
          <h1 className="text-6xl font-bold">
            {t('welcome: title')}
          </h1>
          <p className="py-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor ac orci a congue. Donec tristique luctus lectus nec semper. Morbi hendrerit ullamcorper egestas. Fusce nibh ante, consectetur et gravida sit amet, volutpat id libero. In id condimentum urna, sit amet sollicitudin mauris. Mauris semper nisl quis lectus porta consequat eget vel nibh. Donec scelerisque venenatis enim sit amet bibendum.
          </p>
          <button className="btn btn-primary">
            <DownloadIcon />
            {t('welcome: download-resume-button')}
          </button>
        </div>
      </div>
    </div>
  )
}
