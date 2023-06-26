import React, { useEffect, useState } from 'react'
import {Box, Stack} from '@mui/material'
import Pagination  from '@mui/material/Pagination'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import { Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import SearchExercises from './SearchExercises'

const Exercises = ({exercises, setExercises, bodyPart}) => {
 const [currentPage, setCurrentPage]= useState(1);
 const exercisesPerPage = 9;

 const indexofLastExercise = currentPage * exercisesPerPage;
 const indexofFirstExercise = indexofLastExercise - exercisesPerPage;
 const currentExercises = exercises.slice(indexofFirstExercise, indexofLastExercise);

 const paginate= (e, value) =>{
  setCurrentPage(value);

  window.scrollTo({top: 1800, behavior: 'smooth'})
 }
 useEffect(()=>{
  const fetchExercisesData = async()=>{
    let exercisesData=[];

    if(bodyPart==='all'){
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    } else{
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }
    setExercises(exercisesData);
  }
  fetchExercisesData();
 }, [bodyPart])
  return (
    <Box id="exercises"
    sx={{
      mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
   >
    <Typography variant="h3" mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent='center'>
      {currentExercises.map((exercise, index)=>(
       <ExerciseCard key={index} exercise={exercise}/>
      ))}
   
    </Stack>
    <Stack mt="100px" alignItems='center'>
{exercises.length>9 && (
  <Pagination
  color='standard'
  shape='rounded'
    defaultPage={1}
    count={Math.ceil(exercises.length / 9)}
    page={currentPage}
    onChange={paginate}
    size="large"
    >
  </Pagination>
)}
    </Stack>
   </Box>
  )
}

export default Exercises