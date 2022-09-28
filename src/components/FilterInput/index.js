import "./style.css"

function FilterInput(props){
    return (
        <header className="header">
          <h4 className="title">{props.title}</h4>
          <small className="subtitle">{props.subtitle}</small>
          <input type="text" id="filter" placeholder="Search" onChange = {props.onChange} />
        </header>
    );
}

export default FilterInput;