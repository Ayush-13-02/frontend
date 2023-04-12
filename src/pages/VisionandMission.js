import React from 'react'
// import vision from './../components/Img/vision.gif'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';
function VisionandMission() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dept = useLocation().pathname.split('/')[2];
  const { data, loading, error, reFetch } = useFetch(`/dept/${dept}/messageofHOD`);
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 mt-[60px] pt-[54px] place-items-center'>
        <Heading name="Vision" />
        <p className='px-4 text-justify justify-center'>
          {data?.vision}
        </p>
      </div>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 mt-[60px] pt-[54px] place-items-center'>
        <Heading name="Missions" />
        <p className='px-4 text-justify justify-center'>
          {data?.mission}
        </p>
      </div>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 mt-[60px] pt-[54px] place-items-center'>
        <Heading name="Quality Policy" />
        <p className='px-4 text-justify justify-center'>
          {data?.QualityStatements}
        </p>
      </div>


    </div>

  )
}

export default VisionandMission