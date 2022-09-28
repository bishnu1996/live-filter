import './style.css';


function UserCard (props){
    return (
        <>
        <img src={props.user.picture.large} alt={props.user.name.first} />
        <div className="user-info">
            <h4>{props.user.name.first} {props.user.name.last}</h4>
            <p>{props.user.location.city}, {props.user.location.country}</p>
        </div>
        </>
    );
}

export default UserCard;