// import React, {useEffect, useState} from 'react'
// import {Box, Button, Stack, TextField, Typography} from '@mui/material'
// import { exerciseOptions, fetchData } from '../utils/fetchData';
//  import  HorizontalScrollbar from './HorizontalScrollbar';

// const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
//   const [search, setSearch] = useState('');
  
//   const [bodyParts, setBodyParts]= useState([]);

//   useEffect(()=> {
//     const fetchExercisesData = async () => {
//       try {
//         const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    
//         if (Array.isArray(bodyPartsData)) {
//           setBodyParts(['all', ...bodyPartsData]);
//         } else {
//           console.log('Invalid bodyPartsData:', bodyPartsData);
//           // Handle the case where bodyPartsData is not an array
//         }
//       } catch (error) {
//         console.log('Error fetching exercises data:', error);
//         // Handle the error if the API call fails
//       }
//     };
//     fetchExercisesData();
//   }, [])

//   const handleSearch = async () => {
//     if (search) {
//       try {
//         const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  
//         if (Array.isArray(exercisesData)) {
//           const searchedExercises = exercisesData.filter((exercise) => {
//             const name = exercise.name ? exercise.name.toLowerCase() : '';
//             const target = exercise.target ? exercise.target.toLowerCase() : '';
//             const equipment = exercise.equipment ? exercise.equipment.toLowerCase() : '';
//             const bodyPart = exercise.bodyPart ? exercise.bodyPart.toLowerCase() : '';
  
//             return (
//               name.includes(search.toLowerCase()) ||
//               target.includes(search.toLowerCase()) ||
//               equipment.includes(search.toLowerCase()) ||
//               bodyPart.includes(search.toLowerCase())
//             );
//           });
  
//           setSearch('');
//           setExercises(searchedExercises);
//         } else {
//           console.log('Invalid exercisesData:', exercisesData);
//           // Handle the case where exercisesData is not an array
//         }
//       } catch (error) {
//         console.log('Error fetching exercises data:', error);
//         // Handle the error if the API call fails
//       }
//     }
//   };
  

//   return (
//    <Stack alignItems="center" mt="37px" justifyContent='center' p="20px">
//     <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'30px'}}}
//     mb="50px" textAlign="center"r
//     >Awesome exercises you <br/> should know</Typography>
//     <Box position="relative" mb="72px">
//       <TextField
//       sx={{
//         input: {fontWeight: '700', 
//       border: 'none', borderRadius:
//     '4px'
//   },
//   width:{ lg: '800px', xs:'350px'},
//   backgroundColor: '#fff',
//   borderRadius: '40px'
//       }}
//       height="76px"
//        value={search}
//       onChange={(e)=> setSearch(e.target.value.toLowerCase())}
//       placeholder='Search Exercises'
//        type="text"
//       />
      
//       <Button className='search-btn'
//       sx={{
//       bgcolor: '#FF2625',
//       color: '#fff',
//     textTransform: 'none',
//   width: { lg: '175px', xs: '80px'},
//   fontSize: {lg: '20px', xs: '14px'},
//  height: '56px',
//  position: "absolute",
//  right: '0'
// }}
// onClick={handleSearch}
// >Search</Button>
//         </Box>

//          <Box sx={{width: '100%', position: 'relative', p: '20px'}}>
//           <HorizontalScrollbar data={bodyParts}
//           bodyPart={bodyPart} setBodyPart={setBodyPart}/>
//          </Box> 
//    </Stack>
//   )
// }

// export default SearchExercises



import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;