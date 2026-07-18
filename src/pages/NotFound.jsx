import { Link } from "react-router-dom";

function NotFound() {

    return (
        <>

            <div className="not-found">


                <h1>This Page is Not Exist !</h1>


                <button className="go-home-button"><Link to="/">الرجوع الي الصفحة الرئيسية</Link></button>



            </div>





        </>
    );
}

export default NotFound;