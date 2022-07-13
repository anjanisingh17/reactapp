function Netflix(props){

    return(     
     
       <div className="cards">
        <div className="card">
            <div>
            <img src={props.imgsrc} alt="mypic" className="card__img" width="100%" height="250" />
            </div>
            <div className="card__info">
                <div className="movieinfo">
                <span className="card__category">{props.title}</span>
                <h3 className="card__title">{props.sname}</h3>
                </div>
                <div className="d-block">
                <a href={props.link} target="_blank">
                    <button> Watch Now </button>
                    
                </a>
                </div>
            </div>    
        </div>
       </div>    
    )
}

export default Netflix;
