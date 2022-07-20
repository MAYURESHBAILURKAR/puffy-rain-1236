// let getFetchData = async(url) =>{
     
//     try{
//       let res=await fetch(url);

//       let data=await res.json();
  
//       return data.articles
//     }catch(er){
//       console.log(er)
//     }

// }



// let append = (data,container) =>{

//     for(let i=0; i<5; i++){
//          let div=document.createElement("div");
      

//          let Image=document.createElement("img");
//          Image.src=data[i].urlToImage;
//          Image.setAttribute("id","Eimg")

//         let tilte =document.createElement("h3");
//         tilte.innerText=data[i].title;

//         let content = document.createElement("p")
//         content.innerText="*  "+data[i].content

//         div.append(Image,tilte,content);

//         container.append(div)

//     }

// }


// let appends=(arr,container)=>{
    
//   for(let i=9;i<13;i++){
     
//       let DIV=document.createElement("div")
//       DIV.setAttribute("class","newsM")

//       let image=document.createElement("img")
//       image.src=arr[i].urlToImage

//       let  H5=document.createElement("h3")
//       H5.innerText=arr[i].title
      

//        DIV.append(image,H5)
//        let container=document.getElementById("travel")
//        container.append(DIV)
//        DIV.addEventListener("click",()=>{
//           storeData(arr[i])
//       })

      
 
//       }
//       let storeData=(elem)=>{
//           localStorage.setItem("detailNews",JSON.stringify(elem))
//           window.location.href="details.html"
//      } 

// }


//  export {getFetchData, append,appends}



