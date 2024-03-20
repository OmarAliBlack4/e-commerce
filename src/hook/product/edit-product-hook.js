import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GetAllCatHook from '../category/get-all-category-hook'
import GetAllBrandHook from '../brand/get-all-brand-hook'
import { getOneSupCategoury } from '../../redux/action/subCategoryAction'
import { notify } from '../../components/utility/notifications'
import { getSpecificProduct, postProduct, updateProduct } from '../../redux/action/productAction'

const EditProductHook = (id) => {


    const dispatch = useDispatch()
    const productOne = useSelector(state => state.allProducts.specificProduct)
    const subCat = useSelector(state => state.allSubCategory.subCategory)
    const product = useSelector(state => state.allProducts.updateProduct)

    //get all product with id
    useEffect(()=>{
        const asy = async()=>{
            await dispatch(getSpecificProduct(id))
        }
        asy()
    },[])
    
    //get all category
    const [,allCategory,] = GetAllCatHook();
    
    
    //get all barnd
    const [allBrand , ] = GetAllBrandHook();
    //manage state
    const [images, setImages] = useState([]);
    const [name , setName] = useState("");
    const [description , setDescription] = useState("");
    const [discount , setDiscount] = useState("");
    const [price , setPrice] = useState("");
    const [quantity , setQuantity] = useState("");
    const [category , setCategory] = useState('');
    const [brand , setBrand] = useState("");
    const [selectedID , setSelectedID] = useState([]);
    // Color state
    const [colors , setColors] = useState([])
    //open and close colors
    const [showColor , setShowColor] = useState(false)
    //options subCat
    const [options , setOptions] =useState([])
    const [loading ,setLoading] = useState(true);




    useEffect(()=>{
        if (productOne.data) {
            setImages(productOne.data.images)
            setName(productOne.data.title)
            setDescription(productOne.data.description)
            setPrice(productOne.data.price)
            setQuantity(productOne.data.quantity)
            setCategory(productOne.data.category)
            setBrand(productOne.data.brand)
            setColors(productOne.data.availableColors)
        }
    },[productOne])
    
    
    
    
    //set cat in state
    const onSelectCategory = (e)=>{
        setCategory(e.target.value)
    }
    useEffect(()=>{
        if (category != 0){
            const runC =async ()=>{
                await dispatch(getOneSupCategoury(category));
            }
            runC()
        }
    },[category])

    useEffect(()=>{
        if (subCat.data) {
            setOptions(subCat.data)
        }
    },[subCat])



    //set brand in state
    const onSelectBrand = (e)=>{
        setBrand(e.target.value)
    }
    //handel Open Color
    const handelOpenColor = ()=>{
        setShowColor(!showColor)
    }
    //when choose new color
    const handelComplete = (color)=>{
        setColors([...colors,color.hex])
        setShowColor(!showColor)
    }
    const handelDeleteColor =(color)=>{
        const vovo =colors.filter((e)=> e !== color);
        setColors(vovo);
    }


    
    const onSelect = (selectList) => {
        setSelectedID(selectList)
    }
    const onRemove = (selectList) => {
        setSelectedID(selectList)
    }

  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

    // convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };


    const handelSubmt = async(e)=>{
        
        if (discount > price || images.length <= 0 || name === "" || description === "" || price <= 0 || category === 0 || brand === 0){
            notify("Complete Data" , "warn");
            return;
        }
        e.preventDefault();
        
        //cconvert URL to File 
        let imageCover;
        if (images[0].length <= 1000) {
            imageCover = await convertURLtoFile(images[0])
        } else {
            imageCover = dataURLtoFile(images[0], Math.random() + ".png")
        }



        //convert array of base 64 image to file 
        let arrayAmg = []
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => arrayAmg.push(val))
                }
                else {
                    arrayAmg.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }
            })

            
        const formData =new FormData();
        formData.append("title",name )
        formData.append("imageCover", imageCover)
        formData.append("category",category )
        formData.append("description",description )
        formData.append("quantity",quantity )
        formData.append("price",price )
        formData.append("brand",brand )
        colors.map((item)=>{
            return formData.append("availableColors",item )
        })
        selectedID.map((item)=>{
            return formData.append("subcategory", item._id )
        })
        setTimeout(() => {
            arrayAmg.map((item)=>{
                return formData.append("images", item )
            })
        }, 2000);




        setTimeout(async() => {
            setLoading(true)
            await dispatch(updateProduct(id ,formData))
            setLoading(false)
        }, 2000);
    }




    useEffect(() => {

        if (loading === false) {
           // setCatID(0)
            setColors([])
            setImages([])
            setName('')
            setDescription('')
            setPrice('')
            setDiscount('')
            setCategory('')
            setBrand("")
            setOptions([])
            setSelectedID([])
            setQuantity("")
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 200) {
                    notify("success ", "success")
                } else {
                    notify("Error ", "error")
                }
            }
        }
    }, [loading])



    return [category,brand ,images , setImages, setName,name,description,setDescription,
        discount,setDiscount,price,setPrice,quantity,setQuantity,onSelectCategory,
        allCategory,options,onSelect,onRemove,onSelectBrand,allBrand,colors,
        handelDeleteColor,handelOpenColor,showColor,handelComplete,handelSubmt]
}

export default EditProductHook;