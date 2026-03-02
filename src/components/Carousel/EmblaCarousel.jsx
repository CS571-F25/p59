import { useState, lazy, Suspense} from 'react'
import Image from 'react-bootstrap/Image'
import { imgUrl } from '@/utils/cloudinary';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'

const ImageModal = lazy(() => import('../ImageModal.jsx')); //for lazy loading modal, only needed when clicked

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  const [showDetails, setShowDetails] = useState(null);

  return (
    <>
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Image src={imgUrl(slide.img)} alt={slide.description} loading="lazy" fluid={true} onClick={() => setShowDetails(slide)}/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
    
    {
    
      <Suspense fallback={null}>
        {showDetails && <ImageModal art={showDetails} onClose={() => setShowDetails(null)}/>}
      </Suspense>

    }
    </>
  )
}

export default EmblaCarousel
