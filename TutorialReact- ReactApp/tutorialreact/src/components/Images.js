import person from "../assets/image2.jpg"


const Images = () => {
  return (
    <div>
      <img src="/image1.jpg"></img>
      <img src={person}></img>
    </div>
  )
}

export default Images