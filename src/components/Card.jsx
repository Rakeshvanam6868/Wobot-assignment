
const Cards = (props)=>{
    const {resData} = props;
    const {id,title,image} = resData;
    return (
        <div className="w-[225px] h-[250px] pl-3 pt-3 bg-orange-200 rounded-lg">
        <div className="w-full sm:w-[200px] gap-2 h-auto sm:h-[350px] p-2  " key={id}>
        <img src={image} alt="" className=" w-[200px] h-[100px] rounded-md object-cover"/>
        <h2 className="text-lg text-blue-950 font-semibold mt-2">{title}</h2>
        </div>
        </div>
    );
}

export default Cards;