import React from 'react'
import firstimg from '../images/secondImg.jpeg'
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate()


  return (
    <>
      <div className=" flex items-center flex-col bg-white p-10 w-2/3 shadow-2xl rounded-xl ">
        <div className="flex justify-center items-center gap-20 mt-10">
          <div className="image ">
            <img width={300} src={firstimg} alt="" />
          </div>
          <div className="content w-2/4">
            <h1 className='mb-4 text-3xl font-bold underline'>User - Management - System</h1>
            <p className="flex text-justify p-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus cupiditate adipisci, esse, eos ullam sequi officiis
              quas quasi molestias minima iusto libeo rem consectetur! In
              expedita facere sunt ex vero. Tenetur exercitationem in
              accusantium necessitatibus minus animi voluptatum placeat nobis
              quia sequi mollitia eius enim sed officiis possimus eaque, impedit
              dolore minima veniam. Illum fuga repellat earum natus dolore
              nesciunt. Eius distinctio voluptas dolores accusantium cupiditate
              delectus possimus. Accusantium reprehenderit optio consectetur
 
            </p>
            <div className="flex justify-end mt-3">
              <button onClick={()=>{navigate('/register')}} className="btn btn-outline hover:bg-sky-500 hover:text-white border-sky-600 p-2 w-40">Add Yor Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home