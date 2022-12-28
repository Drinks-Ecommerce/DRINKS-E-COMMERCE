import images from '../icons/images.js'
import './CarouselFooter.css';

export default function CarouselFooter() {

  return (
    <div>
      <div className='container'>

        <h4 className='text'>Empresas de todos los tamaños que confían en nuestros productos</h4>
        <div className='row'>
          <div className="col-md-12">

            <div id="carouselExample" class="carousel slide">

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

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}