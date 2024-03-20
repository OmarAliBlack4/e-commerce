import React, { useEffect, useState } from 'react'
import { notify } from '../../components/utility/notifications'
import { postCategoury } from '../../redux/action/catrgoryAction'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../images/avatar.png'


const AddCategoryHook = () => {
    const dispatch = useDispatch()
    const res = useSelector(state => state.allCategory.category)

    const [img , setImg] =useState(avatar)
    const [name , setName] =useState('')
    const [selectedFile , setSelectedFile] =useState(null)
    const [loding , setLoding] = useState(true)
    const [isPress , setIsPress] = useState(false)

    //set selected image 
    const onImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const onChangeName = (e)=>{
        e.persist();
        setName(e.target.value)
    }
    // save data in database
    const handelSubmit =async (e)=>{
        e.preventDefault();

        if(name === "" || selectedFile === null){
            notify("Complete the data","warn")
            return;
        }

        const formData = new FormData();
        formData.append("name",name )
        formData.append("image",selectedFile )

        setLoding(true)
        setIsPress(true);
        await dispatch(postCategoury(formData))
        setLoding(false)

    }

    useEffect(()=>{
        if (loding === false) {
            setImg(avatar);
            setName('');
            setSelectedFile(null);
            setLoding(true);
            setIsPress(false);
                if (res.status === 201){
                    notify("Sucsses","success")
                }else{
                    notify("Error","error")
                }
        }
    },[loding])

    return [ img , name , isPress , onImageChange , onChangeName , handelSubmit ]

}

export default AddCategoryHook
