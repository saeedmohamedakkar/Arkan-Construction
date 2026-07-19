import { Link } from "react-router-dom";

function NotFound() {

    return (
        <>

            <div className="not-found">


                <h1>This Page is Not Exist !</h1>


                <Link className="go-home-button" to="/">الرجوع الي الصفحة الرئيسية</Link>



            </div>





        </>
    );
}

export default NotFound;