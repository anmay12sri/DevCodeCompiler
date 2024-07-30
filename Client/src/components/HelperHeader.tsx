// import React from 'react';
import {   Share2Icon,Save } from 'lucide-react';
import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux';
import { CompilerSliceStateType, updateCurrentLanguage } from '@/redux/slices/Compilerslice';
import { RootState } from '@/redux/store';
import { handleError } from '@/utils/handleError';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
  



export default function HelperHeader() {
  const navigate=useNavigate()
  const fullCode=useSelector((state:RootState)=>state.Compilerslice.fullcode)
  const handleSaveCode=async()=>{
     try{
          const response=await axios.post('http://localhost:4000/compiler/save',{
            fullCode:fullCode,
          })
          console.log(response.data);
          navigate(response.data.urlId)
          
     }catch(error){
       handleError(error)
     }
  }
  const dispatch=useDispatch();
   const currentLanguage=useSelector((state:RootState)=>state.Compilerslice.currentLanguage)
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-3">
        <Button onClick={handleSaveCode}className='hover:bg-green-700 gap-1' variant="success">
        <Save size={16} />Save
            </Button>
        <Button  variant="secondary" className='gap-1'>
        <Share2Icon size={16}/>Share
        </Button>
      </div>
      <div className="Select_Switcher flex justify-center gap-1">
        <p className='mt-1 font-bold'>Current Langauge:</p>
      <Select defaultValue={currentLanguage} onValueChange={(value)=>dispatch(updateCurrentLanguage(value as CompilerSliceStateType["currentLanguage"]))}
        >
  <SelectTrigger className="w-[140px] bg-gray-800 outline-none focus-ring0">
    <SelectValue   />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="html">HTML</SelectItem>
    <SelectItem value="css">CSS</SelectItem>
    <SelectItem value="javascript">JavaScript</SelectItem>
  </SelectContent>
</Select>

      </div>
    </div>
  );
}
