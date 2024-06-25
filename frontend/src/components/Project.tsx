import  { useRef } from 'react';

export default function Project() {
  const buttonRef = useRef(null);

  const handleImageClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <>
      <div className='mt-56 flex justify-center'>
        <p className='text-orange-400 text-1xl'>CASE STUDIES</p>
      </div>
      <div className='mt-5 flex justify-center'>
        <p className='text-4xl'>Latest Work</p>
      </div>

      <div className='flex justify-center mt-16 '>
        <div className='relative group'>
          <img
            className="h-[500px] rounded-xl opacity-100 group-hover:opacity-70 transition duration-300 ease-in-out cursor-pointer"
            src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg"
            alt="Example"
            onClick={handleImageClick}
          />
          <button
            ref={buttonRef}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-orange-500 text-2xl font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'
          >
            View
          </button>
        </div>
      </div>


      <div className='flex justify-center mt-16 ml-36'>
        <div className='relative group'>
          <img
            className="h-[500px] rounded-xl opacity-100 group-hover:opacity-70 transition duration-300 ease-in-out cursor-pointer"
            src="https://uddingstonphysiotherapy.co.uk/wp-content/uploads/bb-plugin/cache/uddingstron-physiotherapy-gym-img-9-portrait-1e856601c1a25da61670f43d981990f1-3j0rgliwn8uf.jpg"
            alt="Example"
            onClick={handleImageClick}
          />
          <button
            ref={buttonRef}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-orange-500 text-2xl font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'
          >
            View
          </button>
        </div>
      </div>
    </>
  );
}
