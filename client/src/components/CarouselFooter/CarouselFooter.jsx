import images from '../icons/images.js'
import './CarouselFooter.css';

export default function CarouselFooter() {

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">

            <div id="carouselExampleDark" class="carousel carousel-dark slide">

              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>

              <div className="carousel-inner">

                <div className="carousel-item active">
                  <div className='row'>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img1} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img2} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img3} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img3} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img1} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img1} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="carousel-item">
                  <div className='row'>

                    <div className='col-md-2'>
                      <div className='single-bow' >
                        <img src={images.img2} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow' >
                        <img src={images.img2} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow' >
                        <img src={images.img2} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img2} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img3} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                    <div className='col-md-2'>
                      <div className='single-bow'>
                        <img src={images.img3} class="d-block w-100" alt="..." />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}