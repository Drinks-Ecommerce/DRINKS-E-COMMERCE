import React from 'react'
import 'tw-elements';
import images from '../icons/images';

export default function Caroucel() {
  return (

    <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark relative w-full h-96 " data-bs-ride="carousel">

  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">

    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
  </div>

  <div class="carousel-inner relative w-full overflow-hidden">

    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://fronterawines.com/wp-content/uploads/2021/11/Nuevaiamegn_espanol-scaled.jpg"
        class="block w-full h-96 bg-cover"
        alt="Motorbike Smoke"
      />
    </div>


    <div class="carousel-item relative float-left w-full">
      <img
        src="https://fronterawines.com/wp-content/uploads/2021/11/GRAMMYs-scaled.jpg"
        class="block w-full h-96 bg-cover"
        alt="Woman Reading a Book"
      />
    </div>
  </div>

  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
