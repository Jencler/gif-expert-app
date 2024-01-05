
export const GifCard = ({ title, image }) => {

  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  )
}
