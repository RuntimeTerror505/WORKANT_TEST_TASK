import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import TimesheetsTable from "./TimeSheetTable";




const Home = () => {
    const [info, setInfo] = useState(false)

    return (
        <div className="container">
            {!info && <EmployeeTable open={info} setOpen={setInfo}/>}
            {info && <TimesheetsTable open={info} setOpen={setInfo}/>}
        </div>
    )
}
export default Home;